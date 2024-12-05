import React, { useState } from 'react';
import './ResponsiveWebDesign.css';
import ResponsiveWeb1 from '../../assets/wevdes.jpg';
import ResponsiveWeb2 from './../../Images/ResponsiveWeb2.png';
import ResponsiveWeb3 from './../../Images/ResponsiveWeb3.webp'
import { AiOutlineHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { RiDatabase2Fill } from "react-icons/ri";
import { IoTimerOutline } from "react-icons/io5";
import { SiAudiotechnica } from "react-icons/si";
import { BsPersonCircle } from "react-icons/bs";
import { GrServices } from "react-icons/gr";

const icons = [
  { Component: AiOutlineHtml5, className: 'res_icon' },
  { Component: IoLogoCss3, className: 'res_icon' },
  { Component: FaReact, className: 'res_icon' },
  { Component: RiDatabase2Fill, className: 'res_icon' },
];

const features = [
  { title: "Creative Approach", description: "Price/Cost is obviously one of the main concerns with any venture or small Business man or individual Person", icon: SiAudiotechnica },
  { title: "Experienced Professionals", description: "Price/Const is obviously one of the main concerns with any venture or small Business man or individual person", icon: IoTimerOutline },
  { title: "Experienced Professionals", description: "Price/Const is obviously one of the main concerns any venture or small Business man or individual person ", icon: BsPersonCircle },
  { title: "Technically Sound", description: "Price/Cost is obviously one of the main concerns with any venture or small Business man or individual person ", icon: GrServices },
];

function IconList() {
  return (
    <div style={{ marginTop: "60px" }}>
      {icons.map(({ Component, className }, index) => (
        <Component key={index} className={className} />
      ))}
    </div>
  );
}

function FeatureList() {
  return (
    <div className="row feature-list  m-4">
      {features.map(({ title, description, icon: Icon }, index) => (
        <div key={index} className="col-12 col-lg-6 feature-item d-flex px-5 py-3">
          <Icon className="feature-icon res_diffe_icon me-4" />
          <div className="feature-text">
            <h4 className="feature-title">{title}</h4>
            <p className="feature-description">{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}


export default function ResponsiveWebDesign() {
  const [formData, setFormData] = useState({
    name: "",
    company_organization: "",
    email: "",
    contact: "",
    country: "",
    description: "",
    quotationOptions: {
      webDesign: false,
      webApplication: false,
      cloudSolution: false,
      otherQueries: false,
    },
  });
  const [errors, setErrors] = useState({})
  const validateForm = () => {
    const newErrors = {};
  
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
  
    if (!formData.company_organization.trim()) {
      newErrors.company_organization = "Company/Organization is required";
    }
  
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
  
    if (!formData.contact.trim()) {
      newErrors.contact = "Contact number is required";
    } else if (!/^\d{10}$/.test(formData.contact)) {
      newErrors.contact = "Contact number must be 10 digits";
    }
  
    if (!formData.country) {
      newErrors.country = "Please select a country";
    }
  
    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }
  
    const checkboxValues = Object.values(formData.quotationOptions);
    if (!checkboxValues.includes(true)) {
      newErrors.quotationOptions = "At least one option must be selected";
    }
  
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      quotationOptions: { ...prev.quotationOptions, [id]: checked },
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted successfully:", formData);
      setFormData({
        name: "",
        company_organization: "",
        email: "",
        contact: "",
        country: "",
        description: "",
        quotationOptions: {
          webDesign: false,
          webApplication: false,
          cloudSolution: false,
          otherQueries: false,
        },
      });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div style={{ marginTop: "90px" }}>
      <section className="Responsive_top">
        <img src={ResponsiveWeb1} className="responsive1" alt="responsive top" />
        <div className="overlay">
          <h1 className="responsive-header">Responsive Web Designing</h1>
          <h5  className="responsive-description">  Find out what great work can do to your business. At AKS Websoft, we help customize your website  to increase your business visibility worldwide. Find out what great work can do to your business. At AKS Websoft, we help customize your website to increase your business visibility worldwide.  </h5>
          <h4  className="responsive-subheading mt-4">Transform your wesite to match all devices.</h4>
          <h5  className="responsive-description">Find out what great work can do to your business. At AKS Websoft, we help customize your website to increase your business visibility worldwide.</h5>
          <IconList />
        </div>
      </section>

      <section>
  <div className="row m-4">
   
    <div className="col-12 col-lg-6 mt-3 ps-5">
      <h3 className="section-header">
        Responsive Web Designing
      </h3>
      <h6 className="section-title">
        Website You Love and Your Customers Love
      </h6>
      <p className="section-subtitle">
        In the very short way, we can say - Web design is the skill of creating presentations of content, color, and images that is delivered to an end-user through the World Wide Web.
      </p>
      <p className="section-subtitle">
        In the very short way, we can say - Web design is the skill of creating presentations of content, color, and images that is delivered to an end-user through the World Wide Web.
      </p>
    </div>

   
    <div className="col-12 col-lg-6 d-flex justify-content-center">
      <div className="process-design-container">
        <img
          src={ResponsiveWeb2}
          className="process-design"
          alt="design process"
        />
      </div>
    </div>
  </div>
</section>

      
      <section>
      <div className='web-container' >
            <div style={{width:"70%", margin:"auto"}}>
            <h1 className='web-header'>Responsive Web Designing</h1>
            <p className='web-text'>Understanding what a website needs to do, and who your audience is?
            Suggest domain name and web hosting as per your requirements
            Start designing according to customer's and market requirements in term of
            visualization.
            Website testing, it covers w3c validation / browser compatibility / fast
            downloading and error free site.
            Ready to visible in Search engines.</p>
            <p className='web-text'>Understanding what a website needs to do, and who your audience is?
            Suggest domain name and web hosting as per your requirements
            Start designing according to customer's and market requirements in term of
            .</p>
            </div>
    </div>
      </section>

      <section className="different-section py-5">
  <h2 className="text-primary text-center mb-4">What Makes Us Different?</h2>
  <div className="feature-container">
    <FeatureList />
  </div>
</section>

      <div className='disire_output_conatainer' >
        <img src={ResponsiveWeb3} className='w-100 h-100 img-fluid ' alt="responsive"  />
      </div>


     <section className='form-container-wrapper'>
     <div className="mx-5 px-5 form-container">
  <h2 className="text-primary form-header">Request for Quotation</h2>
  <p className="form-title">
    The purpose of this form is to give us your feedback/comment/report/problems.
    Your opinions are highly valued, as we believe that your feedback can help
    us improve our services and commitment.
  </p>
  <form onSubmit={handleSubmit}>
    <div className="row">
     
      <div className="col-12 col-lg-6">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="respon-contact"
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>

     
      <div className="col-12 col-lg-6">
        <input
          type="text"
          name="company_organization"
          value={formData.company_organization}
          onChange={handleChange}
          placeholder="Company/Organization"
          className="respon-contact"
        />
        {errors.company_organization && <p className="error">{errors.company_organization}</p>}
      </div>

     
      <div className="col-12 col-lg-6">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email ID"
          className="respon-contact"
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

     
      <div className="col-12 col-lg-6">
        <input
          type="text"
          placeholder="Contact No."
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          className="respon-contact"
        />
        {errors.contact && <p className="error">{errors.contact}</p>}
      </div>

     
      <div className="col-12 col-lg-6">
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="respon-contact"
        >
          <option value="">Your Country</option>
          <option value="India">India</option>
          <option value="UK">UK</option>
          <option value="Australia">Australia</option>
          <option value="Pakistan">Pakistan</option>
        </select>
        {errors.country && <p className="error">{errors.country}</p>}
      </div>

     
      <div className="col-12 col-lg-6">
        <textarea
          cols="6"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="text_area"
          placeholder="Please Describe Your Requirement"
        />
        {errors.description && <p className="error">{errors.description}</p>}
      </div>

      <div className="col-12 col-lg-6 ms-4 ps-3" style={{ marginTop: "-100px" }}>
        <h6>Need for Quotation?</h6>
        <input
          type="checkbox"
          id="webDesign"
          className="res_quotation"
          checked={formData.quotationOptions.webDesign}
          onChange={handleCheckboxChange}
        />
        <label className="ps-2" htmlFor="webDesign">
          Web Designing
        </label>
        <br />
        <input
          type="checkbox"
          id="webApplication"
          className="res_quotation"
          checked={formData.quotationOptions.webApplication}
          onChange={handleCheckboxChange}
        />
        <label className="ps-2" htmlFor="webApplication">
          Mobile Application
        </label>
        <br />
        <input
          type="checkbox"
          id="cloudSolution"
          className="res_quotation"
          checked={formData.quotationOptions.cloudSolution}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="cloudSolution" className="ps-2">
          Cloud Solution
        </label>
        <br />
        <input
          type="checkbox"
          id="otherQueries"
          className="res_quotation"
          checked={formData.quotationOptions.otherQueries}
          onChange={handleCheckboxChange}
        />
        <label className="ps-2" htmlFor="otherQueries">
          Other Queries
        </label>
        <br />
        {errors.quotationOptions && <p className="error">{errors.quotationOptions}</p>}
      </div>

      <div className="text-center">
        <button type="submit" className="border-1 px-5 fs-4 rounded-2">
          Submit
        </button>
      </div>
    </div>
  </form>
</div>
     </section>

    </div>
  );
}
