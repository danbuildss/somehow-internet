"use client";
import React, { useState } from "react";

export default function BusinessSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("https://formspree.io/f/mgavyqzz", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="section" id="business" aria-labelledby="business-h">
      <p
        className="eyebrow reveal"
        style={{ "--reveal-delay": "0s" } as React.CSSProperties}
      >
        03 / Business
      </p>
      <div
        className="reveal"
        style={{ "--reveal-delay": "0.08s" } as React.CSSProperties}
      >
        <h2 className="biz-heading" id="business-h">
          Partnerships that lead somewhere.
        </h2>
        <p className="biz-body">
          We help early-stage internet companies find and start the right
          partnerships.
        </p>
        <p className="biz-sub biz-offer-name">PARTNERSHIP SPRINT</p>
        <p className="biz-sub">
          In 30 days, we research your market, identify the companies you should
          know, develop the partnership angles, find the right people and help
          start the conversations.
        </p>
        <p className="biz-sub biz-steps">
          Research → Map → Prioritize → Angle → Connect → Track
        </p>

        {status === "success" ? (
          <p className="biz-success">Got it. We&apos;ll be in touch.</p>
        ) : (
          <form className="biz-form" onSubmit={handleSubmit} noValidate>
            <input type="hidden" name="_subject" value="New enquiry — Somehow Internet" />

            <div className="biz-field">
              <label className="biz-label" htmlFor="biz-name">Name</label>
              <input
                id="biz-name"
                className="biz-input"
                type="text"
                name="name"
                placeholder="Your name"
                required
              />
            </div>
            <div className="biz-field">
              <label className="biz-label" htmlFor="biz-email">Email</label>
              <input
                id="biz-email"
                className="biz-input"
                type="email"
                name="email"
                placeholder="you@company.com"
                required
              />
            </div>
            <div className="biz-field">
              <label className="biz-label" htmlFor="biz-company">
                Company / Project
              </label>
              <input
                id="biz-company"
                className="biz-input"
                type="text"
                name="company"
                placeholder="What are you building?"
              />
            </div>
            <div className="biz-field">
              <label className="biz-label" htmlFor="biz-social">
                Website / X
              </label>
              <input
                id="biz-social"
                className="biz-input"
                type="text"
                name="social"
                placeholder="Link or @handle"
              />
            </div>
            <div className="biz-field">
              <label className="biz-label" htmlFor="biz-goal">
                What partnerships are you looking for?
              </label>
              <textarea
                id="biz-goal"
                className="biz-textarea"
                name="message"
                placeholder={`Tell us what you're trying to unlock...`}
                rows={5}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-solid biz-submit"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending…" : "Start a conversation →"}
            </button>
            {status === "error" && (
              <p className="biz-error">
                Something went wrong. Email us at hello.danbuildss@gmail.com
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
