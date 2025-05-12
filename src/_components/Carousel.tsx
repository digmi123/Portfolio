import ScrollIndicator from "@/_sections/projects/ScrollIndicator";
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

  const childrenRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleScroll = (event: UIEvent<HTMLDivElement>) => {
    const width = event.currentTarget.getBoundingClientRect().width;
    const scrolled = event.currentTarget.scrollLeft;
    const index = Math.round(scrolled / width);
    setActiveIndex(index);
  };

  const ScrollToIndex = useCallback((index: number) => {
    childrenRefs.current.at(index)?.scrollIntoView();
  }, []);

  useEffect(() => {
    ScrollToIndex(activeIndex);
  }, [ScrollToIndex, activeIndex]);

  return (
    <>
      <div
        className="w-full flex hide-scroll overflow-x-auto snap-x snap-mandatory scroll-smooth transition-transform duration-500"
        onScroll={handleScroll}
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
