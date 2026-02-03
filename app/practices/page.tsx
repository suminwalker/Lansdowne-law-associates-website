import { Metadata } from "next"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export const metadata: Metadata = {
    title: "Practice Areas | Lansdowne & Delaware County Attorneys",
    description: "Legal services for Delaware County residents: Family Law, Estate Planning, Real Estate, Criminal Defense, and Personal Injury in Lansdowne, PA.",
}

const practices = [
    {
        category: "Personal & Family Law",
        items: [
            "Family Law – Divorce, Child Custody, and Spousal Support in Delaware County",
            "Estate Planning – Wills, Powers of Attorney, Healthcare Directives, and Trusts",
            "Estate and Trust Administration – Probate to Inheritance Tax Returns",
            "Elder Law & Guardianships",
            "Protection From Abuse (PFA) Orders",
            "Personal Injury – Auto Accidents, Slip & Fall, and Negligence Claims"
        ]
    },
    {
        category: "Business & Corporate",
        items: [
            "Business & Corporate Law – Negotiation, Litigation, and Formation",
            "Individual and Estate Income Tax Practice",
            "Administrative Law & Employment Disputes",
            "Workers Compensation Claims",
            "Motor Vehicle and Regulatory Practice"
        ]
    },
    {
        category: "Real Estate & Property",
        items: [
            "Real Estate Law – Buying, Selling, and Closings",
            "Zoning, Subdivision, and Land Development in Lansdowne & Vicinity",
            "Landlord/Tenant Actions & Lease Disputes"
        ]
    },
    {
        category: "Criminal Defense & Civil Litigation",
        items: [
            "Criminal Defense – Misdemeanors & Felonies",
            "DUI Defense in Lansdowne & Delaware County",
            "Juvenile Law Matters",
            "Expungements & Record Sealing",
            "General Civil Litigation & Dispute Resolution"
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
