"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content=[
    {
      "title": "Effortless Form Filling",
      "description": "Say goodbye to the tedious task of manually filling out forms. With our intuitive platform, completing forms becomes a breeze."
    },
    {
      "title": "Save Time",
      "description": "We value your time. Our streamlined process helps you complete forms quickly and efficiently, allowing you to focus on what matters most to you."
    },
    {
      "title": "User-Friendly Interface",
      "description": "Our user-friendly interface is designed with simplicity in mind. Whether you're tech-savvy or not, navigating through our platform is a seamless experience."
    },
    {
      "title": "Accessibility",
      "description": "We believe everyone should have access to hassle-free form filling. Our platform is accessible to all users, ensuring a smooth experience for everyone."
    },
    {
      "title": "Secure and Confidential",
      "description": "Your privacy and security are our top priorities. Rest assured, your information is safe with us. We employ the latest security measures to protect your data at all times."
    },
    {
      "title": "Customization Options",
      "description": "We understand that every form is unique. That's why we offer customization options to tailor the form filling process according to your specific needs."
    },
    {
      "title": "Exceptional Support",
      "description": "Have questions or need assistance? Our dedicated support team is here to help you every step of the way. Whether it's troubleshooting technical issues or providing guidance, we're just a message away."
    },
    {
      "title": "Constant Innovation",
      "description": "We're committed to staying ahead of the curve. Through continuous innovation and updates, we ensure that our platform remains efficient, reliable, and up-to-date with the latest industry standards."
    }
  ]  

function WhyChooseUs() {
  return (
    <div id="whyChooseUs">
        <h2 className="bg-slate-900 rounded-3xl p-10 text-xl m-4">At eZ Form, we understand the frustration and time-consuming nature of filling out forms. That's why we've dedicated ourselves to simplifying this process for you. Here are just a few reasons why you should choose us:
        </h2>
    <StickyScroll content={content}/>
    </div>
  )
}

export default WhyChooseUs;