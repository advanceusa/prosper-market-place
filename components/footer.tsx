import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/lending-tree-logo.png"
              alt="Advance America"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          <nav className="flex flex-wrap justify-center gap-6">
            <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
              Contact Us
            </Link>
            <Link href="/faqs" className="text-sm text-muted-foreground hover:text-foreground">
              FAQs
            </Link>
          </nav>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Advance America. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
