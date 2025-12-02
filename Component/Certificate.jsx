import React from "react";
import medcodeLogo from "../assets/logo.png"; 

const Certificate = () => {
  return (
    <div
      className="w-full flex justify-center items-center bg-gray-100 py-10"
    >
      <div
        className="relative w-[900px] border-10 border-[#344FA1] bg-white p-10"
        style={{
          fontFamily: "serif",
        }}
      >
        {/* ===== NEW LOGO (Replaces NEXUS) ===== */}
        <img
          src={medcodeLogo}
          alt="MedCode.tech Logo"
          className="absolute top-6 left-6 w-40"
        />

        {/* ===== Right side ISO text ===== */}
        <div className="absolute top-8 right-8 text-[#344FA1] text-sm font-semibold">
          <p>ISO 27001:2013</p>
          <p>ISO 9001:2015</p>
        </div>

        {/* ===== Certificate Title ===== */}
        <h1 className="text-center text-4xl font-bold mt-16 tracking-wider">
          <span className="font-black italic text-5xl">
            Corporate Training Center LLP.
          </span>
        </h1>

        {/* ===== This is to certify text ===== */}
        <p className="text-center font-semibold mt-6">
          THIS IS TO CERTIFY THAT
        </p>

        {/* Divider */}
        <div className="w-1/2 mx-auto border-b-2 mt-4"></div>

        {/* Certificate Description */}
        <p className="text-center text-sm mt-6 leading-7 px-14">
          “Having successfully completed the online aptitude assessment and
          demonstrated the required standards of knowledge, skills, and
          performance, the candidate is hereby conferred this Global Credential
          in recognition of their achievement.”
        </p>

        {/* ===== Certification Course ===== */}
        <h2 className="text-center text-xl font-bold mt-10">
          Certification Course For
        </h2>

        <p className="text-center mt-4 font-medium">
          IN TESTIMONY WHEREOF, WE HAVE SUBSCRIBED OUR SIGNATURES UNDER THE
          SEAL OF THE INSTITUTE
        </p>

        {/* ===== Signatures Section ===== */}
        <div className="flex justify-between items-center mt-12 px-10">
          {/* Left Seal */}
          <div>
            <img
              src="https://i.postimg.cc/VN7g6P6C/seal.png"
              alt="Seal"
              className="w-40"
            />
          </div>

          {/* Left Signature */}
          <div className="text-center">
            <div className="w-40 border-b"></div>
            <p className="font-bold mt-2">Aditi Dhambare</p>
            <p className="text-sm">Chair, Board of Director</p>
          </div>

          {/* Right Signature */}
          <div className="text-center">
            <div className="w-40 border-b"></div>
            <p className="font-bold mt-2">Satish G. Ingole</p>
            <p className="text-sm">President and Chief Executive Officer</p>
          </div>

          {/* QR Code */}
          <div>
            <img
              src="https://i.postimg.cc/438XMn9g/qrcode.png"
              alt="QR"
              className="w-24"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="text-sm mt-10 px-10">
          <p>CCFMP® Number of Hrs : 30</p>
          <p>CCFMP® Course Start Date :</p>
          <p>CCFMP® Course End Date :</p>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
