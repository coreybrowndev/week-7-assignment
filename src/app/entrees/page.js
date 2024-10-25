"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const page = () => {
  const [entrees, setEntrees] = useState("");
  useEffect(() => {
    fetch("/entrees.txt")
      .then((response) => response.text())
      .then((text) => setEntrees(text));
  }, []);

  return (
    <div className="flex flex-col justify-center items-center border border-gray-200 rounded-xl gap-8 bg-slate-200 text-black">
      <h1>Entrees</h1>
      <div className="max-w-[300px]">
        <p>{entrees}</p>
      </div>
      <Link href="/">Back to Home</Link>
    </div>
  );
};

export default page;
