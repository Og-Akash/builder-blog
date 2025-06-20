import { use } from "react";
import Link from "next/link";
import { getBuilderContentByModel } from "@/helpers/builder"; // your existing fetch logic

const Footer = () => {
  const footerData = use(getBuilderContentByModel("footer-links"));
  const { footerlinks = [], bottomlinks = [], copyrightText } = footerData?.data || {};
  console.log("bottomlinks", footerData);

  return (
    <footer className="pt-10 pb-6 text-sm text-gray-500">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-3">
        {footerlinks.map((section: any, i: number) => (
          <div key={i}>
            <h4 className="mb-4 font-semibold text-black">{section.title}</h4>
            <ul className="space-y-2">
              {section.footerlink?.map((link: any, j: number) => (
                <li key={j}>
                  <Link href={link.url} className="hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="text-secondary mt-10 flex max-sm:flex-col justify-center items-center gap-2 border-t border-tertiary pt-6 text-xs">
        <p className="">{copyrightText}</p>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
          {bottomlinks.map((link: any, i: number) => (
            <Link key={i} href={link.url}>
              {link.lable}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
