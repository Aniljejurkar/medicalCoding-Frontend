import React from 'react'
import MedicalCodingBanner from '../Component/MedicalCodingBanner'
import FeatureCards from '../Component/FeatureCards'
import WhyHenryHarvin from '../Component/WhyHenry'
import FeaturesGrid from '../Component/FeaturedGrid'
import PlacedLearners from '../Component/PlacedLerner'
import AwardsSection from '../Component/AwardSection'
import TestimonialSection from '../Component/TestimonialSection'
import Program10in1 from '../Component/Program10in1'
import MedicalCodingCertificate from '../Component/MedicalCoddingCertificate'
import Footer from '../Component/Footer'
import TopBar from '../Component/TopBar'
import AccordionSection from '../Component/AccordionSection'




const Home = () => {
  return (
    <div>
        <TopBar />
        <MedicalCodingBanner />
        <FeatureCards />
        <WhyHenryHarvin />
        <FeaturesGrid />
        <AwardsSection />
        <PlacedLearners />
        <AccordionSection />
        <TestimonialSection />
        <Program10in1 />
        <MedicalCodingCertificate />
        <Footer />
        
    </div>
  )
}

export default Home