import { cn } from "@/utlis";

interface ScrollIndicatorProps {
  numSlides: number;
  activeIndex: number;
  scrollToIndex: (index: number) => void;
}

function ScrollIndicator({
  numSlides,
  activeIndex,
  scrollToIndex,
}: ScrollIndicatorProps) {
  return (
    <div id="indicator-wrapper" className="p-2 max-lg:flex gap-4 m-auto hidden">
      {Array.from({ length: numSlides }).map((_, index) => {
        return (
          <div
            key={index}
            onClick={() => scrollToIndex(index)}
            className={cn(
              "w-4 h-4 rounded-full outline outline-white",
              activeIndex === index ? "bg-amber-600" : ""
            )}
          />
        );
      })}
    </div>
  );
}

export default ScrollIndicator;
