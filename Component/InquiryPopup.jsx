import React, { useState, useRef, useEffect } from "react";

const InquiryPopup = ({ soundSrc = "/sounds/pop.mp3" }) => {
  const [open, setOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    name: "",
    phone: "",
    inquiryType: "",
    message: "",
  });

  const cardRef = useRef(null);
  const audioRef = useRef(null);

  // Load sound
  useEffect(() => {
    audioRef.current = new Audio(soundSrc);
    audioRef.current.volume = 0.8;
  }, [soundSrc]);

  // Validation
  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.phone.trim()) e.phone = "Required";
    else if (!/^\+?[\d\s()-]{7,20}$/.test(form.phone))
      e.phone = "Invalid number";
    if (!form.inquiryType) e.inquiryType = "Required";
    if (!form.message.trim() || form.message.trim().length < 6)
      e.message = "Min 6 characters";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  // Handle input change
  const change = (key) => (e) => {
    setForm((s) => ({ ...s, [key]: e.target.value }));
    setErrors((p) => ({ ...p, [key]: undefined }));
  };

  // Submit form
  const submit = async (e) => {
    e.preventDefault();
    if (sending) return;

    if (!validate()) {
      cardRef.current.classList.remove("shake");
      void cardRef.current.offsetWidth;
      cardRef.current.classList.add("shake");
      return;
    }

    try {
      setSending(true);
      audioRef.current?.play().catch(() => {});

      await fetch("http://localhost:8181/api/inquiry/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          inquiryType: form.inquiryType,
          message: form.message,
        }),
      });

      setSuccess(true);
      setForm({ name: "", phone: "", inquiryType: "", message: "" });

      setTimeout(() => {
        setSuccess(false);
        setOpen(false);
      }, 2000);
    } catch (err) {
      console.error(err);
      alert("Submission failed. Try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setOpen((s) => !s)}
          className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500
          text-white text-xl shadow-lg hover:scale-110 active:scale-95 transition"
        >
          {open ? "×" : "💬"}
        </button>
      </div>

      {/* Popup Card */}
      {open && (
        <div
          ref={cardRef}
          className={`fixed bottom-20 right-6 w-64 p-4 z-40 bg-white rounded-xl
          border shadow-lg animate-popupScale
          ${Object.keys(errors).length ? "ring-1 ring-red-300" : ""}`}
        >
          <button
            onClick={() => setOpen(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
          >
            ×
          </button>

          <h3 className="text-sm font-semibold mb-1">
            Medical Coding Inquiry
          </h3>
          <p className="text-xs text-gray-500 mb-3">
            ICD-10 • CPT • Modifiers • Billing
          </p>

          <form className="flex flex-col gap-2" onSubmit={submit}>
            <input
              value={form.name}
              onChange={change("name")}
              placeholder="Name"
              className={`input ${errors.name && "border-red-400"}`}
            />

            <input
              value={form.phone}
              onChange={change("phone")}
              placeholder="Phone"
              className={`input ${errors.phone && "border-red-400"}`}
            />

            <select
              value={form.inquiryType}
              onChange={change("inquiryType")}
              className={`input ${errors.inquiryType && "border-red-400"}`}
            >
              <option value="">Select Inquiry</option>
              <option value="ICD-10">ICD-10</option>
              <option value="CPT">CPT</option>
              <option value="Modifier">Modifier</option>
              <option value="Billing">Billing</option>
            </select>

            <textarea
              value={form.message}
              onChange={change("message")}
              rows={2}
              placeholder="Message"
              className={`input resize-none ${errors.message && "border-red-400"}`}
            />

            <button
              type="submit"
              disabled={sending}
              className="w-full py-2 rounded-full text-sm font-semibold
              bg-gradient-to-r from-purple-500 to-cyan-500 text-white"
            >
              {sending ? "Sending..." : "Send Inquiry"}
            </button>
          </form>
        </div>
      )}

      {/* Success Toast */}
      {success && (
        <div className="fixed bottom-32 right-6 z-50 bg-white px-3 py-2
        rounded-md border shadow-md text-xs flex gap-2">
          <span className="text-green-600 font-bold">✓</span>
          Sent successfully!
        </div>
      )}

      <style>{`
        .input {
          width: 100%;
          padding: 8px 12px;
          font-size: 13px;
          border-radius: 6px;
          border: 1px solid #d1d5db;
          background: #f9fafb;
        }
        @keyframes popupIn {
          from { transform: translateY(10px) scale(.95); opacity: 0; }
          to { transform: translateY(0) scale(1); opacity: 1; }
        }
        .animate-popupScale { animation: popupIn .25s ease-out; }
        .shake { animation: shake .25s ease-in-out; }
        @keyframes shake {
          25% { transform: translateX(-3px); }
          50% { transform: translateX(3px); }
          75% { transform: translateX(-3px); }
        }
      `}</style>
    </>
  );
};

export default InquiryPopup;
