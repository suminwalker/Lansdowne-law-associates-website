import { Metadata } from "next"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export const metadata: Metadata = {
    title: "Practice Areas | Lansdowne Law Associates",
    description: "Comprehensive legal services including Family Law, Business Law, Real Estate, Estate Planning, and more.",
}

const practices = [
    {
        category: "Personal & Family Law",
        items: [
            "Family Law – Divorce, Custody, Support",
            "Estate Planning – Wills, Powers of Attorney, Healthcare Directives, Trusts",
            "Estate and Trust Administration (Probate to Tax Returns)",
            "Elder Law",
            "Protection From Abuse (PFA)",
            "Personal Injury"
        ]
    },
    {
        category: "Business & Corporate",
        items: [
            "Business and Corporate Negotiation and Litigation",
            "Individual and Estate Income Tax Practice",
            "Administrative Law, including Employment Disputes",
            "Workers Compensation",
            "Motor Vehicle and Regulatory Practice"
        ]
    },
    {
        category: "Real Estate & Property",
        items: [
            "Real Estate Law",
            "Zoning and Development",
            "Landlord/Tenant Actions"
        ]
    },
    {
        category: "Criminal Defense & Civil",
        items: [
            "Criminal Defenses",
            "DUI Defenses",
            "Juvenile Law Matters",
            "Expungements",
            "Civil Matters"
        ]
    }
]

export default function PracticesPage() {
    return (
        <div className="container py-12 md:py-20 px-4 max-w-5xl mx-auto">
            <ScrollReveal className="space-y-6 text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold font-serif tracking-tight text-primary">Practice Areas</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    We provide comprehensive legal representation in a wide variety of fields.
                </p>
            </ScrollReveal>

            <div className="space-y-16">
                {practices.map((section, idx) => (
                    <ScrollReveal key={idx} delay={idx * 0.1}>
                        <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-8 md:p-10 border border-slate-100 dark:border-slate-800">
                            <h2 className="text-2xl font-bold font-serif mb-8 flex items-center">
                                <span className="bg-primary w-2 h-8 mr-4 rounded-full" />
                                {section.category}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                                {section.items.map((item, itemIdx) => (
                                    <div key={itemIdx} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                        <span className="text-lg leading-relaxed">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>

            <ScrollReveal className="mt-20 text-center">
                <p className="text-muted-foreground mb-6">
                    Don't see your specific issue listed? Contact us to verify if we can assist you.
                </p>
                <Button asChild size="lg">
                    <Link href="/contact">Contact Our Office</Link>
                </Button>
            </ScrollReveal>
        </div>
    )
}
