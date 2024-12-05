// import React from "react";
// import "./mobileapp.css";

// // Import image
// import heroBackground from "../../assets/mobile-app-development.jpg";
// import expertiseImage from "../../assets/img-2.jpg";
// import servicesImage from "../../assets/img-3.png";

// const MobileAppDevelopmentPage = () => {
//   return (
//     <div className="mobile-app-development-container">
//       {/* Hero Section */}
//       <section
//         className="hero-section"
//         style={{ backgroundImage: `url(${heroBackground})` }}
//       >
//         <div className="hero-overlay">
//           <h1>Mobile App Development</h1>
//           <p>
//             Convert your ideas into a live application with Thinkweb Hub app
//             development services
//           </p>
//         </div>
//       </section>

//       {/* Expertise Section */}
//       <section className="expertise-section">
//         <div className="expertise-content">
//           <h2>Our Expertise</h2>
//           <p>
//             In today's digital era, businesses are embracing technologies and
//             innovations that make their organizations more intelligent,
//             data-driven, and interconnected. We empower our clients with new
//             levels of innovation and business value across the entire digital
//             value chain.
//           </p>
//         </div>
//         <div className="expertise-image-container">
//           <div className="expertise-image-wrapper">
//             <img
//               src={expertiseImage}
//               alt="Our Expertise"
//               className="expertise-image"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="services-section">
//         <div className="services-content">
//           <h2>Turning Dreams into Reality</h2>
//           <p>
//             Our service goes beyond development. We offer comprehensive support
//             including:
//           </p>
//           <ul>
//             <li>Ongoing app maintenance and support</li>
//             <li>Ensuring smooth and efficient performance</li>
//             <li>Marketing services to boost app visibility</li>
//           </ul>
//         </div>
//         <div className="services-image-container">
//           <img
//             src={servicesImage}
//             alt="Our Services"
//             className="services-image"
//           />
//         </div>
//       </section>

//       {/* Consultation Section */}
//       <section className="consultation-section">
//         <div className="consultation-content">
//           <div className="consultation-text">
//             <h3>Get Free Consultation Now!</h3>
//             <p>Let's create a powerful website that grows with your business</p>
//           </div>
//           <div className="consultation-action">
//             <button className="consultation-button">
//               Consult Now <span>&rarr;</span>
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default MobileAppDevelopmentPage;

import React from "react";
import "./mobileapp.css";

// Import images
import heroBackground from "../../assets/mobile-app-development.jpg";
import expertiseImage from "../../assets/img-2.jpg";
import servicesImage from "../../assets/img-3.png";

const MobileAppDevelopmentPage = () => {
  return (
    <div className="mobile-app-page">
      {/* Hero Section */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="hero-content">
          <h1>Mobile App Development</h1>
          <p>Transform Your Vision into a Powerful Digital Solution</p>
          <div className="hero-cta">
            <button className="primary-btn">Explore Services</button>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section expertise">
        <div className="section-grid">
          <div className="section-text">
            <h2>Our Cutting-Edge Expertise</h2>
            <p>
              In the dynamic digital landscape, we empower businesses with
              innovative technologies that drive intelligence, data-driven
              insights, and seamless interconnectivity. Our approach transforms
              your digital strategy, delivering unparalleled business value
              across every touchpoint.
            </p>
            <ul className="expertise-highlights">
              <li>🚀 Innovative Solutions</li>
              <li>📊 Data-Driven Strategies</li>
              <li>🔗 Seamless Integration</li>
            </ul>
          </div>
          <div className="section-image">
            <div className="image-wrapper">
              <img
                src={expertiseImage}
                alt="Innovative Mobile Solutions"
                className="expertise-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services">
        <div className="section-grid reverse">
          <div className="section-text">
            <h2>Transforming Dreams into Digital Reality</h2>
            <p>
              We provide comprehensive mobile app development services that go
              beyond mere coding. Our holistic approach ensures your app not
              only functions flawlessly but also stands out in the competitive
              digital marketplace.
            </p>
            <div className="services-list">
              <div className="service-item">
                <span className="icon">🛠️</span>
                <h4>Custom Development</h4>
                <p>Tailored solutions that match your unique business needs</p>
              </div>
              <div className="service-item">
                <span className="icon">🔄</span>
                <h4>Ongoing Support</h4>
                <p>Continuous maintenance and performance optimization</p>
              </div>
              <div className="service-item">
                <span className="icon">📣</span>
                <h4>Marketing Boost</h4>
                <p>Strategic services to enhance app visibility and growth</p>
              </div>
            </div>
          </div>
          <div className="section-image">
            <img
              src={servicesImage}
              alt="Comprehensive App Services"
              className="services-image"
            />
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="section consultation">
        <div className="consultation-container">
          <div className="consultation-content">
            <h3>Ready to Bring Your App Idea to Life?</h3>
            <p>
              Let's discuss your project and discover how we can turn your
              innovative concept into a successful mobile application.
            </p>
            <button className="consultation-btn">
              Free Consultation <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileAppDevelopmentPage;
