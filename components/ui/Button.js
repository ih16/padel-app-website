import Link from "next/link";
import React from "react";

export default function Button({ label, href }) {
  return href ? (
    <Link href={href} passHref>
      <button className="bg-orange-varient1 py-3 px-8 rounded-[2.5rem] text-white font-semibold">
        {label}
      </button>
    </Link>
  ) : (
    <button className="bg-orange-varient1 py-3 px-8 rounded-[2.5rem] text-white font-semibold">
      {label}
    </button>
  );
}
