import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <main className="container mx-auto px-[20px] text-white flex flex-col items-center mt-[50px] md:mt-[150px]">
      {children}
    </main>
  );
}
