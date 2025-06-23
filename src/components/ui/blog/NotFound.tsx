import { AlertCircle } from "lucide-react";

interface NotFoundProps {
  count?: number;
  title?: string;
  message?: string;
}

const NotFound = ({
  count = 0,
  title = "No Blogs Found",
  message = "We couldn't find any blogs matching your search or category filter.",
}: NotFoundProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-16 text-center text-muted-foreground">
      <AlertCircle className="h-10 w-10 text-destructive" />
      <h2 className="text-xl font-semibold text-foreground">{title}</h2>
      <p className="max-w-md text-sm">{message}</p>
      {count > 0 && (
        <span className="text-xs text-tertiary">({count} total searched)</span>
      )}
    </div>
  );
};

export default NotFound;
