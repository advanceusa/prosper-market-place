import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="text-center max-w-md">
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-emerald-100 p-4">
              <CheckCircle className="h-16 w-16 text-emerald-600" />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-foreground mb-4">Application Submitted!</h1>

          <p className="text-muted-foreground mb-8">
            Thank you for your application. Our team will review your information and contact you within 24-48 hours
            regarding your loan approval status.
          </p>

          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-8">
            <p className="text-sm text-emerald-800">
              A confirmation email has been sent to your registered email address with further details.
            </p>
          </div>

          <Link href="/">
            <Button className="bg-emerald-600 hover:bg-emerald-700">Return to Home</Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
