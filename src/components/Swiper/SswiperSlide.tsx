"use client";
export default function SswiperSlide({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`b-swiper-slide p-2 overflow-hidden h-full bg-transparent rounded-md ${className} 	`}
    >
      {children}
    </div>
  );
}
