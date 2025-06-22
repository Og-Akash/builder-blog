interface Testimonial {
  writer: string;
  company: string;
  quote: string;
}

export default function TestimonialCard({ writer, company, quote }: Testimonial) {
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-background p-6 text-center break-words">
      <p className="text-sm text-secondary italic">{quote}</p>
      <div className="flex items-center gap-4 w-full justify-center">
        <div className="text-tertiary flex items-center gap-2">
          <p className="text-sm font-medium">{writer}</p>
          <p className="text-sm">{company}</p>
        </div>
      </div>
    </div>
  );
}
