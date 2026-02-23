import React from "react";
import "./Footer.css";

function FooterColumn({ title, items }) {
  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <h5 className="footer-title">{title}</h5>
      <ul className="footer-list">
        {items.map((item, index) => (
          <li key={index}>➤ {item}</li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer-section text-white">
      <div className="container">
        <div className="row">

          <FooterColumn
            title="POPULAR POSITIONS"
            items={[
              "(MR) Medical Representative",
              "(ASM) Area Sales Manager Pharma",
              "Regional Manager (2nd Line)",
              "Area Manager (Individual Role)",
              "Key Account Manager",
              "Zonal Sales Manager (3rd Line)",
              "Female Medical Representative",
              "Hospital Business Manager",
              "Product Manager",
              "Product Executive"
            ]}
          />

          <FooterColumn
            title="POPULAR COMPANIES"
            items={[
              "Cadila Pharma",
              "Alembic Pharma",
              "Dr Reddy's",
              "Centaur Pharma",
              "IPCA Labs",
              "Glenmark Pharma",
              "Alkem Labs",
              "Zydus Healthcare",
              "Sun Pharma",
              "Hetero Healthcare"
            ]}
          />

          <FooterColumn
            title="WHATSAPP LINKS"
            items={[
              "Managers WhatsApp Channel",
              "Medical Rep WhatsApp Channel"
            ]}
          />

          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="footer-title">QUICK LINKS</h5>
            <ul className="footer-list">
              <li>➤ Post New Job</li>
              <li>➤ About Us</li>
              <li>➤ Contact Us</li>
              <li>➤ Help</li>
              <li>➤ FAQs</li>
              <li>➤ Register & Subscribe</li>
            </ul>

            <h5 className="footer-title mt-4">ADDRESS</h5>
            <p className="mb-1">🏠 Indian Pharma Jobs</p>
            <p className="mb-1">📞 +91 88474 62969</p>
            <p className="mb-0">✉ contact@indianpharmajobs.com</p>
          </div>

        </div>

        <hr className="footer-line" />

        <div className="footer-bottom d-flex flex-wrap align-items-center justify-content-between">

        {/* LEFT SIDE */}
        <div className="social-icons d-flex gap-3 mt-2">

            <a href="#" className="social-circle facebook">
                <i className="bi bi-facebook"></i>
            </a>

            <a href="#" className="social-circle twitter">
                <i className="bi bi-twitter-x"></i>
            </a>

            <a href="#" className="social-circle linkedin">
                <i className="bi bi-linkedin"></i>
            </a>

            <a href="#" className="social-circle youtube">
                <i className="bi bi-youtube"></i>
            </a>

            <a href="#" className="social-circle instagram">
                <i className="bi bi-instagram"></i>
            </a>

            <a href="#" className="social-circle whatsapp">
                <i className="bi bi-whatsapp"></i>
            </a>

        </div>

        {/* RIGHT SIDE */}
        <div className="text-lg-end text-start mt-4 mt-lg-0">
            <p className="small mb-1">
            Privacy Policy | Terms and Conditions | Disclaimer | Sitemap
            </p>
            <p className="small mb-0">
            Copyright © 2026 Indian Pharma Jobs. All Rights Reserved.
            </p>
        </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;