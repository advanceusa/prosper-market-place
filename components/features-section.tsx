import { Shield, Zap, Lock, HeadphonesIcon, CalendarClock, BadgePercent } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "No Hidden Fees",
    description: "No origination fees, no prepayment penalties, and no hidden charges. What you see is what you get.",
  },
  {
    icon: Zap,
    title: "Fast Approval",
    description: "Get approved in minutes and receive funds as soon as the next business day.",
  },
  {
    icon: Lock,
    title: "Secure & Safe",
    description: "Bank-level security and encryption to protect your personal and financial information.",
  },
  {
    icon: HeadphonesIcon,
    title: "Expert Support",
    description: "Our dedicated customer service team is here to help you every step of the way.",
  },
  {
    icon: CalendarClock,
    title: "Flexible Terms",
    description: "Choose repayment terms from 2 to 7 years that fit your budget and lifestyle.",
  },
  {
    icon: BadgePercent,
    title: "Fixed Rates",
    description: "Your rate stays the same for the life of your loan - no surprises or rate increases.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Why Choose Advance America?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We make personal loans simple, transparent, and accessible for everyone.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-border bg-card p-6 transition-all hover:border-emerald-200 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
