"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const halloweenSlides = [{
  image: "/images/halloween-screen-repair.webp",
  alt: "Don't let a broken screen haunt you. Explore screen repair at Tech Medics.",
  href: "/macon/screen-repair",
}, {
  image: "/images/halloween-spooky-deals.webp",
  alt: "Spooky Deals: ask how you can save $10 or $20 off your repair. Contact us.",
  href: "/macon/contact",
}];

// Midnight in Macon after Sunday, November 1, 2026 (Eastern Standard Time).
const halloweenEndsAt = Date.parse("2026-11-02T00:00:00-05:00");

const regularSlides = [
  // Memorial Day promo — re-enable in late May next year.
  // {
  //   image: "/images/Promo/Memorial day.png",
  //   alt: "Memorial Day Sale at Tech Medics Macon - special pricing on iPhone, iPad and MacBook repair",
  //   href: "/macon/pricing-chart",
  // },
  {
    image: "/images/AfterpayTechmedics.png",
    alt: "Afterpay now available at Tech Medics - split your repair into 4 interest-free payments",
    href: "/macon/afterpay",
  },
  {
    image: "/images/Promo/Beige Minimal Reformer Pilates Promotion Banner.png",
    alt: "Lyca Mobile plans starting $15 a month - available at Tech Medics Macon GA",
    href: "/macon/contact",
  },
  {
    image: "/images/Promo/Copy of Beige Minimal Reformer Pilates Promotion Banner.png",
    alt: "New pricing for OLED screens - premium parts, premium experience, maximum savings at Tech Medics",
    href: "/macon/screen-repair",
  },
  {
    image: "/images/Promo/Copy of Copy of Beige Minimal Reformer Pilates Promotion Banner.png",
    alt: "Wireless charger $14.99 - unlock various charging positions at Tech Medics Macon",
    href: "/macon/contact",
  },
  {
    image: "/images/genuine-apple-parts-carousel.png",
    alt: "Genuine Apple Parts available upon request for eligible iPhone display repairs",
    href: "/macon/apple-genuine-parts",
  },
  {
    image: "/images/Promo/Copy of Copy of Copy of Copy of Beige Minimal Reformer Pilates Promotion Banner (1).png",
    alt: "Save the ozone - recycle your old tech at Tech Medics with secure data erasure",
    href: "/macon/contact",
  },
];

export default function HeroCarousel() {
  const [showHalloween, setShowHalloween] = useState(false);
  const slides = showHalloween ? [...halloweenSlides, ...regularSlides] : regularSlides;
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const remaining = halloweenEndsAt - Date.now();
    if (remaining <= 0) return;
    setShowHalloween(true);
    const timer = window.setTimeout(() => setShowHalloween(false), remaining);
    return () => window.clearTimeout(timer);
  }, []);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0">
              <Link href={slide.href} className="block bg-white">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  width="1024"
                  height="512"
                  className="w-full max-w-7xl mx-auto h-auto"
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding={index === 0 ? "sync" : "async"}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-2 shadow-md border border-border/50 transition-all hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 text-foreground" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-2 shadow-md border border-border/50 transition-all hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 text-foreground" />
      </button>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 py-4 bg-white">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? "bg-primary w-8"
                : "bg-border hover:bg-muted-foreground/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
