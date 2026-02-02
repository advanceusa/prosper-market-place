import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"

export default function FAQsPage() {
  const faqs = [
    {
      question: "What is a personal loan?",
      answer: "A personal loan is an unsecured loan that you can use for almost any purpose, such as consolidating debt, financing a large purchase, or covering unexpected expenses. Unlike a mortgage or auto loan, a personal loan doesn't require collateral.",
    },
    {
      question: "How much can I borrow?",
      answer: "Through Advance America, you can access personal loans ranging from $1,000 to $100,000, depending on your creditworthiness, income, and the lender's criteria. The exact amount you qualify for will be determined during the application process.",
    },
    {
      question: "What credit score do I need?",
      answer: "Credit score requirements vary by lender. Some lenders in our network work with borrowers who have fair credit (580+), while others require good to excellent credit (670+). Checking your rate on Advance America won't affect your credit score.",
    },
    {
      question: "How long does it take to get funded?",
      answer: "Many lenders can fund your loan as soon as the next business day after approval. The exact timeline depends on the lender, how quickly you complete the verification process, and your bank's processing time.",
    },
    {
      question: "Does checking my rate affect my credit score?",
      answer: "No, checking your rate on Advance America uses a soft credit inquiry, which doesn't affect your credit score. A hard inquiry only occurs if you decide to proceed with a formal loan application with a lender.",
    },
    {
      question: "What are the interest rates?",
      answer: "Personal loan interest rates through our network typically range from 5.99% to 35.99% APR. Your actual rate depends on factors like your credit score, income, debt-to-income ratio, and the loan amount and term you choose.",
    },
    {
      question: "Are there any fees?",
      answer: "Fee structures vary by lender. Some lenders charge origination fees (typically 1-8% of the loan amount), while others have no fees at all. All fees will be clearly disclosed before you finalize your loan.",
    },
    {
      question: "Can I pay off my loan early?",
      answer: "Most lenders in our network don't charge prepayment penalties, meaning you can pay off your loan early without extra fees. This can save you money on interest. Check your loan terms to confirm.",
    },
    {
      question: "What can I use a personal loan for?",
      answer: "Personal loans can be used for almost any legal purpose, including debt consolidation, home improvements, medical expenses, wedding costs, moving expenses, emergency funds, or major purchases.",
    },
    {
      question: "How do I apply?",
      answer: "Simply fill out our online form with your basic information, desired loan amount, and purpose. We'll show you personalized offers from multiple lenders. Choose the best option, complete the lender's application, and get funded.",
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
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-muted-foreground">
                Find answers to common questions about personal loans and the Advance America process.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-lg font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our support team is here to help you with any questions you may have.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  Contact Us
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
