import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowRight } from "lucide-react"
import { LoanForm } from "@/components/loan-form"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-background pb-16 pt-12 md:pb-24 md:pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-emerald-200 blur-3xl" />
        <div className="absolute right-1/4 top-1/2 h-96 w-96 rounded-full bg-teal-200 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left content */}
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                No Hidden Fees
              </Badge>
              <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                •
              </Badge>
              <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                Fast Approval
              </Badge>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Personal Loans Up to <span className="text-emerald-600">$100,000</span>
            </h1>

            <p className="max-w-lg text-lg text-muted-foreground">
              Get the funds you need with competitive rates, no origination fees, and fast funding. Apply online in
              minutes with Advance America.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Verify Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                How It Works
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-emerald-600" />
                <span className="text-sm text-muted-foreground">No prepayment penalty</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-emerald-600" />
                <span className="text-sm text-muted-foreground">Fixed rates</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-emerald-600" />
                <span className="text-sm text-muted-foreground">Fast funding</span>
              </div>
            </div>
          </div>

          {/* Right content - Loan Form */}
          <div className="lg:pl-8">
            <LoanForm />
          </div>
        </div>
      </div>
    </section>
  )
}
