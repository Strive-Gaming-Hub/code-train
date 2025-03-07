import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  // const paragraphVariants = {
  //     hidden: { y: -70, opacity: 0, filter: 'blur(10px)' },
  //     visible: { y: 0, opacity: 1, filter: 'blur(0px)', transition: { duration: 0.8, ease: 'easeOut' } },
  // };

  // const paragraphVariants2 = {
  //     hidden: { y: 70, opacity: 0, filter: 'blur(10px)' },
  //     visible: { y: 0, opacity: 1, filter: 'blur(0px)', transition: { duration: 0.8, ease: 'easeOut' } },
  // };

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  return (
    <div className="main-cont min-h-screen lg:flex md:block  justify-between">
      <div
        className="lg:w-[50%] md:w-full max-h-screen lg:border-r lg:border-white  text-white md:p-14 p-8 pb-10 md:pl-16 flex flex-col md:items-center md:content-center"
        style={{ height: "85vh" }}
      >
        <motion.div
          variants={tabVariants}
          animate="visible"
          initial="hidden"
          whileHover={{ scale: 1.02, boxShadow: "rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;" }}
          className="privacy p-3 scrollbar-hide"
          style={{
            border: "2px solid transparent",
            height: "80vh",
            overflowY: "scroll",
          }}
        >
          <div className="inner-glow" />
          <div className="card-blur" />
          <h1 className="text-4xl font-bold mb-6">PRIVACY POLICY</h1>
          <p className="text-lg text-gray-200" style={{ fontSize: "1.3rem" }}>
            CartMint.io is committed to protecting your privacy. This Privacy
            Policy outlines how we collect, use, and safeguard your personal
            information.
          </p>
          <div className="main-privacy">
            <div className="lists">
              <h2 style={{ fontFamily: "Open Sans", fontSize: "2rem" }}>
                1. Information We Collect
              </h2>
              <ul>
                <li>
                  <span>Personal Information:</span>Name, email, phone number,
                  billing details
                </li>
                <li>
                  <span>Technical Information:</span>IP address, browser type,
                  device information.
                </li>
                <li>
                  <span>Usage Data:</span>Pages visited, time spent on site,
                  interaction history.
                </li>
              </ul>
            </div>
            <div className="lists">
              <h2 style={{ fontFamily: "Open Sans", fontSize: "2rem" }}>
                2. How We Use Your Information
              </h2>
              <ul>
                <li>To provide and improve our services.</li>
                <li>To process payments and transactions.</li>
                <li>
                  To send updates, promotions, and service-related
                  notifications.
                </li>
                <li>To comply with legal obligations.</li>
              </ul>
            </div>
            <div className="lists">
              <h2 style={{ fontFamily: "Open Sans", fontSize: "2rem" }}>
                3. Sharing of Information
              </h2>
              <p>
                We do not sell or rent personal data. We may share information
                with:
              </p>
              <ul>
                <li>
                  Third-party service providers (e.g., payment processors,
                  hosting providers).
                </li>
                <li>Law enforcement if required by law.</li>
                <li>Business partners, only with your consent.</li>
              </ul>
            </div>
            <div className="lists">
              <h2 style={{ fontFamily: "Open Sans", fontSize: "2rem" }}>
                4. Cookies and Tracking Technologies
              </h2>
              <p>
                We use cookies to enhance user experience, analyze traffic, and
                personalize content. Users can manage cookie preferences through
                their browser settings.
              </p>
            </div>
            <div className="lists">
              <h2 style={{ fontFamily: "Open Sans", fontSize: "2rem" }}>
                5. Data Security
              </h2>
              <p>
                We do not sell or rent personal data. We may share information
                with:
              </p>
              <p>We implement security measures to protect user data. However, no
              online platform is 100% secure, and users should take precautions
              when sharing Privacy Policy sensitive information.</p>
            </div>
            <div className="lists">
              <h2 style={{ fontFamily: "Open Sans", fontSize: "2rem" }}>
                6. Your Rights
              </h2>
              <p>Depending on your location, you may have the right to:</p>
              <ul>
                <li>Access, correct, or delete your data.</li>
                <li>Object to data processing.</li>
                <li>Request data portability.</li>
              </ul>
              <p>To exercise these rights, contact us at</p>
              <a href="support@cartmint.io">support@cartmint.io</a>
            </div>
            <div className="lists">
              <h2 style={{ fontFamily: "Open Sans", fontSize: "2rem" }}>
                7. Retention of Data
              </h2>
              <p>
                We retain personal information as long as necessary to fulfill
                service obligations and comply with legal requirements.
              </p>
            </div>
            <div className="lists">
              <h2 style={{ fontFamily: "Open Sans", fontSize: "2rem" }}>
                8. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy periodically. Continued use of
                our services indicates acceptance of the updated policy. For any
                privacy-related inquiries, contact us at
              </p>
              <a href="support@cartmint.io">support@cartmint.io</a>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="terms lg:w-[50%] md:w-full rounded-r-lg text-white md:p-14 p-8 pb-10 md:pl-16 flex flex-col md:items-center md:content-center" style={{height:"85vh"}}>
        <motion.div
          variants={tabVariants}
          animate="visible"
          initial="hidden"
          whileHover={{ scale: 1.02, boxShadow: "rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;" }}

          className="terms p-3 scrollbar-hide"
          style={{
            border: "2px solid transparent",
            height: "80vh",
            overflowY: "scroll",
          }}
        >
          <h1 className="text-4xl font-bold mb-6">TERMS AND CONDITIONS</h1>
          <p className="text-lg text-gray-200" style={{ fontSize: "1.3rem" }}>
            Welcome to CartMint.io . These Terms and Conditions govern your use
            of our website and services. By accessing or using CartMint.io , you
            agree to comply with these Terms.
          </p>
          <div className="main-terms">
            <div className="lists">
              <h2 style={{ fontFamily: "Open Sans", fontSize: "2rem" }}>
                1. Services Offered
              </h2>
              <p>
                CartMint.io provides website development, design, hosting, and
                related digital solutions. Specific services may be subject to
                separate agreements.
              </p>
            </div>
            <div className="lists">
              <h2 style={{ fontFamily: "Open Sans", fontSize: "2rem" }}>
                2. User Responsibilities
              </h2>
              <ul>
                <li>
                  Users must provide accurate and complete information when
                  registering or purchasing services.
                </li>
                <li>
                  Users shall not engage in illegal, harmful, or fraudulent
                  activities using our platform.
                </li>
                <li>
                  Users are responsible for maintaining the confidentiality of
                  their account credentials.
                </li>
              </ul>
            </div>
            <div className="lists">
              <h2 style={{ fontFamily: "Open Sans", fontSize: "2rem" }}>
                3. Payments and Refunds
              </h2>

              <ul>
                <li>
                  Payment for services must be made upfront unless otherwise
                  agreed.
                </li>
                <li>
                  Refunds are issued only under our refund policy, which may
                  vary based on service type.
                </li>
                <li>
                  We use third-party payment processors, and users agree to
                  their terms.
                </li>
              </ul>
            </div>
            <div className="lists">
              <h2 style={{ fontFamily: "Open Sans", fontSize: "2rem" }}>
                4. Intellectual Property
              </h2>
              <ul>
                <li>
                  All content on CartMint.io, including designs, software, and
                  branding, is our property or licensed appropriately.
                </li>
                <li>
                  Users retain ownership of content they create but grant us a
                  license to display, host, and use such content as necessary to
                  provide services.
                </li>
              </ul>
            </div>
            <div className="lists">
              <h2 style={{ fontFamily: "Open Sans", fontSize: "2rem" }}>
                5. Limitation of Liability
              </h2>
              <ul>
                <li>
                  We are not liable for any indirect, incidental, or
                  consequential damages arising from the use of our services.{" "}
                </li>
                <li>
                  We do not guarantee uninterrupted or error-free services.
                </li>
              </ul>
            </div>
            <div className="lists">
              <h2 style={{ fontFamily: "Open Sans", fontSize: "2rem" }}>
                6. Termination
              </h2>
              <ul>
                <li>
                  We may suspend or terminate accounts that violate these Terms.
                </li>
                <li>
                  Users may terminate their accounts at any time, but no refunds
                  will be issued for prepaid services.
                </li>
              </ul>
            </div>
            <div className="lists">
              <h2 style={{ fontFamily: "Open Sans", fontSize: "2rem" }}>
                7. Governing Law
              </h2>
              <p>These Terms shall be governed by the law.</p>
            </div>
            <div className="lists">
              <h2 style={{ fontFamily: "Open Sans", fontSize: "2rem" }}>
                8. Changes to Terms
              </h2>
              <p>
                We reserve the right to update these Terms at any time.
                Continued use of the platform constitutes acceptance of the
                updated Terms. For any queries, contact us at
                support@cartmint.io
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
