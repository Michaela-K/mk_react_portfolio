export default function Contact() {
  return (
    <section id="Contact" className="contact__section">
      <div>
        <p className="sub__title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, odit.
        </p>
      </div>
      <form className="contact__form__container">
        <div className="container">
          <label htmlFor="name" className="contact__label">
            <input
              type="text"
              className="contact__input text-md"
              name="name"
              id="name"
              placeholder="Full Name"
              required
            />
          </label>
          <label htmlFor="email" className="contact__label">
            <input
              type="email"
              className="contact__input text-md"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
          </label>
        </div>
        {/* <label htmlFor="choode-topic" className="contact__label">
          <span className="text-md">Choose a topic</span>
          <select id="choose-topic" className="contact__input text-md">
            <option>Select One...</option>
            <option>Item 1</option>
            <option>Item 2</option>
            <option>Item 3</option>
          </select>
        </label> */}
        <label htmlFor="message" className="contact__label">
          <textarea
            className="contact__input text-md"
            id="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>
        <div>
          <button className="btn btn-primary contact__form__btn">Submit</button>
        </div>
      </form>
    </section>
  );
}