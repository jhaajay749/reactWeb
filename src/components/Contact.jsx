import React, { useState } from "react";

function Contact() {
  const [data, setData] = useState({
    fullName: "",
    phone: "",
    email: "",
    msg: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();

    alert(
      `My Name is ${data.fullName}. My mobile number is ${data.phone}. My Email is ${data.email} Here is What I want to say ${data.msg}`
    );
  };

  return (
    <>
      <div className="my-5 text-center">
        <h1>Contact Us</h1>
      </div>

      <div>
        <div className="container contact_div">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">
              <form className="mb-5" onSubmit={formSubmit}>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="fullName"
                    value={data.fullName}
                    onChange={InputEvent}
                    placeholder="name"
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    name="email"
                    value={data.email}
                    onChange={InputEvent}
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="phone"
                    placeholder="phone"
                    name="phone"
                    value={data.phone}
                    onChange={InputEvent}
                  />
                </div>
                <div className="mb-3">
                  <label
                    for="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="msg"
                    value={data.msg}
                    onChange={InputEvent}
                  ></textarea>
                </div>

                <div className="col-12">
                  <button className="btn btn-outline-primary" type="submit">
                    Submit form
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
