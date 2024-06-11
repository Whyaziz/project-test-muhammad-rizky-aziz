"use client";

export default function Hero() {
  const backgroundImage = {
    backgroundImage: "url('/images/ideas/hero.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="flex flex-col min-h-screen items-center p-4 md:p-6 xl:p-8"></div>
  );
}
