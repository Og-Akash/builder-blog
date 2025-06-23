"use client";

import React, { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FaqSectionProps {
  tag?: string;
  title?: string;
  description?: string;
  faqs: {
    question: string;
    answer: string;
  }[];
}

const FaqSection = ({ tag, title, description, faqs }: FaqSectionProps) => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <section className="mx-auto w-full max-w-4xl space-y-8 px-4 py-10">
      <div className="mx-auto flex max-w-2xl flex-col space-y-2 max-md:text-center md:space-y-4">
        <div className="text-center">
          <span className="text-mint text-sm font-bold">{tag}</span>
        </div>
        <h1 className="text-primary text-3xl font-[700] md:text-5xl">{title}</h1>
        <p className="text-secondary text-sm">{description}</p>
      </div>

      <Accordion.Root
        type="single"
        collapsible
        value={openItem ?? undefined}
        onValueChange={(val) => setOpenItem(val)}
        className="space-y-4"
      >
        {faqs?.map((faq, index) => {
          const itemValue = `item-${index}`;
          const isOpen = openItem === itemValue;

          return (
            <Accordion.Item
              key={index}
              value={itemValue}
              className="overflow-hidden rounded-xl border border-gray-200 shadow"
            >
              <Accordion.Header>
                <Accordion.Trigger
                  className={cn(
                    "flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-4 text-left font-medium text-gray-900 transition",
                  )}
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <span className="bg-teal rounded-lg">
                      <Minus className="text-white" strokeWidth="3px" />
                    </span>
                  ) : (
                    <span className="rounded-md bg-[#007AFF26]">
                      <Plus className="text-teal" strokeWidth="3px" />
                    </span>
                  )}
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="text-auxiliary data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden px-6 pb-1 text-sm">
                {faq.answer}
              </Accordion.Content>
            </Accordion.Item>
          );
        })}
      </Accordion.Root>
    </section>
  );
};

export default FaqSection;
