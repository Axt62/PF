"use client"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <Link href="/">Home</Link>
      <Link href="/cv">CV</Link>
      <Link href="/contact">contact</Link>
    </main>
  )
}
