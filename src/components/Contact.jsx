import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div
      className="w-full md:px-10 p-5 -mt-20 md:mt-0 landscape-mobile:-mt-20 flex flex-col items-center"
      id="contact"
    >
      <div className="w-full h-20 md:hidden landscape-mobile:block"></div>
      <h2 className="md:text-3xl text-lg font-extrabold text-gray-800 mb-3">
        Let&apos;s connect!
      </h2>
      <div className="flex text-4xl md:text-2xl gap-4 mb-3">
        <a
          href="https://github.com/AkivaKn"
          target="blank"
          className="md:hover:text-gray-600"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/akivakaufman/"
          target="blank"
          className="md:hover:text-gray-600"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto: akivakaufman@gmail.com"
          target="blank"
          className="md:hover:text-gray-600"
        >
          <MdEmail />
        </a>
      </div>
      <ContactForm />
    </div>
  );
}
