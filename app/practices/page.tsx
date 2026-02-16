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
            "Family Law – Divorce, Child Custody, Child Support and Spousal Support",
            "Estate Planning – Wills, Powers of Attorney, Health Care Powers of Attorney and Trusts",
            "Estate and Trust Administration – Probate to Inheritance Tax Returns",
            "Elder Law & Guardianships",
            "Protection From Abuse (PFA) Orders",
            "Property Settlement and Post-Nuptial Agreements"
        ]
    },
    {
        category: "Business & Corporate",
        items: [
            "Business & Corporate Law – Negotiations, Litigation and Formation",
            "Individual and Estate Income Tax Practice"
        ]
    },
    {
        category: "Real Estate & Property",
        items: [
            "Real Estate Law – Buying, Selling and Closings",
            "Zoning, Subdivision and Land Development in Lansdowne and Vicinity",
            "Landlord/Tenant Actions & Lease Disputes"
        ]
    },
    {
        category: "Criminal Defense & Civil Litigation",
        items: [
            "Criminal Defense – Misdemeanors, Felonies and Summary Offenses",
            "DUI Defense",
            "Juvenile Law Matters",
            "Expungements & Record Sealing",
            "General Litigation & Dispute Resolution",
            "Small Claims Actions",
            "Contract Litigation"
        ]
    }
]

export default function PracticesPage() {
    return (
        <div className="container py-12 md:py-20 px-4 max-w-5xl mx-auto">
            <ScrollReveal className="space-y-6 text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold font-serif tracking-tight text-primary">Practice Areas</h1>

                {/* Hero Banner Image Placeholder */}
                {/* Hero Banner Images - Grid of 3 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
                    {/* Image 1: Family Law */}
                    <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg bg-slate-100 group">
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-200 text-slate-500 p-4 text-center group-hover:bg-slate-300 transition-colors">
                            <span className="text-3xl mb-3">👨‍👩‍👧‍👦</span>
                            <span className="font-serif font-bold text-lg">Family Law</span>
                            <span className="text-xs mt-1 opacity-75">(Place image here)</span>
                        </div>
                        {/* <Image src="/images/family-law.jpg" alt="Family Law" fill className="object-cover" /> */}
                    </div>

                    {/* Image 2: Estate Planning */}
                    <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg bg-slate-100 group">
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-200 text-slate-500 p-4 text-center group-hover:bg-slate-300 transition-colors">
                            <span className="text-3xl mb-3">📜</span>
                            <span className="font-serif font-bold text-lg">Estate Planning</span>
                            <span className="text-xs mt-1 opacity-75">(Place image here)</span>
                        </div>
                        {/* <Image src="/images/estate-planning.jpg" alt="Estate Planning" fill className="object-cover" /> */}
                    </div>

                    {/* Image 3: Criminal Defense / Litigation */}
                    <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg bg-slate-100 group">
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-200 text-slate-500 p-4 text-center group-hover:bg-slate-300 transition-colors">
                            <span className="text-3xl mb-3">⚖️</span>
                            <span className="font-serif font-bold text-lg">Criminal Defense & Litigation</span>
                            <span className="text-xs mt-1 opacity-75">(Place image here)</span>
                        </div>
                        {/* <Image src="/images/criminal-defense.jpg" alt="Criminal Defense" fill className="object-cover" /> */}
                    </div>
                </div>

                <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                    Lansdowne Law Center offers comprehensive legal support across a broad range of practice areas from Contract Litigation, to Family Law, to Estate Planning and Administration, to Criminal Defense and DUI Defense, to Zoning.
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
