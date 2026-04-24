"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft } from "lucide-react"

export function LoanForm() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formData, setFormData] = useState({
    loanAmount: "5000",
    loanPurpose: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    homeAddress: "",
    city: "",
    state: "",
    zip: "",
    dobMonth: "",
    dobDay: "",
    dobYear: "",
    ssn: "",
  })

  const totalSteps = 2
  const progress = (step / totalSteps) * 100

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {}
    const amount = parseFloat(formData.loanAmount)
    
    if (!formData.loanAmount) {
      newErrors.loanAmount = "Loan amount is required"
    } else if (isNaN(amount) || amount < 2000 || amount > 10000) {
      newErrors.loanAmount = "Loan amount must be between $2,000 and $10,000"
    }
    
    if (!formData.loanPurpose) {
      newErrors.loanPurpose = "Please select a loan purpose"
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required"
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required"
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    }
    if (!formData.homeAddress.trim()) {
      newErrors.homeAddress = "Home address is required"
    }
    if (!formData.ssn.trim()) {
      newErrors.ssn = "Social Security Number is required"
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (step === 1) {
      if (!validateStep1()) return
      setStep(2)
    } else if (step === 2) {
      if (!validateStep2()) return
      sessionStorage.setItem("loanFormData", JSON.stringify(formData))
      router.push("/select-bank")
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
      setErrors({})
    }
  }

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  const days = Array.from({ length: 31 }, (_, i) => i + 1)
  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i)

  const states = [
    "AL",
    "AK",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "FL",
    "GA",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "OH",
    "OK",
    "OR",
    "PA",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY",
  ]

  return (
    <Card className="w-full max-w-md mx-auto shadow-xl border-0 bg-card overflow-hidden">
      <div className="bg-muted/30 px-6 py-5 space-y-3">
        <h1 className="text-2xl font-bold text-center text-foreground">Personal Loan Application</h1>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>
              Step {step} of {totalSteps}
            </span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-amber-500 transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>

      <CardContent className="p-6 space-y-6">
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground border-l-4 border-emerald-500 pl-3">Loan Details</h3>

            <div className="space-y-2">
              <Label htmlFor="amount">Loan Amount ($2,000 to $10,000) <span className="text-red-500">*</span></Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                <Input
                  id="amount"
                  type="number"
                  placeholder="5,000"
                  min={2000}
                  max={10000}
                  value={formData.loanAmount}
                  onChange={(e) => updateFormData("loanAmount", e.target.value)}
                  className={`pl-7 ${errors.loanAmount ? "border-red-500" : ""}`}
                />
              </div>
              {errors.loanAmount && <p className="text-red-500 text-sm">{errors.loanAmount}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="purpose">Loan Purpose <span className="text-red-500">*</span></Label>
              <Select value={formData.loanPurpose} onValueChange={(value) => updateFormData("loanPurpose", value)}>
                <SelectTrigger className={`w-full ${errors.loanPurpose ? "border-red-500" : ""}`}>
                  <SelectValue placeholder="Select loan purpose" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="debt-consolidation">Debt Consolidation</SelectItem>
                  <SelectItem value="home-improvement">Home Improvement</SelectItem>
                  <SelectItem value="major-purchase">Major Purchase</SelectItem>
                  <SelectItem value="wedding">Wedding</SelectItem>
                  <SelectItem value="vacation">Vacation</SelectItem>
                  <SelectItem value="medical-expenses">Medical Expenses</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.loanPurpose && <p className="text-red-500 text-sm">{errors.loanPurpose}</p>}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-5">
            <h3 className="font-semibold text-foreground border-l-4 border-emerald-500 pl-3">Personal Information</h3>

            {/* First Name / Last Name */}
            <div className="grid gap-4 grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">
                  First Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={(e) => updateFormData("firstName", e.target.value)}
                  className={errors.firstName ? "border-red-500" : ""}
                />
                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">
                  Last Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={(e) => updateFormData("lastName", e.target.value)}
                  className={errors.lastName ? "border-red-500" : ""}
                />
                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
              </div>
            </div>

            {/* Email ID / Phone Number */}
            <div className="grid gap-4 grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email">
                  Email ID <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder=""
                  value={formData.email}
                  onChange={(e) => updateFormData("email", e.target.value)}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">
                  Phone Number <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={formData.phone}
                  onChange={(e) => updateFormData("phone", e.target.value)}
                  className={errors.phone ? "border-red-500" : ""}
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>
            </div>

            {/* Home Address */}
            <div className="space-y-2">
              <Label htmlFor="homeAddress">
                Home Address <span className="text-red-500">*</span>
              </Label>
              <Input
                id="homeAddress"
                placeholder="123 Main Street"
                value={formData.homeAddress}
                onChange={(e) => updateFormData("homeAddress", e.target.value)}
                className={errors.homeAddress ? "border-red-500" : ""}
              />
              {errors.homeAddress && <p className="text-red-500 text-sm">{errors.homeAddress}</p>}
            </div>

            {/* City / State / ZIP */}
            <div className="grid gap-4 grid-cols-3">
              <div className="space-y-2">
                <Input
                  id="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={(e) => updateFormData("city", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Select value={formData.state} onValueChange={(value) => updateFormData("state", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="NY" />
                  </SelectTrigger>
                  <SelectContent>
                    {states.map((state) => (
                      <SelectItem key={state} value={state}>
                        {state}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Input
                  id="zip"
                  placeholder="ZIP"
                  value={formData.zip}
                  onChange={(e) => updateFormData("zip", e.target.value)}
                />
              </div>
            </div>

            {/* Date of Birth */}
            <div className="space-y-2">
              <Label>Date of Birth</Label>
              <div className="grid gap-4 grid-cols-3">
                <div className="space-y-1">
                  <Select value={formData.dobMonth} onValueChange={(value) => updateFormData("dobMonth", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Month" />
                    </SelectTrigger>
                    <SelectContent>
                      {months.map((month, index) => (
                        <SelectItem key={month} value={String(index + 1)}>
                          {month}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <span className="text-xs text-muted-foreground block text-center">Month</span>
                </div>
                <div className="space-y-1">
                  <Select value={formData.dobDay} onValueChange={(value) => updateFormData("dobDay", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Day" />
                    </SelectTrigger>
                    <SelectContent>
                      {days.map((day) => (
                        <SelectItem key={day} value={String(day)}>
                          {day}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <span className="text-xs text-muted-foreground block text-center">Day</span>
                </div>
                <div className="space-y-1">
                  <Select value={formData.dobYear} onValueChange={(value) => updateFormData("dobYear", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent>
                      {years.map((year) => (
                        <SelectItem key={year} value={String(year)}>
                          {year}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <span className="text-xs text-muted-foreground block text-center">Year</span>
                </div>
              </div>
            </div>

            {/* Social Security Number */}
            <div className="space-y-2">
              <Label htmlFor="ssn">
                Social Security Number <span className="text-red-500">*</span>
              </Label>
              <Input
                id="ssn"
                placeholder="XXX-XX-XXXX"
                value={formData.ssn}
                onChange={(e) => updateFormData("ssn", e.target.value)}
                className={errors.ssn ? "border-red-500" : ""}
              />
              {errors.ssn && <p className="text-red-500 text-sm">{errors.ssn}</p>}
            </div>
          </div>
        )}

        <div className="flex gap-3 pt-4">
          {step > 1 && (
            <Button variant="outline" onClick={handleBack} className="bg-transparent border-gray-300 hover:bg-gray-50">
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back
            </Button>
          )}
          <Button
            onClick={handleNext}
            className={`bg-emerald-600 hover:bg-emerald-700 ${step === 1 ? "flex-1" : "flex-1 ml-auto"}`}
          >
            {step === totalSteps ? "Submit Application" : "Next"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
