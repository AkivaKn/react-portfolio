import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div className="w-full md:px-10 p-5 max-md:-mt-24" id="contact">
      <div className="w-full h-24 md:hidden"></div>
      <p>Let&apos;s connect!</p>
      <div className="flex">
        <a href="https://github.com/AkivaKn" target="blank">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/akivakaufman/" target="blank">
          <FaLinkedin />
        </a>
        <a href="mailto: akivakaufman@gmail.com" target="blank">
          <MdEmail />
        </a>
      </div>
      <p>Alternatively, send me a message</p>
      <ContactForm />
    </div>
  );
}
