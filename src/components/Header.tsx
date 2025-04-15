"use client";
import Link from "next/link";
import { Separator } from "./ui/separator";

export default function Header() {
  return (
    <div className="h-16 px-10 border-b bg-white">
      <div className="container flex items-center justify-between h-full">
        <h1 className="text-2xl">
          <Link href="/">HELLO STORE</Link>
        </h1>
        <div className="flex justify-end space-x-4 text-sm h-1/3">
        <Link href='/search'>search</Link>
        <Separator orientation="vertical"/>
        <Link href='/account'>account</Link>
        <Separator orientation="vertical"/>
        <Link href='/cart'>cart</Link>
        </div>
      </div>
    </div>
  );
}
