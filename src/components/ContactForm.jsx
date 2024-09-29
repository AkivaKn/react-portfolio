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
    <div className="w-full flex flex-col items-center">
      <p className="mb-4">Alternatively, send me a message</p>
      <div className="w-3/4 md:max-w-lg">
        <form onSubmit={submitEmail} className="flex flex-col">
          <div className="relative mb-1">
            <input
              type="text"
              name="from_name"
              className="peer w-full shadow border rounded px-2 py-2 placeholder:text-transparent text-gray-700"
              placeholder="Name"
              id="from_name"
              value={formInputs.from_name}
              onChange={handleFormInputsChange}
            />
            <label
              htmlFor="from_name"
              className="absolute left-0 ml-1 -translate-y-3 bg-white px-1 text-sm duration-100 ease-linear peer-placeholder-shown:translate-y-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-700 peer-focus:ml-1 peer-focus:-translate-y-3 peer-focus:px-1 peer-focus:text-sm"
            >
              Name
            </label>
          </div>
          {errors.from_name && (
            <ErrorAlert
              errors={errors}
              setErrors={setErrors}
              errorKey={"from_name"}
            />
          )}
          <div className="relative mb-1 mt-4">
            <input
              type="email"
              name="from_email"
              className="peer w-full shadow border rounded px-2 py-2 placeholder:text-transparent text-gray-700"
              placeholder="Email"
              id="from_email"
              value={formInputs.from_email}
              onChange={handleFormInputsChange}
            />
            <label
              htmlFor="from_email"
              className="absolute left-0 ml-1 -translate-y-3 bg-white px-1 text-sm duration-100 ease-linear peer-placeholder-shown:translate-y-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-700 peer-focus:ml-1 peer-focus:-translate-y-3 peer-focus:px-1 peer-focus:text-sm"
            >
              Email
            </label>
          </div>
          {errors.from_email && (
            <ErrorAlert
              errors={errors}
              setErrors={setErrors}
              errorKey={"from_email"}
            />
          )}
          <div className="relative mt-4">
            <textarea
              name="message"
              className="peer w-full shadow border rounded px-2 py-2 placeholder:text-transparent text-gray-700"
              placeholder="Message"
              id="message"
              value={formInputs.message}
              onChange={handleFormInputsChange}
            />
            <label
              htmlFor="message"
              className="absolute left-0 ml-1 -translate-y-3 bg-white px-1 text-sm duration-100 ease-linear peer-placeholder-shown:translate-y-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-700 peer-focus:ml-1 peer-focus:-translate-y-3 peer-focus:px-1 peer-focus:text-sm"
            >
              Message
            </label>
          </div>
          {errors.message && (
            <ErrorAlert
              errors={errors}
              setErrors={setErrors}
              errorKey={"message"}
            />
          )}
          <div className="flex justify-center mt-4 mb-1">
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
          </div>
          {errors.server && (
            <ErrorAlert
              errors={errors}
              setErrors={setErrors}
              errorKey={"server"}
            />
          )}
        </form>
      </div>
    </div>
  );
}
