import React, { useState, useEffect } from 'react'
import ServiceTextEffect from '../components/ServiceTextEffect'
import ServiceEffect from '../components/ServiceEffect'
import { motion } from "framer-motion";
import SeviceCard from '../components/SeviceCard';
import { toast, ToastContainer } from "react-toastify";


const Web = [
   { name: "Javascript", icon: "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png" },
   // { name: "Adobe", icon: "https://cdn-icons-png.flaticon.com/512/888/888835.png" },
   { name: "React", icon: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" },
   { name: "Next", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.png" },
   { name: "Shopify", icon: "https://cdn3.iconfinder.com/data/icons/social-media-2068/64/_shopping-512.png" },
   { name: "Wordpress", icon: "https://static-00.iconduck.com/assets.00/wordpress-icon-2048x2048-nw66awj8.png" },
   { name: "Vue", icon: "https://static-00.iconduck.com/assets.00/vue-icon-2048x1766-ntogpmti.png" },
   { name: "Angular", icon: "https://img.icons8.com/fluent/512/angularjs.png" },
]

const design = [
   { name: "Figma", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png" },
   // { name: "Adobe", icon: "https://cdn-icons-png.flaticon.com/512/888/888835.png" },
   { name: "Material-UI", icon: "https://static-00.iconduck.com/assets.00/material-ui-icon-2048x1626-on580ia9.png" },
   { name: "Bootstrap", icon: "https://img.icons8.com/color/512/bootstrap--v2.png" },
   { name: "Tailwind", icon: "https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png" },
   { name: "Photoshop", icon: "https://static-00.iconduck.com/assets.00/photoshop-icon-512x500-c27wq2nc.png" },
   { name: "AI", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Illustrator_CC_icon.png/492px-Illustrator_CC_icon.png" },
]

const apps = [
   { name: "Java", icon: "https://static-00.iconduck.com/assets.00/java-icon-256x256-k4ufhihr.png" },
   // { name: "Adobe", icon: "https://cdn-icons-png.flaticon.com/512/888/888835.png" },
   { name: "Kotlin", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/1200px-Kotlin_Icon.png" },
   { name: "React Native", icon: "https://static-00.iconduck.com/assets.00/react-icon-1024x1024-wwxwlds8.png" },
   { name: "Flutter", icon: "https://img.icons8.com/color/512/flutter.png" },
   { name: "Swift", icon: "https://cdn-icons-png.flaticon.com/512/732/732250.png" },
]


const ServicePage = () => {


   const [tab, setTab] = useState("Design");
   const [tools, setTools] = useState(design);
   const [email, setEmail] = useState("");

   const handleSendEmail = () => {
      if (!email) {
         toast.error("Please enter your email.");
         return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
         toast.error("Please enter a valid email address.");
         return;
      }


      const subject = "Connect Request";
      const body = `Hello,\n\nPlease connect with me at: ${email}`;
      const mailtoLink = `mailto:admin@codetrain.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      window.location.href = mailtoLink;
   };


   const handleTabClick = (selectedTab) => {
      setTab(selectedTab);
      if (selectedTab === 'Design') setTools(design);
      if (selectedTab === 'Web Development') setTools(Web);
      if (selectedTab === 'Mobile Development') setTools(apps);
   };

   return (
      <div className="w-full h-full">
         <ToastContainer autoClose={2000} position='top-left' />
         <div>
            {/*<ServiceTextEffect />*/}
         </div>
         {/* <ServiceEffect /> */}

         <div className='space-y-40 md:px-20 px-6'>

            {/*  Web development */}

            <SeviceCard
               title='Web'
               desc=' Looking for a reliable web development partner? Look no further than our
                     team of experts at Atyabiz. Our web development service offerings are
                     among the most comprehensive in the industry. We can provide everything
                     from custom web applications to eCommerce solutions. Our team of highly
                     skilled and experienced developers can create a custom solution that is
                     tailored to your specific needs.'
               subHeading=' Web Solutions that Meet All Your Custom Needs'
               services={[
                  "UI/UX Design",
                  "Website Development",
                  "Custom Web Development",
                  "Wordpress",
                  "Shopify",
                  "QA and Testing",
                  "CMS",
                  "Maintenance and Support",
               ]}
               img='desksetup.jpg'
            />

            {/* app development */}

            <SeviceCard
               title='App'
               subHeading='App Solutions that Meet All Your Custom Needs'
               desc='Our mobile development services include native app development, cross-platform app development, and web-based app development. We have a team of experienced developers who are well-versed in the latest mobile development technologies and trends. We understand the unique needs of our clients and offer custom-tailored solutions that meet their specific requirements.'
               services={['UI/UX Design', 'Mobile App Desing', 'Android', 'iOS', 'Cross-platform App Development', 'App Support & Maintenance', 'Mobile App QA & Testing']}
               img='app2.jpg'
            />

            {/*  shopify development */}

            <SeviceCard
               title='Shopify'
               subHeading='E-Commerce Solutions that Elevate Your Online Business'
               desc='Our Shopify development services include custom theme development, app integration, store setup, and performance optimization. We have a team of skilled developers who specialize in creating visually appealing and high-performing e-commerce stores. By leveraging Shopify’s robust platform, we tailor solutions that align with your business goals and ensure a seamless shopping experience for your customers.'
               services={[
                  "Custom Shopify Theme",
                  "Shopify Store Setup & Configuration",
                  "App Customization",
                  "App Integration",
                  "Shopify SEO",
                  "Shopify Performance",
                  "Shopify Maintenance",
                  "Shopify Marketing",
               ]}
               img='shopify2.jpg'
            />

            {/*  wordpress development */}

            <SeviceCard
               title='WordPress'
               subHeading='Website Solutions that Bring Your Ideas to Life '
               desc='Our WordPress development services include custom website design, theme customization, plugin development, and website optimization. Our experienced team of developers specializes in crafting dynamic, user-friendly, and responsive WordPress websites tailored to meet your unique business needs. From corporate sites to e-commerce solutions, we deliver robust and scalable WordPress projects that stand out.'
               services={[
                  "Custom WordPress Theme Design",
                  "WordPress Plugin Development",
                  "Responsive Website",
                  "WordPress SEO",
                  "WordPress Maintenance ",
               ]}
               img='wordpress.jpg'
            />

            {/*  design */}

            <SeviceCard
               title='Design'
               subHeading='Visual Designs that Convert Your Product Traffic into Customers'
               desc='At our company, we offer all of these types of design software app services. We have a team of skilled and experienced designers who can offer high-quality design services for any type of project. Whether you need a new logo for your business or a complete rebranding campaign, we can help. We also offer web design, user interface design, and app design services.'
               services={[
                  "UI/UX Design",
                  "Web App Design",
                  "Mobile App Design",
                  "Website Design",
                  "Landing Page Design",
               ]}
               img='design.jpg'
            />

         </div>

         <div className=" font-sans py-28 space-y-14">
            <div className=''>
               <h1 className='text-center md:text-5xl text-3xl font-bold'>Technology Stack</h1>
               <p className='text-center px-4 sm:px-0 py-2 font-semibold text-gray-400'>Explore our comprehensive technology stack: harnessing  <br /> cutting-edge tools and frameworks to drive innovative software solutions.
               </p>
            </div>
            <div className="container mx-auto px-6">
               {/* Tabs Section */}
               <div className="flex justify-center mb-6 space-x-3">
                  {[
                     "Design",
                     "Web Development",
                     "Mobile Development",
                  ].map((data, index) => (
                     <button
                        key={index}
                        className={` sm:rounded-3xl rounded-xl px-3 py-1 font-medium sm:text-lg text-sm ${data === tab
                           ? "!bg-[#4B2FF6] !text-white"
                           : "styled-button"
                           }`}
                        onClick={() => handleTabClick(data)}
                     >
                        {data}
                     </button>
                  ))}
               </div>

               {/* Tools Section */}
               <div className="flex flex-col md:flex-row items-center justify-center py-10  rounded-2xl">
                  <div className="flex flex-wrap justify-center md:justify-start  gap-8">
                     {tools.map((tool, index) => (
                        <div
                           key={index}
                           className="flex  flex-col items-center gap-2 text-center"
                        >
                           <span className="">
                              {tool.name}
                           </span>
                           <div className=' bg-[#2B2B2B]  flex items-center justify-center w-16 h-16 p-2 rounded-lg'>
                              <img
                                 src={tool.icon}
                                 alt={tool.name}
                                 className="rounded"
                              />

                           </div>
                        </div>
                     ))}
                     <div

                        className="flex flex-col items-center gap-2 text-center"
                     >
                        <span className="">
                           more
                        </span>

                        <div className=' bg-[#2B2B2B]  flex items-center justify-center w-16 h-16 p-2 rounded-lg'>
                           <h1 className='text-4xl'>+</h1>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </div>

         <section className='md:py-20'>
            <h1 className='text-center sm:text-4xl text-3xl font-ubuntu font-medium'>Let's Connect and Collaborate</h1>
            <p className='text-center text-gray-400 py-2 mt-2 font-ubuntu'>We're here to help you innovate and succeed.</p>
            <div className="flex justify-center my-5">
               {/* <div class="button overflow-hidden">
                                <div className="z-20 bg-[#212121] !overflow-hidden">
                                    <input placeholder="Enter Your email" className="bg-transparent text-white outline-none pl-5" />
                                    <button className=" bg-gradient-to-b border !border-gray-400 rounded-3xl px-5 py-1.5 to-gray-900">Signup</button>

                                </div>
                                <div class="dots_border -z-20"></div>
                            </div> */}
               <div className="hero-button">
                  <div className="dots_border"></div>
                  <input placeholder="Enter Your email" className="bg-transparent text_button text-white outline-none pl-5 sm:min-w-[250px] w-[170px]" value={email}
                     onChange={(e) => setEmail(e.target.value)} />
                  <button className=" bg-gradient-to-b border !border-gray-400 text_button rounded-3xl px-5 py-1.5 to-gray-900" onClick={handleSendEmail}
                  >Connect</button>
               </div>
            </div>
         </section>
      </div>
   )
}

export default ServicePage


// [
//    { name: "Figma", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png" },
//    // { name: "Adobe", icon: "https://cdn-icons-png.flaticon.com/512/888/888835.png" },
//    { name: "Material-UI", icon: "https://static-00.iconduck.com/assets.00/material-ui-icon-2048x1626-on580ia9.png" },
//    { name: "Bootstrap", icon: "https://img.icons8.com/color/512/bootstrap--v2.png" },
//    { name: "Tailwind", icon: "https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png" },
//    { name: "Photoshop", icon: "https://static-00.iconduck.com/assets.00/photoshop-icon-512x500-c27wq2nc.png" },
//    { name: "AI", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Illustrator_CC_icon.png/492px-Illustrator_CC_icon.png" },
// ]


// [
//    { name: "Javascript", icon: "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png" },
//    // { name: "Adobe", icon: "https://cdn-icons-png.flaticon.com/512/888/888835.png" },
//    { name: "React", icon: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" },
//    { name: "Next", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.png" },
//    { name: "Shopify", icon: "https://cdn3.iconfinder.com/data/icons/social-media-2068/64/_shopping-512.png" },
//    { name: "Wordpress", icon: "https://static-00.iconduck.com/assets.00/wordpress-icon-2048x2048-nw66awj8.png" },
//    { name: "Vue", icon: "https://static-00.iconduck.com/assets.00/vue-icon-2048x1766-ntogpmti.png" },
//    { name: "Angular", icon: "https://img.icons8.com/fluent/512/angularjs.png" },
// ]


// [
//    { name: "Java", icon: "https://static-00.iconduck.com/assets.00/java-icon-256x256-k4ufhihr.png" },
//    // { name: "Adobe", icon: "https://cdn-icons-png.flaticon.com/512/888/888835.png" },
//    { name: "Kotlin", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/1200px-Kotlin_Icon.png" },
//    { name: "React Native", icon: "https://static-00.iconduck.com/assets.00/react-icon-1024x1024-wwxwlds8.png" },
//    { name: "Flutter", icon: "https://img.icons8.com/color/512/flutter.png" },
//    { name: "Swift", icon: "https://cdn-icons-png.flaticon.com/512/732/732250.png" },
// ]