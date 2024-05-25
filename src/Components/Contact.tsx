import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="mailto:farukmiftari@outlook.com" className="border-b my-4 ">
          {CONTACT.email}
        </a>
        <br />
        <a href="mailto:farukmiftari994@gmail.com" className="border-b my-4">
          {CONTACT.gmail}
        </a>
      </div>
    </div>
  );
};

export default Contact;
