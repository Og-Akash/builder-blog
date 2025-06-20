"use client";

import React, { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FaqSectionProps {
  tag?: string; // e.g., "FAQ"
  title?: string; // e.g., "Frequently Asked Questions"
  description?: string;
  faqs: {
    question: string;
    answer: string;
  }[];
}

const FaqSection = ({ tag, title, description, faqs }: FaqSectionProps) => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <section className="mx-auto max-w-4xl space-y-8 px-4 py-10">
      <div className="mx-auto flex max-w-2xl flex-col space-y-4">
        <div className="text-center">
          <span className="text-mint text-sm font-bold">{tag}</span>
        </div>
        <h1 className="text-primary text-5xl font-[700]">{title}</h1>
        <p className="text-secondary text-sm">{description}</p>
      </div>

      <Accordion.Root
        type="single"
        collapsible
        value={openItem ?? undefined}
        onValueChange={(val) => setOpenItem(val || null)}
        className="space-y-4"
      >
        {faqs?.map((faq, index) => (
          <Accordion.Item
            key={index}
            value={`item-${index}`}
            className="overflow-hidden rounded-xl border border-gray-200 shadow"
          >
            <Accordion.Header>
              <Accordion.Trigger
                className={cn(
                  "flex w-full items-center justify-between px-6 py-4 text-left font-medium text-gray-900 transition hover:bg-[#007AFF26]",
                )}
              >
                <span>{faq.question}</span>
                {openItem === `item-${index}` ? (
                  <Minus className="h-4 w-4 text-cyan-500" />
                ) : (
                  <Plus className="h-4 w-4 text-cyan-500" />
                )}
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="animate-slideDown px-6 pb-4 text-sm text-gray-600">
              {faq.answer}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  );
};

export default FaqSection;
