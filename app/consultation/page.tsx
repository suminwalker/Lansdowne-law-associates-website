import { Metadata } from "next"
import { Scale, ShieldCheck, Clock, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export const metadata: Metadata = {
    title: "Free Case Evaluation | Lansdowne Law Center",
    description: "Get a free, confidential case evaluation from Lansdowne Law Center experienced attorneys.",
}

export default function ConsultationPage() {
    const benefits = [
        {
            icon: Scale,
            title: "Decades of Experience",
            description: "Our attorneys have over 50 years of combined legal experience protecting clients' rights.",
        },
        {
            icon: ShieldCheck,
            title: "Confidential & Secure",
            description: "Your information is protected by attorney-client privilege and handled with strict confidentiality.",
        },
        {
            icon: Clock,
            title: "Rapid Response",
            description: "We understand legal matters are urgent. We aim to respond to all inquiries within 24 hours.",
        },
    ]

    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="container py-12 md:py-20 px-4 max-w-6xl mx-auto">
                <ScrollReveal>
                    <div className="space-y-4 text-center mb-16 max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold font-serif tracking-tight text-primary leading-tight">
                            Get Your Free Case Evaluation
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Tell us about your situation. There's no cost to talk, and no obligation.
                            We'll help you understand your rights and options.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                    {/* Form Section */}
                    <div className="lg:col-span-7 order-2 lg:order-1">
                        <ScrollReveal delay={0.1}>
                            <Card className="shadow-lg border-t-4 border-t-primary">
                                <CardContent className="p-8 md:p-10">
                                    <h2 className="text-2xl font-bold font-serif mb-6 flex items-center gap-2">
                                        <span className="bg-primary/10 p-2 rounded-full">
                                            <Scale className="h-6 w-6 text-primary" />
                                        </span>
                                        Case Details
                                    </h2>
                                    <form className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label htmlFor="firstName">First Name</Label>
                                                <Input id="firstName" placeholder="First Name" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="lastName">Last Name</Label>
                                                <Input id="lastName" placeholder="Last Name" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label htmlFor="email">Email Address</Label>
                                                <Input id="email" type="email" placeholder="email@example.com" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="phone">Phone Number</Label>
                                                <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="caseType">Type of Legal Matter</Label>
                                            <Select>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a practice area" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="family">Family Law & Divorce</SelectItem>
                                                    <SelectItem value="criminal">Criminal Defense</SelectItem>
                                                    <SelectItem value="estate">Estate Planning & Probate</SelectItem>
                                                    <SelectItem value="real_estate">Real Estate Law</SelectItem>
                                                    <SelectItem value="business">Business Law</SelectItem>
                                                    <SelectItem value="other">Other Legal Matter</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="message">Brief Description of Your Situation</Label>
                                            <Textarea
                                                id="message"
                                                placeholder="Please do not include sensitive or confidential information in this initial message."
                                                className="min-h-[150px] resize-y"
                                            />
                                        </div>

                                        <Button type="submit" size="lg" className="w-full text-lg py-6 font-semibold shadow-md hover:shadow-xl transition-all">
                                            Request Free Consultation
                                        </Button>
                                        <p className="text-xs text-muted-foreground text-center pt-2">
                                            By submitting this form, you agree to receive communications from our office.
                                            Submission does not establish an attorney-client relationship.
                                        </p>
                                    </form>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    </div>

                    {/* Benefits/Info Section */}
                    <div className="lg:col-span-5 space-y-10 order-1 lg:order-2 top-24 sticky">
                        <ScrollReveal delay={0.2}>
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-2xl font-bold font-serif mb-4">Why Choose Lansdowne Law Center?</h3>
                                    <div className="w-16 h-1 bg-primary rounded-full mb-6"></div>
                                </div>

                                <div className="space-y-1">
                                    {benefits.map((benefit, index) => (
                                        <div key={index} className="flex gap-4 p-4 rounded-xl hover:bg-white transition-colors">
                                            <div className="shrink-0 mt-1">
                                                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                                                    <benefit.icon className="h-6 w-6 text-primary" />
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg mb-1">{benefit.title}</h4>
                                                <p className="text-muted-foreground text-sm leading-relaxed">
                                                    {benefit.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-lg mt-8">
                                    <h4 className="font-bold text-xl mb-3 font-serif">Prefer to call?</h4>
                                    <p className="mb-4 opacity-90">Our team is available Monday through Friday, 9:00 a.m. – 5:00 p.m.</p>
                                    <a href="tel:610-623-3445" className="inline-flex items-center gap-2 text-2xl font-bold hover:underline">
                                        (610) 623-3445
                                    </a>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </div>
    )
}
