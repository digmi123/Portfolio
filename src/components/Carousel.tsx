import ScrollIndicator from "@/sections/projects/ScrollIndicator";
import {
  ReactNode,
  UIEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

interface CarouselProps {
  children: ReactNode[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

function Carousel({ children, activeIndex }: CarouselProps) {
  const [_activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const childrenRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleScroll = (event: UIEvent<HTMLDivElement>) => {
    const width = event.currentTarget.getBoundingClientRect().width;
    const scrolled = event.currentTarget.scrollLeft;
    const index = Math.round(scrolled / width);
    setActiveIndex(index);
    // ScrollToIndex(index);
  };

  const ScrollToIndex = useCallback((index: number) => {
    const container = carouselRef.current;
    const child = childrenRefs.current.at(index);
    console.log(container, child);

    if (container && child)
      container.scrollTo({
        left: child.offsetLeft,
        behavior: "smooth",
      });
  }, []);

  useEffect(() => {
    ScrollToIndex(activeIndex);
  }, [ScrollToIndex, activeIndex]);

  return (
    <>
      <div
        className="w-full flex hide-scroll overflow-x-auto snap-x snap-mandatory scroll-smooth transition-transform duration-500"
        onScroll={handleScroll}
        ref={carouselRef}
      >
        {children.map((child, index) => (
          <div
            key={index}
            className="min-w-full snap-center p-6"
            ref={(ref) => {
              childrenRefs.current[index] = ref;
            }}
          >
            {child}
          </div>
        ))}
      </div>
      <ScrollIndicator
        numSlides={children.length}
        activeIndex={_activeIndex}
        scrollToIndex={ScrollToIndex}
      />
    </>
  );
}

export default Carousel;
