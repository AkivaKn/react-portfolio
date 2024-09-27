import { useState } from "react";
import { sendEmail, validateContactForm } from "../utils";
import ErrorAlert from "./ErrorAlert";

export default function ContactForm() {
  const [formInputs, setFormInputs] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleFormInputsChange = (e) => {
    const { name, value } = e.target;

    setFormInputs((prevInputs) => {
      return {
        ...prevInputs,
        [name]: value,
      };
    });
  };

  const submitEmail = async (e) => {
    e.preventDefault();
    try {
      const formErrors = validateContactForm(formInputs);
      if (formErrors.name || formErrors.email || formErrors.message) {
        setErrors(formErrors);
      } else {
        await sendEmail(e.target);
        alert("Your message has been sent!");
        setFormInputs({
          from_name: "",
          from_email: "",
          message: "",
        });
      }
    } catch (error) {
      setErrors({ serverError: "Please try again." });
    }
  };

  return (
    <form onSubmit={submitEmail} className="flex flex-col">
      <label
        htmlFor="from_name"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Name
      </label>
      <input
        type="text"
        name="from_name"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="from_name"
        value={formInputs.from_name}
        onChange={handleFormInputsChange}
      />
      {errors.from_name && (
        <ErrorAlert
          errors={errors}
          setErrors={setErrors}
          errorKey={"from_name"}
        />
      )}
      <label
        htmlFor="from_email"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Email
      </label>
      <input
        type="email"
        name="from_email"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="from_email"
        value={formInputs.from_email}
        onChange={handleFormInputsChange}
      />
      {errors.from_email && (
        <ErrorAlert
          errors={errors}
          setErrors={setErrors}
          errorKey={"from_email"}
        />
      )}
      <label
        htmlFor="message"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Message
      </label>
      <textarea
        name="message"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="message"
        value={formInputs.message}
        onChange={handleFormInputsChange}
      />
      {errors.message && (
        <ErrorAlert
          errors={errors}
          setErrors={setErrors}
          errorKey={"message"}
        />
      )}

      <button
        type="submit"
        className="relative inline-block px-4 py-2 font-medium group self-start md:mb-4 mb-2"
      >
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-gray-900 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full bg-white border-2 border-gray-900 group-hover:bg-black"></span>
        <span className="relative text-gray-900 group-hover:text-white">
          Send
        </span>
      </button>
      {errors.server && (
        <ErrorAlert errors={errors} setErrors={setErrors} errorKey={"server"} />
      )}
    </form>
  );
}
