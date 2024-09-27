import emailjs from "@emailjs/browser";

export async function sendEmail(formData) {
    await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );
}

export function validateContactForm({ from_name,from_email,message }) {
    let errors = {};
    const emailRegex = /^[\w\.-]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!from_name) {
        errors.from_name = "Name is required."
    }
    if (!from_email) {
      errors.from_email = "Email is required.";
    } else if (!emailRegex.test(from_email) || from_email.length > 320) {
      errors.from_email = "Email is invalid.";
    }
    if (!message) {
      errors.message = "Message is required.";
    }
    return errors;
  }