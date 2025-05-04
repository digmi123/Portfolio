import { cn } from "@/utlis";
import { ReactNode } from "react";

export default function GeneralCard({
  children,
  active,
}: {
  children: ReactNode;
  active: boolean;
}) {
  // "z-2 overflow-hidden flex items-center justify-center card relative rounded-md border-foreground border-1 bg-[radial-gradient(ellipse_80%_30%_at_50%_0%,#ffffff4c,theme('colors.background'))] transition-all duration-700 ease-in-out"
  return (
    <div
      id="general-card"
      className={cn(
        "border-animation cards relative bg-black rounded-md overflow-hidden p-4 group",
        active && "-translate-y-4 shadow-[0_0_6px_#ffffff]"
      )}
    >
      {children}
    </div>
  );
}
