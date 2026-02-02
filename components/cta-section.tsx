import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-16 md:py-24 bg-emerald-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">Ready to Get Started?</h2>
        <p className="mt-4 text-lg text-emerald-100 max-w-2xl mx-auto">
          Join thousands of satisfied customers who chose Advance America for their personal loan needs.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/personal-loans">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
              Apply Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/how-it-works">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-emerald-700 hover:text-white bg-transparent"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
