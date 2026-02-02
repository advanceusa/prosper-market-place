"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LoanForm } from "@/components/loan-form"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, CreditCard, Home, ShoppingBag, Heart, Plane, Stethoscope, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function PersonalLoansPage() {
  const loanTypes = [
    {
      title: "Debt Consolidation",
      description: "Combine multiple debts into one manageable payment",
      icon: CreditCard,
      rate: "From 2.49% APR",
    },
    {
      title: "Home Improvement",
      description: "Renovate your home and increase its value",
      icon: Home,
      rate: "From 2.49% APR",
    },
    {
      title: "Major Purchase",
      description: "Buy what you need without depleting savings",
      icon: ShoppingBag,
      rate: "From 2.49% APR",
    },
    {
      title: "Wedding",
      description: "Make your special day perfect",
      icon: Heart,
      rate: "From 2.49% APR",
    },
    {
      title: "Vacation",
      description: "Create memories that last a lifetime",
      icon: Plane,
      rate: "From 2.49% APR",
    },
    {
      title: "Medical Expenses",
      description: "Cover unexpected healthcare costs",
      icon: Stethoscope,
      rate: "From 2.49% APR",
    },
  ]

  const benefits = [
    "No origination fees, prepayment penalties, or late fees",
    "Competitive rates starting as low as 2.49% APR with AutoPay",
    "Fast funding - as soon as the same day you're approved",
    "Loan amounts from $2,000 to $100,000",
    "Terms from 24 to 144 months",
    "No collateral required",
    "Rate Beat Program - we'll beat any qualifying rate by 0.10 percentage points",
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section with Form */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Text */}
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  Personal Loans Made Simple
                </h1>
                <p className="text-xl text-muted-foreground">
                  Get the funds you need with competitive rates, no fees, and fast approval. Borrow $2,000 to $100,000 for any purpose.
                </p>
              </div>
              
              {/* Right Column - Form */}
              <div>
                <LoanForm />
              </div>
            </div>
          </div>
        </section>

        {/* Popular Loan Uses */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-4">
              <h2 className="text-3xl font-bold">Popular Loan Uses</h2>
              <p className="text-muted-foreground mt-2">Use your personal loan for virtually any purpose</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {loanTypes.map((loan) => (
                <Card key={loan.title} className="hover:shadow-lg transition-shadow border border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-emerald-100 rounded-lg">
                        <loan.icon className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-1">{loan.title}</h3>
                        <p className="text-muted-foreground text-sm mb-3">{loan.description}</p>
                        <p className="text-emerald-600 font-medium text-sm">{loan.rate}</p>
                        <button className="text-blue-600 text-sm font-medium mt-2 flex items-center gap-1 hover:underline">
                          Learn More <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-10">Why Choose Advance America Personal Loans?</h2>
              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="bg-white border border-gray-200 shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Ready to Apply?</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Loan Amount:</p>
                        <p className="font-semibold">$2,000 - $100,000</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">APR Range:</p>
                        <p className="font-semibold">2.49% - 19.99%</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Loan Terms:</p>
                        <p className="font-semibold">24 - 144 months</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Funding Time:</p>
                        <p className="font-semibold">Same day</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-center md:text-right">
                    <Link href="#top">
                      <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                        Check Your Rate
                      </Button>
                    </Link>
                    <p className="text-xs text-muted-foreground mt-2">
                      Checking your rate won't affect your credit score
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
