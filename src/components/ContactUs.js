
import Footer from "./Footer";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gfgqy32",
        "template_5cdfqg5",
        form.current,
        "N_K_q_xwoEtKajC00"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className="md:relative w-full mb-[30px] md:mb-0  md:mt-[-100px] shadow-md shadow-gray-400 bg-[#FFFFFF] top-[170px] z-10  max-w-[400px] rounded-[3px] md:rounded-[16px] font-bodyFont flex flex-col gap-4 py-4 px-8 mx-auto border-[1px] border-gray-200">
        <h1 className="text-[#30A8FF] font-bold font-600 text-3xl mb-4 text-center">
          Contact Us
        </h1>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-2">
          <input
            type="text"
            name="from_name"
            placeholder="Enter your Name"
            className="rounded-[8px] py-3 px-2 border-[1px] border-gray-200"
          />
          <input
            type="email"
            name="to_email"
            placeholder="Enter your E-Mail Address"
            className="rounded-[8px] py-3 px-2 border-[1px] border-gray-200"
          />
          <textarea
            rows={4}
            name="message"
            cols={8}
            type="text"
            placeholder="Enter your message"
            className="rounded-[8px] py-3 px-2 border-[1px] border-gray-200"
          />
          <div className="text-center">
            <button
              type="submit"
              className="text-white px-4 mt-8 whitespace-nowrap hover:scale-110 transform transition-all duration-300 ease-in p-2 bg-[#30A8FF] rounded-md shadow-md shadow-blue-300"
            >
              Get in touch
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;


