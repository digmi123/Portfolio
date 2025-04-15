import { cn } from "@/utlis";
import { ReactNode } from "react";

export default function GeneralCard({
  children,
  active,
}: {
  children: ReactNode;
  active: boolean;
}) {
  console.log({ active });

  return (
    <div
      id="general-card"
      className={cn(
        "p-2 rounded-md border-foreground border-1 bg-[radial-gradient(ellipse_80%_30%_at_50%_0%,#ffffff4c,theme('colors.background'))] transition-all duration-300 ease-in-out",
        active && "-translate-y-4 shadow-[0_0_6px_#ffffff]"
      )}
    >
      {children}
    </div>
  );
}
