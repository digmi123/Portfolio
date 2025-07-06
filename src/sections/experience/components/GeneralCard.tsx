import { cn } from "@/utlis";
import { ReactNode } from "react";

export default function GeneralCard({
  children,
  active,
}: {
  children: ReactNode;
  active: boolean;
}) {
  return (
    <div
      id="general-card"
      className={cn(
        "border-animation skills relative bg-black rounded-md overflow-hidden p-4 group before:blur-xl min-h-70",
        active && "-translate-y-4 shadow-[0_0_6px_#ffffff]"
      )}
    >
      {children}
    </div>
  );
}
