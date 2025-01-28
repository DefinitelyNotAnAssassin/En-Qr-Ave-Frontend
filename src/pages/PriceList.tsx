'use client'

import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Navbar from '@/components/navbar'

export default function PricingPage() {
  const plans = [
    {
      name: "Alaala Basic",
      price: "1,499",
      description: "Perfect for individual memorials",
      features: [
        "1 QR Code Memorial Page",
        "Basic photo storage (up to 100 photos)",
        "Share memories with family",
        "Basic customization options",
        "1 year hosting included"
      ],
      highlighted: false
    },
    {
      name: "Pamilya Package",
      price: "3,999",
      description: "Ideal for family memorials",
      features: [
        "3 QR Code Memorial Pages",
        "Extended photo storage (up to 500 photos)",
        "Video memory sharing",
        "Advanced customization options",
        "Lifetime hosting included",
        "Virtual candle lighting feature"
      ],
      highlighted: true
    },
    {
      name: "Pamana Plus",
      price: "7,499",
      description: "Complete memorial solution",
      features: [
        "10 QR Code Memorial Pages",
        "Unlimited photo storage",
        "HD video sharing",
        "Premium customization options",
        "Lifetime hosting included",
        "Virtual candle lighting feature",
        "Memorial events organization",
        "Priority support"
      ],
      highlighted: false
    }
  ]

  const featureComparison = [
    { feature: "QR Code Memorial Pages", basic: "1", pamilya: "3", pamana: "10" },
    { feature: "Photo Storage", basic: "100 photos", pamilya: "500 photos", pamana: "Unlimited" },
    { feature: "Video Sharing", basic: "—", pamilya: "✓", pamana: "HD Quality" },
    { feature: "Hosting Duration", basic: "1 Year", pamilya: "Lifetime", pamana: "Lifetime" },
    { feature: "Virtual Candle Lighting", basic: "—", pamilya: "✓", pamana: "✓" },
    { feature: "Customization", basic: "Basic", pamilya: "Advanced", pamana: "Premium" },
    { feature: "Support", basic: "Email", pamilya: "Email & Chat", pamana: "Priority 24/7" }
  ]

  return (

    <>
    <Navbar />

    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Preserve Precious Memories Forever</h1>
        <p className="text-xl text-muted-foreground">
          Choose the perfect plan to honor and remember your loved ones
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {plans.map((plan) => (
          <Card 
            key={plan.name} 
            className={`relative ${plan.highlighted ? 'border-primary shadow-lg scale-105' : ''}`}
          >
            {plan.highlighted && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <span className="text-4xl font-bold">₱{plan.price}</span>
                <span className="text-muted-foreground">/one-time</span>
              </div>
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={plan.highlighted ? "default" : "outline"}>
                Choose {plan.name}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Feature Comparison Table */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">Feature Comparison</h2>
        <div className="rounded-lg border bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px]">Feature</TableHead>
                <TableHead>Alaala Basic</TableHead>
                <TableHead>Pamilya Package</TableHead>
                <TableHead>Pamana Plus</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {featureComparison.map((item) => (
                <TableRow key={item.feature}>
                  <TableCell className="font-medium">{item.feature}</TableCell>
                  <TableCell>{item.basic}</TableCell>
                  <TableCell>{item.pamilya}</TableCell>
                  <TableCell>{item.pamana}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4">May Mga Tanong?</h2>
        <p className="text-muted-foreground mb-8">
          Ang aming team ay handang tumulong sa pagpili ng tamang plan para sa iyong pangangailangan
        </p>
        <Button variant="outline" size="lg">
          Makipag-ugnayan sa Support
        </Button>
      </div>
    </div>
    </>
  
  )
}

