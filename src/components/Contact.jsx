import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [isSending, setIsSending] = useState(false) // Optional: Good for showing a loading state

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })
const submit = async (e) => {
    e.preventDefault(); 
    setIsSending(true);

    try {
      // Swapped to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          // PASTE YOUR KEY HERE:
          access_key: "aaf1f454-f5e3-4f63-8281-70db7e709872", 
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          from_name: "Portfolio Contact Form" // Optional: makes the email sender look nice
        })
      });

      if (response.ok) {
        setSent(true);
        setForm({ name: '', email: '', subject: '', message: '' });
        
        setTimeout(() => setSent(false), 5000);
      } else {
        // If the server responds but with an error status
        console.error("Server responded with an error");
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please check your connection.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        
        {/* Left Column - Contact Info */}
        <div className="contact-info">
          <p className="contact-label">— GET IN TOUCH</p>
          <h2 className="contact-heading">Let's work together</h2>
          <p className="contact-desc">
            Whether you're looking for a Project manager, Junior PM, or a Business analyst - I'd love to hear from you.
          </p>

          <div className="contact-details">
            <a href="mailto:inupamasandali7@gmail.com" className="cdetail-item">
              <div className="cicon-box">
                <i className="fa-solid fa-envelope" />
              </div>
              <div className="cdetail-content">
                <span className="cdetail-title">EMAIL</span>
                <span className="cdetail-value">inupamasandali7@gmail.com</span>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/inupama-kavisekara-a5ab07265/" target="_blank" rel="noreferrer" className="cdetail-item">
              <div className="cicon-box">
                <i className="fa-brands fa-linkedin-in" />
              </div>
              <div className="cdetail-content">
                <span className="cdetail-title">LINKEDIN</span>
                <span className="cdetail-value">Inupama Kavisekara</span>
              </div>
            </a>

            <div className="cdetail-item">
              <div className="cicon-box">
                <i className="fa-solid fa-location-dot" />
              </div>
              <div className="cdetail-content">
                <span className="cdetail-title">LOCATION</span>
                <span className="cdetail-value">Sri Lanka · Open to Remote</span>
              </div>
            </div>
          </div>

          <div className="availability-badge">
            <span className="badge-dot" />
            <span className="badge-text">Available for Project Management roles – 2026</span>
          </div>
        </div>

        {/* Right Column - Contact Form Card */}
        <div className="contact-form-card">
          <form onSubmit={submit}>
            {/* Note: Hidden inputs are removed because they are now in the fetch body */}
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">FULL NAME</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handle}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">EMAIL ADDRESS</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handle}
                  required
                />
              </div>
            </div>

            <div className="form-group full-width">
              <label htmlFor="subject">SUBJECT</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Project Management Internship Inquiry"
                value={form.subject}
                onChange={handle}
                required
              />
            </div>

            <div className="form-group full-width">
              <label htmlFor="message">MESSAGE</label>
              <textarea
                id="message"
                name="message"
                cols="30"
                rows="8"
                placeholder="Tell me about the opportunity or what you'd like to discuss..."
                value={form.message}
                onChange={handle}
                required
              />
            </div>

            <button type="submit" className="form-btn" disabled={isSending}>
              <i className="fa-solid fa-paper-plane" /> {isSending ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {sent && (
            <p className="contact-sent-message">
              <i className="fa-solid fa-circle-check" /> Message sent successfully!
            </p>
          )}
        </div>

      </div>
    </section>
  )
}