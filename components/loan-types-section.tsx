import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard, Home, Car, Wallet } from "lucide-react"
import Link from "next/link"

const loanTypes = [
  {
    icon: CreditCard,
    title: "Debt Consolidation",
    description: "Combine multiple debts into one easy monthly payment with a lower rate.",
    href: "#",
  },
  {
    icon: Home,
    title: "Home Improvement",
    description: "Fund your dream renovation project and increase your home's value.",
    href: "#",
  },
  {
    icon: Car,
    title: "Auto Refinancing",
    description: "Lower your monthly car payment with better rates and terms.",
    href: "#",
  },
  {
    icon: Wallet,
    title: "Personal Expenses",
    description: "Cover unexpected expenses, medical bills, or major purchases.",
    href: "#",
  },
]

export function LoanTypesSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Personal Loans for Every Need
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Whether you're consolidating debt, improving your home, or covering unexpected expenses, we have the right
            loan for you.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {loanTypes.map((loan, index) => (
            <Link key={index} href={loan.href} className="group">
              <Card className="h-full transition-all hover:shadow-lg hover:border-emerald-200 bg-card">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                    <loan.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{loan.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{loan.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
