"use client";
import { builder, Builder } from "@builder.io/react";
import CaseStudies from "./components/builder/Case";
import Counter from "./components/builder/Counter/Counter";
import FaqSection from "./components/builder/Faq/Faqs";
import FooterUp from "./components/builder/FooterUp/Footerup";
import Hero from "./components/builder/Hero";
import Insights from "./components/builder/Insights";
import Newsletter from "./components/builder/Newsletter/Newsletter";
import Testimonial from "./components/builder/Testimonial/Testimonial";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(Newsletter, {
  name: "Newsletter",
  inputs: [
    {
      name: "content",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(Hero, {
  name: "Hero",
  inputs: [
    {
      name: "heading",
      type: "string",
      required: true,
    },
    {
      name: "subheadng",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(Insights, {
  name: "Insights",
  inputs: [
    {
      name: "description",
      type: "string",
    },
    {
      name: "tag",
      type: "string",
      defaultValue: "Blog",
    },
    {
      name: "title",
      type: "string",
    },
  ],
});

Builder.registerComponent(CaseStudies, {
  name: "CaseStudies",
  inputs: [
    {
      name: "description",
      type: "string",
    },
    {
      name: "tag",
      type: "string",
      defaultValue: "Blog",
    },
    {
      name: "title",
      type: "string",
    },
  ],
});

Builder.registerComponent(FaqSection, {
  name: "FaqSection",
  inputs: [
    { name: "tag", type: "text", defaultValue: "FAQ" },
    { name: "title", type: "text", defaultValue: "Frequently asked questions" },
    { name: "description", type: "text", defaultValue: "Frequently asked questions" },
    {
      name: "faqs",
      type: "list",
      subFields: [
        { name: "question", type: "text" },
        { name: "answer", type: "longText" },
      ],
    },
  ],
});

Builder.registerComponent(Testimonial, {
  name: "Testimonial",
  inputs: [
    {
      name: "testimonials",
      type: "list",
      subFields: [
        { name: "quote", type: "text", defaultValue: "This is a testimonial quote." },
        { name: "writer", type: "longText", defaultValue: "Akash Ghosh" },
        { name: "company", type: "test", defaultValue: "Weframe Tech" },
      ],
    },
  ],
});

Builder.registerComponent(FooterUp, {
  name: "FooterUp",
  inputs: [
    {
      name: "title",
      type: "text",
      defaultValue: "Schedule Your Consultation Today",
    },
    {
      name: "description",
      type: "text",
      defaultValue:
        "Weframe tech is the modern, award-winning platform that empowers some of the largest names in healthcare and advisory sectors.",
    },
    {
      name: "inputPlaceholder",
      type: "text",
      defaultValue: "Enter your email",
    },
    {
      name: "buttonText",
      type: "text",
      defaultValue: "Book a meeting",
    },
    {
      name: "policyText",
      type: "text",
      defaultValue: "By submitting you agree to our privacy policy.",
    },
    {
      name: "backgroundImage",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png", "webp"],
    },
  ],
});
