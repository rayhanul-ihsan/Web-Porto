import ContactForm from "@/components/ContactForm";
import React from "react";

const page = () => {
  return (
    <div
      style={{ backgroundImage: "url(bg-3.jpg" }}
      className="w-screen h-screen bg-cover bg-center flex item-center justify-center"
    >
      <div
        className="w-[50%] h-[50%] flex justify-center items-center my-56 relative bg- bg-center rounded-xl border border-white"
      >
        <div className="absolute mx-10 md:left-20 bottom-16 w-[70%] md:w-[35%]">
          <ContactForm/>
        </div>
      </div>
    </div>
  );
};

export default page;