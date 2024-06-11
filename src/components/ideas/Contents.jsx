"use client";

export default function Contents() {
  return (
    <div className="flex flex-col w-full relative overflow-x-clip">
      <div className="bg-white h-[25vh] flex w-[140%] absolute top-[-20%] left-[-10%] -rotate-3" />
      <div className="bg-white min-h-screen flex justify-center items-center text-black">
        <div className="grid grid-cols-4"></div>
      </div>
    </div>
  );
}
