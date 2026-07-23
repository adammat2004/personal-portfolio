"use client";

import { useState } from "react";

const GithubIcon = () => (
  <svg
    aria-hidden="true"
    width="19"
    height="19"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.78 1.2 1.78 1.2 1.04 1.77 2.72 1.26 3.38.96.1-.75.4-1.26.74-1.55-2.57-.29-5.28-1.29-5.28-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.16 1.18a10.98 10.98 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.4-2.71 5.38-5.29 5.67.42.36.79 1.06.79 2.14v3.18c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    aria-hidden="true"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.86-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.33V8.98h3.42v1.57h.05c.47-.9 1.64-1.86 3.37-1.86 3.6 0 4.27 2.37 4.27 5.46v6.3ZM5.31 7.41a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13Zm1.78 13.04H3.53V8.98h3.56v11.47ZM22.23 0H1.76C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.76 24h20.47c.97 0 1.77-.77 1.77-1.73V1.73C24 .77 23.2 0 22.23 0Z" />
  </svg>
);

const EmailSection = () => {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Your message could not be sent.");
      }

      form.reset();
      setStatus("success");
    } catch (submissionError) {
      setError(
        submissionError.message ||
          "Something went wrong. Please email me directly instead.",
      );
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="site-shell contact-panel">
        <div className="contact-grid">
          <div className="contact-copy-wrap">
            <p className="section-kicker contact-kicker">04 / Contact</p>
            <h2 className="contact-title">Let&apos;s build something useful.</h2>
            <p className="contact-copy">
              I&apos;m open to graduate software engineering, full-stack,
              backend and AI-focused roles beginning in 2027. If you&apos;re
              building a thoughtful product with an ambitious team, I&apos;d
              love to hear about it.
            </p>
            <a className="contact-email" href="mailto:ammatthews2004@gmail.com">
              ammatthews2004@gmail.com <span className="arrow">↗</span>
            </a>

            <div className="social-links">
              <a
                className="icon-link"
                href="https://github.com/adammat2004"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Adam Matthews on GitHub"
              >
                <GithubIcon />
              </a>
              <a
                className="icon-link"
                href="https://www.linkedin.com/in/adammat04/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Adam Matthews on LinkedIn"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="email">Your email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@company.com"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Graduate opportunity"
                maxLength={150}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me a little about the role or project…"
                maxLength={3000}
                required
              />
            </div>

            {status === "error" && (
              <p className="form-status form-error" role="alert">
                {error}
              </p>
            )}
            {status === "success" && (
              <p className="form-status form-success" role="status">
                Thanks—your message has been sent. I&apos;ll be in touch soon.
              </p>
            )}

            <button
              className="button button-dark"
              type="submit"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Sending…" : "Send message"}
              {status !== "submitting" && <span className="arrow">↗</span>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
