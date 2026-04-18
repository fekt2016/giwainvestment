"use client";

import { FormEvent } from "react";
import styled from "styled-components";
import { Button } from "@/components/ui/Button";
import { CONTACT_EMAIL } from "@/lib/site";

const Form = styled.form`
  max-width: 32rem;
  display: grid;
  gap: 1rem;
`;

const Label = styled.label`
  display: grid;
  gap: 0.35rem;
  font-weight: 500;
  font-size: 0.9rem;
`;

const Input = styled.input`
  font: inherit;
  padding: 0.65rem 0.85rem;
  border: 1px solid #d6d3d1;
  border-radius: 8px;
  background: ${(p) => p.theme.colors.white};
`;

const TextArea = styled.textarea`
  font: inherit;
  padding: 0.65rem 0.85rem;
  border: 1px solid #d6d3d1;
  border-radius: 8px;
  background: ${(p) => p.theme.colors.white};
  min-height: 8rem;
  resize: vertical;
`;

const Select = styled.select`
  font: inherit;
  padding: 0.65rem 0.85rem;
  border: 1px solid #d6d3d1;
  border-radius: 8px;
  background: ${(p) => p.theme.colors.white};
`;

const Note = styled.p`
  font-size: 0.8rem;
  color: ${(p) => p.theme.colors.muted};
  margin-top: 1rem;
  line-height: 1.5;
`;

const Card = styled.div`
  background: ${(p) => p.theme.colors.white};
  padding: 1.5rem;
  border-radius: ${(p) => p.theme.radius};
  box-shadow: ${(p) => p.theme.shadow};
`;

export default function ContactForm() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "");
    const email = String(fd.get("email") || "");
    const message = String(fd.get("message") || "");
    const subject = "Enquiry from giwainvestment.com";
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div>
      <h2 className="visually-hidden">Message form</h2>
      <Card as={Form} id="contact-form" onSubmit={onSubmit} noValidate>
        <Label>
          Name
          <Input name="name" autoComplete="name" required />
        </Label>
        <Label>
          Email
          <Input type="email" name="email" autoComplete="email" required />
        </Label>
        <Label>
          What do you need?
          <Select name="topic" defaultValue="buy">
            <option value="buy">Buy a home</option>
            <option value="rent">Rent</option>
            <option value="land">Land</option>
            <option value="invest">Investor enquiry</option>
            <option value="partner">Partnership</option>
            <option value="other">Other</option>
          </Select>
        </Label>
        <Label>
          Message
          <TextArea
            name="message"
            required
            placeholder="Tell us about your timeline and location in Ghana."
          />
        </Label>
        <Button type="submit" text="Send via email app" variant="primary" />
      </Card>
      <Note>
        Submitting opens your email app with a pre-filled message to{" "}
        {CONTACT_EMAIL}. For faster replies in Ghana, WhatsApp is often best.
        Replace the placeholder phone and WhatsApp link with your real numbers
        before launch.
      </Note>
    </div>
  );
}
