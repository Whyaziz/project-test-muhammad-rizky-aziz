"use client";

export default function Hero() {
  const backgroundImage = {
    backgroundImage: "url('/assets/images/ideas/bg_hero.png')",
    backgroundSize: "cover",
    backgroundPosition: "top",
  };

  return (
    <div
      style={backgroundImage}
      className="flex w-full flex-col min-h-screen items-center justify-center p-4 md:p-6 xl:p-8 bg-fixed"
    >
      <h1 className="text-white text-xl md:text-4xl xl:text-5xl text-center">
        Ideas
      </h1>
      <p className="text-white text-base md:text-lg xl:text-xl text-center">
        Where all our great things begin
      </p>
    </div>
  );
}
