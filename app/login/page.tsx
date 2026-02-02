"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, Clock } from "lucide-react"

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/lending-tree-logo.png"
              alt="Advance America"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="outline" size="sm" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 bg-transparent">
                Login
              </Button>
            </Link>
            <Link href="/personal-loans">
              <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                Apply Now
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Account Login</h1>
                <p className="text-gray-600 mt-2">
                  Access your Advance America account to manage your loan
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Username or Email</Label>
                  <Input
                    id="email"
                    type="text"
                    placeholder=""
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder=""
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="h-12"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      checked={formData.rememberMe}
                      onCheckedChange={(checked) =>
                        setFormData({ ...formData, rememberMe: checked as boolean })
                      }
                    />
                    <Label htmlFor="remember" className="text-sm text-gray-600 cursor-pointer">
                      Remember me
                    </Label>
                  </div>
                  <Link href="#" className="text-sm text-emerald-600 hover:text-emerald-700">
                    Forgot password?
                  </Link>
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-emerald-600 hover:bg-emerald-700 text-white font-medium"
                >
                  Sign In
                </Button>

                <p className="text-center text-gray-600">
                  Don't have an account?{" "}
                  <Link href="/personal-loans" className="text-emerald-600 hover:text-emerald-700 font-medium">
                    Apply for a loan
                  </Link>
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Need Help Section */}
          <Card className="mt-6 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Help?</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-600">
                  <Phone className="h-5 w-5 text-emerald-600" />
                  <div>
                    <span className="font-medium text-gray-900">Phone: </span>
                    (813) 302-7598
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail className="h-5 w-5 text-emerald-600" />
                  <div>
                    <span className="font-medium text-gray-900">Email: </span>
                    credoralendingservices@gmail.com
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Clock className="h-5 w-5 text-emerald-600" />
                  <div>
                    <span className="font-medium text-gray-900">Hours: </span>
                    Mon-Fri 8am-11pm ET
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
