import Button from "@/components/ui/Button";
import { Mail } from "lucide-react";
import React from "react";

type FooterUpProps = {
  title?: string;
  description?: string;
  inputPlaceholder?: string;
  buttonText?: string;
  policyText?: string;
  backgroundImage?: string;
};

const FooterUp = ({
  title,
  description,
  inputPlaceholder,
  buttonText,
  policyText,
  backgroundImage
}: FooterUpProps) => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat px-4 py-20 sm:px-6 md:px-8"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="mx-auto max-w-5xl rounded-2xl bg-white p-6 shadow-lg md:p-12">
        <h2 className="mb-4 text-center text-2xl font-bold sm:text-3xl md:text-4xl">{title}</h2>
        <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-center">{description}</p>

        <form className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <div className="relative w-full sm:w-96">
            <span className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400">
              <Mail size={18} />
            </span>
            <input
              type="email"
              required
              placeholder={inputPlaceholder}
              className="focus:border-mint focus:ring-mint w-full rounded-md border border-gray-300 py-3 pr-4 pl-10 text-sm outline-none focus:ring-1"
            />
          </div>
          <Button type="submit" variant="solid" className="px-4 py-3">
            {buttonText}
          </Button>
        </form>
        <p className="text-muted-foreground mt-4 text-center text-xs">{policyText}</p>
      </div>
    </section>
  );
};

export default FooterUp;
