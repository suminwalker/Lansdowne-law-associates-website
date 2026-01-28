import Link from "next/link"
import { ArrowRight, Scale, Shield, Users, Building, Gavel, FileText, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-slate-900">
      {/* Hero Section */}
      <section className="relative bg-slate-900 py-24 md:py-32 overflow-hidden min-h-[70vh] flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
          style={{
            backgroundImage: "url('/images/hero-justice.png')",
            filter: "brightness(0.55) contrast(1.1)"
          }}
        />
        {/* Supplemental Overlay for Content Focus */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-slate-950/50 z-[1]" />

        <div className="container relative z-10 text-center text-white space-y-8 max-w-4xl mx-auto px-4 drop-shadow-lg">
          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-bold font-serif tracking-tight leading-tight [text-shadow:_0_2px_4px_rgba(0,0,0,0.8)]">
              A Full-Service Pennsylvania Law Firm
            </h1>
          </ScrollReveal>
          <p className="text-lg md:text-xl text-slate-100 max-w-2xl mx-auto leading-relaxed font-medium [text-shadow:_0_1px_2px_rgba(0,0,0,0.8)]">
            Serving individuals, small businesses, and corporations in Lansdowne and beyond since 1966.
          </p>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button asChild size="lg" className="text-lg px-8 py-6 h-auto tracking-wide font-semibold shadow-xl">
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 h-auto tracking-wide bg-black/20 text-white border-white/40 hover:bg-white hover:text-slate-900 shadow-xl backdrop-blur-sm">
                <Link href="/practices">View Practice Areas</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Intro/Trust Signals */}
      <section className="py-20 bg-white">
        <div className="container px-4 max-w-5xl mx-auto">
          <ScrollReveal className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-bold font-serif text-foreground">Why Choose Lansdowne Law Associates?</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </ScrollReveal>

          <p className="text-muted-foreground max-w-2xl mx-auto text-center">
            Lansdowne Law Associates is a fully-staffed law office located in Lansdowne since 1966. The firm is a general practice firm representing individuals and small businesses, proprietorships, corporations, and insurance companies.
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto pt-2 text-center mb-16">
            We represent the CLC Prepaid Legal Services Plan covering employers like Verizon and SAP, and are approved lawyers for the Military Officers Association of America.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg bg-slate-50 border border-slate-100 h-full">
                <div className="p-3 bg-white rounded-full shadow-sm border border-slate-100">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold font-serif">Decades of Experience</h3>
                <p className="text-sm text-muted-foreground">
                  Established in 1966, providing over 50 years of trusted legal counsel to the community.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg bg-slate-50 border border-slate-100 h-full">
                <div className="p-3 bg-white rounded-full shadow-sm border border-slate-100">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold font-serif">Client-Focused</h3>
                <p className="text-sm text-muted-foreground">
                  We represent individuals, businesses, and corporations with personalized attention.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg bg-slate-50 border border-slate-100 h-full">
                <div className="p-3 bg-white rounded-full shadow-sm border border-slate-100">
                  <Scale className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold font-serif">Full Service</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive legal support across a wide range of practice areas, from Family Law to Estate Planning.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Practice Areas Summary */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container px-4 mx-auto max-w-6xl">
          <ScrollReveal className="flex flex-col items-center mb-12 space-y-4 text-center">
            <h2 className="text-3xl font-bold font-serif tracking-tight">Areas of Practice</h2>
            <p className="text-muted-foreground max-w-2xl">
              Count on us for all of your legal needs.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Family & Personal */}
            <ScrollReveal delay={0.1}>
              <Card className="hover:border-primary/50 transition-colors h-full flex flex-col">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">Family Law</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <p className="text-sm text-muted-foreground mb-4">
                    Divorce, Custody, Support, and PFA actions.
                  </p>
                  <Link href="/practices" className="text-sm font-medium text-primary hover:underline flex items-center">
                    Learn more <ArrowRight className="h-3 w-3 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Estate & Trust */}
            <ScrollReveal delay={0.2}>
              <Card className="hover:border-primary/50 transition-colors h-full flex flex-col">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">Estate Planning</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <p className="text-sm text-muted-foreground mb-4">
                    Wills, Trusts, Powers of Attorney, and Administration.
                  </p>
                  <Link href="/practices" className="text-sm font-medium text-primary hover:underline flex items-center">
                    Learn more <ArrowRight className="h-3 w-3 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Business */}
            <ScrollReveal delay={0.3}>
              <Card className="hover:border-primary/50 transition-colors h-full flex flex-col">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Building className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">Business & Corporate</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <p className="text-sm text-muted-foreground mb-4">
                    Negotiation, Litigation, and Taxation.
                  </p>
                  <Link href="/practices" className="text-sm font-medium text-primary hover:underline flex items-center">
                    Learn more <ArrowRight className="h-3 w-3 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Real Estate */}
            <ScrollReveal delay={0.1}>
              <Card className="hover:border-primary/50 transition-colors h-full flex flex-col">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">Real Estate & Zoning</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <p className="text-sm text-muted-foreground mb-4">
                    Real Estate Law, Landlord/Tenant, Zoning & Development.
                  </p>
                  <Link href="/practices" className="text-sm font-medium text-primary hover:underline flex items-center">
                    Learn more <ArrowRight className="h-3 w-3 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Criminal/Civil */}
            <ScrollReveal delay={0.2}>
              <Card className="hover:border-primary/50 transition-colors h-full flex flex-col">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Gavel className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">Criminal & Civil</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <p className="text-sm text-muted-foreground mb-4">
                    DUI Defense, Expungements, Personal Injury, and general litigation.
                  </p>
                  <Link href="/practices" className="text-sm font-medium text-primary hover:underline flex items-center">
                    Learn more <ArrowRight className="h-3 w-3 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* More */}
            <ScrollReveal delay={0.3}>
              <Card className="bg-primary/5 border-none flex flex-col justify-center items-center text-center h-full">
                <CardContent className="pt-6">
                  <p className="font-serif font-bold text-lg text-primary mb-2">
                    View Full List
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Explore all our legal services.
                  </p>
                  <Button asChild variant="outline" className="border-primary/20 hover:bg-white">
                    <Link href="/practices">All Practice Areas</Link>
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <ScrollReveal className="container px-4 text-center space-y-8 mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold font-serif">Ready to Discuss Your Case?</h2>
          <p className="text-primary-foreground/90 max-w-xl mx-auto text-lg leading-relaxed">
            Contact Lansdowne Law Associates today to schedule a confidential consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
            <Button asChild size="lg" variant="secondary" className="px-8 font-semibold shadow-lg">
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <div className="flex items-center gap-3">
              <span className="text-lg font-serif italic opacity-75">or call</span>
              <a href="tel:610-623-3445" className="text-2xl font-bold hover:underline transition-all">
                (610) 623-3445
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
