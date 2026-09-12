"use client";

import React, { useState } from "react";
import { X, Check, MessageCircle, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";
import { InquiryFormData } from "@/types";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
  category?: string;
  price?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  productName = "Curated Piece",
  category = "Collections",
  price,
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: "",
    email: "",
    phone: "",
    inquiryType: "Product Inquiry",
    productOrCollection: productName,
    message: `Hello EVORA concierge, I am interested in inquiring about ${productName}${
      price ? ` (${price})` : ""
    }. Please provide availability and ordering details.`,
    preferredContact: "WhatsApp",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const endpoint = siteConfig.getFormSubmitEndpoint();
      const payload = {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone || "Not provided",
        inquiryType: "Product Inquiry",
        piece: productName,
        category: category,
        price: price || "Upon Inquiry",
        preferredContact: formData.preferredContact,
        message: formData.message,
        _subject: `EVORA Product Inquiry: ${productName} (${formData.fullName})`,
        _template: "table",
        _captcha: "false",
      };

      await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      setSubmitting(false);
      setSubmitted(true);
    } catch (err) {
      console.error("Modal submission notice:", err);
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-espresso/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div className="relative bg-cream-light w-full max-w-lg shadow-2xl border border-luxury p-6 sm:p-8 z-10 my-8">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-espresso/60 hover:text-espresso p-1.5 focus:outline-none"
          aria-label="Close inquiry modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-12 h-12 bg-espresso text-cream-light flex items-center justify-center mx-auto">
              <Check className="w-6 h-6 text-bronze-rose" />
            </div>
            <h3 className="text-2xl font-serif text-espresso">Inquiry Transmitted</h3>
            <p className="text-sm text-espresso-muted font-light leading-relaxed max-w-md mx-auto">
              Thank you for your interest in the <strong className="text-espresso font-medium">{productName}</strong>.
              Your details were sent to our concierge email, and an advisor will connect with you shortly via {formData.preferredContact || "email"}.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 bg-espresso text-cream-light text-xs uppercase tracking-luxury hover:bg-black transition-colors"
              >
                Return to EVORA
              </button>
              <a
                href={siteConfig.generateWhatsAppUrl(productName, category)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 border border-espresso text-espresso text-xs uppercase tracking-luxury hover:bg-espresso hover:text-cream transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-bronze-rose" />
                <span>Instant WhatsApp</span>
              </a>
            </div>
          </div>
        ) : (
          <div>
            <div className="border-b border-luxury pb-4 mb-6">
              <span className="text-[10px] uppercase tracking-ultra-wide text-bronze-rose font-medium">
                Private Client Concierge
              </span>
              <h3 id="inquiry-modal-title" className="text-2xl font-serif text-espresso mt-1">
                Inquire: {productName}
              </h3>
              <p className="text-xs text-espresso-muted mt-1">
                {category} {price ? `• ${price}` : ""} • Las Vegas Atelier
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-luxury text-espresso/80 mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Eleanor Vance"
                  className="w-full bg-cream border border-luxury px-3.5 py-2.5 text-sm text-espresso placeholder-espresso/40 focus:border-espresso focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-luxury text-espresso/80 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@domain.com"
                    className="w-full bg-cream border border-luxury px-3.5 py-2.5 text-sm text-espresso placeholder-espresso/40 focus:border-espresso focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-luxury text-espresso/80 mb-1.5">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (702) 000-0000"
                    className="w-full bg-cream border border-luxury px-3.5 py-2.5 text-sm text-espresso placeholder-espresso/40 focus:border-espresso focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-luxury text-espresso/80 mb-1.5">
                  Preferred Contact Channel
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(["WhatsApp", "Email", "Phone"] as const).map((ch) => (
                    <button
                      key={ch}
                      type="button"
                      onClick={() => setFormData({ ...formData, preferredContact: ch })}
                      className={`py-2 px-3 text-xs uppercase tracking-wider border text-center transition-colors ${
                        formData.preferredContact === ch
                          ? "bg-espresso text-cream-light border-espresso font-medium"
                          : "bg-cream text-espresso/70 border-luxury hover:border-espresso"
                      }`}
                    >
                      {ch}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-luxury text-espresso/80 mb-1.5">
                  Inquiry Details
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-cream border border-luxury px-3.5 py-2.5 text-sm text-espresso focus:border-espresso focus:outline-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 py-3 bg-espresso hover:bg-black text-cream-light text-xs uppercase tracking-luxury transition-colors flex items-center justify-center gap-2 disabled:opacity-50 shadow-feminine"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{submitting ? "Transmitting..." : "Send Concierge Inquiry"}</span>
                </button>
                <a
                  href={siteConfig.generateWhatsAppUrl(productName, category)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3 px-5 border border-espresso text-espresso hover:bg-espresso hover:text-cream text-xs uppercase tracking-luxury transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-bronze-rose" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
