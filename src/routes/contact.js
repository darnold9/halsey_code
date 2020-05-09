import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleClick = () => {
    console.log(name, message);
    alert(`The form was submitted by ${name} with the message: ${message}`);
  };

  return (
    <>
      <title>Contact Us</title>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleClick();
        }}
      >
        <p>Name:</p>
        <div>
          <input
            id="name"
            onChange={(e) => setName(e.target.value)}
            type="text"
            value={name}
          />
        </div>
        <p>Message:</p>
        <div>
          <input
            id="message"
            onChange={(e) => setMessage(e.target.value)}
            type="textarea"
            value={message}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Contact;
