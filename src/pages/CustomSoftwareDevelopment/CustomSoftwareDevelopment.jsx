import React from "react";
import HeroSection from "../../layouts/HeroSection";
import cloudServicesImage from "../../assets/web-1.jpg";
import "./CustomSoftwareDevelopment.css"; 

const CustomSoftwareDevelopment = () => (
  <div className="custom-software-container">
    <HeroSection
      icon="💻"
      bgImage={cloudServicesImage}
      title="Custom Software Development"
      subtitle="Tailored software solutions designed to meet your unique business needs and drive growth."
    />
    <div className="service-content">
      <h2 className="service-heading">Why Choose Our Custom Software Development Services?</h2>
      <p className="service-paragraph">
        At <strong>Your Company</strong>, we specialize in building tailored software solutions 
        that empower businesses to thrive. Whether you're a startup seeking a 
        competitive edge or an established enterprise aiming to optimize operations, 
        our team of experts will craft the perfect solution for you.
      </p>
      <p className="service-paragraph">
        Our development process is collaborative, transparent, and agile. We ensure 
        that your software is not only functional but also scalable, secure, and 
        designed for future growth. Partner with us to transform your vision into 
        a powerful digital reality.
      </p>
      <h3 className="service-subheading">Our Process</h3>
      <ul className="process-list">
        <li>Requirement Analysis & Planning</li>
        <li>UI/UX Design</li>
        <li>Agile Development & Iterative Testing</li>
        <li>Deployment & Post-launch Support</li>
      </ul>
      <h3 className="service-subheading">Key Features</h3>
      <ul className="features-list">
        <li>Scalable architecture</li>
        <li>Cross-platform compatibility</li>
        <li>Cutting-edge technology stack</li>
        <li>Seamless integration with existing systems</li>
      </ul>
    </div>
  </div>
);

export default CustomSoftwareDevelopment;
