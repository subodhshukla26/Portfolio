import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
}

export function Section({ id, className, children, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-20 md:py-32 overflow-hidden", className)}
      {...props}
    >
      {children}
    </section>
  );
}
