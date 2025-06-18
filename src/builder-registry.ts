"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
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
