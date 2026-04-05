"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-gray-800 bg-gray-950">
      <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-white">
          Portfolio
        </Link>

        {/* 데스크탑 메뉴 */}
        <div className="hidden md:flex gap-6">
          <Link href="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white">
            About
          </Link>
          <Link href="/projects" className="text-gray-300 hover:text-white">
            Projects
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white">
            Contact
          </Link>
        </div>

        {/* 모바일 햄버거 버튼 */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-800 px-4 py-2">
          <Link href="/" className="block py-2 text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/about" className="block py-2 text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="/projects" className="block py-2 text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>
            Projects
          </Link>
          <Link href="/contact" className="block py-2 text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
