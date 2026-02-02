import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { FileText, Search, CheckCircle, Banknote } from "lucide-react"
import Link from "next/link"

export default function HowItWorksPage() {
  const steps = [
    {
      number: "01",
      title: "Fill Out Our Simple Form",
      description: "Complete our quick online application in just a few minutes. We'll ask about your loan needs, income, and basic personal information.",
      icon: FileText,
    },
    {
      number: "02",
      title: "Compare Multiple Offers",
      description: "We'll match you with lenders from our network and show you personalized loan offers. Compare rates, terms, and monthly payments side by side.",
      icon: Search,
    },
    {
      number: "03",
      title: "Choose Your Best Option",
      description: "Select the loan offer that best fits your needs. Review all terms and conditions before making your final decision.",
      icon: CheckCircle,
    },
    {
      number: "04",
      title: "Get Your Funds",
      description: "Complete the lender's verification process and receive your funds. Many borrowers get money as soon as the next business day.",
      icon: Banknote,
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
                How Advance America Works
              </h1>
              <p className="text-xl text-muted-foreground">
                Getting a personal loan has never been easier. Our streamlined process helps you find the right loan in minutes, not days.
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <div key={step.number} className={`flex flex-col md:flex-row gap-8 items-start ${index !== steps.length - 1 ? 'mb-16' : ''}`}>
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center">
                      <step.icon className="h-10 w-10 text-emerald-600" />
                    </div>
                  </div>
                  <div>
                    <div className="text-emerald-600 font-bold text-sm mb-2">STEP {step.number}</div>
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-lg text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Have Questions?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Check out our frequently asked questions or contact our support team for personalized assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/faqs">
                  <Button variant="outline" size="lg">
                    View FAQs
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                    Contact Support
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-emerald-600 rounded-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl mb-8 opacity-90">
                Join millions of Americans who have found their perfect loan through Advance America.
              </p>
              <Link href="/">
                <Button size="lg" variant="secondary" className="bg-white text-emerald-600 hover:bg-gray-100">
                  Check Your Rate Now
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
