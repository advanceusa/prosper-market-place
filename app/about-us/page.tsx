import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Users, Award, TrendingUp, Heart } from "lucide-react"
import Link from "next/link"

export default function AboutUsPage() {
  const stats = [
    { number: "100M+", label: "Customers Served" },
    { number: "$50B+", label: "Loans Facilitated" },
    { number: "500+", label: "Lending Partners" },
    { number: "25+", label: "Years in Business" },
  ]

  const values = [
    {
      icon: Users,
      title: "Customer First",
      description: "We put our customers at the center of everything we do, providing transparent information to help them make informed decisions.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in our technology, partnerships, and customer service to deliver the best possible experience.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "We continuously innovate to simplify the loan process and provide more value to our customers and partners.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We operate with honesty and transparency, building trust with our customers, partners, and employees.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-emerald-50 to-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                About Advance America
              </h1>
              <p className="text-xl text-muted-foreground">
                We're on a mission to help every American make smart financial decisions. Since 1996, we've been connecting borrowers with lenders to find the best loan options.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
              <div className="prose prose-lg mx-auto text-muted-foreground">
                <p className="mb-4">
                  Advance America was founded in 1996 with a simple idea: give consumers the power to comparison shop for loans and find the best rates. Before Advance America, getting a loan meant visiting multiple banks, filling out paperwork, and hoping for the best.
                </p>
                <p className="mb-4">
                  We changed that by creating an online marketplace where lenders compete for your business. This competition drives down rates and gives you more options to choose from.
                </p>
                <p>
                  Today, we're proud to have helped over 100 million Americans find personal loans, mortgages, auto loans, credit cards, and more. Our network includes over 500 lenders, ensuring you get access to competitive rates and terms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-emerald-600 rounded-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Join Millions of Happy Customers</h2>
              <p className="text-xl mb-8 opacity-90">
                Start your journey to financial freedom today.
              </p>
              <Link href="/">
                <Button size="lg" variant="secondary" className="bg-white text-emerald-600 hover:bg-gray-100">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
