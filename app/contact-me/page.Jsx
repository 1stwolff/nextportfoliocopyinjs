import ContactForm from "../../components/ContactForm";
import React from "react";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(Amoonphil.jpg)" }}
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
    >
      <div
      style={{ backgroundImage: "url(Amoonphil.jpg)" }}
        className="h-[60%] w-[60%] relative bg-cover bg-center rounded-xl border border-b flex items-center justify-center"
      >
        <div className="w-[90%] md:w-[40%]">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Page;
