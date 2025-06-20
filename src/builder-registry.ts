"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import Header from "./components/Header/Header";
import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter/Newsletter";

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

Builder.registerComponent(Header, {
  name: "Default Header",
  inputs: [
    { name: "logoUrl", type: "file", friendlyName: "Logo Image" },
    {
      name: "links",
      type: "list",
      subFields: [
        { name: "label", type: "text" },
        { name: "url", type: "text" },
        { name: "hasmore", type: "boolean" },
      ],
      friendlyName: "Nav Links",
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
