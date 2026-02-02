"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/lending-tree-logo.png"
            alt="Advance America"
            width={150}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/personal-loans" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Personal Loans
          </Link>
          <Link href="/how-it-works" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            How It Works
          </Link>
          <Link href="/about-us" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            About Us
          </Link>
          <Link href="/faqs" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            FAQs
          </Link>
          <Link href="/contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/login">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
              Login
            </Button>
          </Link>
          <Link href="/personal-loans">
            <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
              Apply Now
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
