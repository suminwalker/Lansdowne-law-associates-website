import { Metadata } from "next"
// import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export const metadata: Metadata = {
    title: "Harry Kleinman | Lansdowne Law Center",
    description: "Bio and profile of Harry Kleinman, Senior Associate at Lansdowne Law Center. Experienced in Criminal Defense, Real Estate, and Wills & Estates.",
}

export default function HarryKleinmanBioPage() {
    return (
        <div className="container py-12 md:py-20 px-4 max-w-5xl mx-auto">
            <ScrollReveal>
                <Link href="/about" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8 group">
                    <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Our Attorneys
                </Link>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                {/* Sidebar / Photo */}
                <div className="md:col-span-4 space-y-8">
                    <ScrollReveal delay={0.1}>
                        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg shadow-lg bg-slate-100">
                            {/* Placeholder until real image is added */}
                            <div className="absolute inset-0 flex items-center justify-center bg-slate-200 text-slate-400">
                                <span className="text-6xl font-serif font-bold opacity-20">HK</span>
                            </div>
                            {/* Uncomment when image is available at public/images/harry-kleinman.jpg */}
                            {/* <Image
                                src="/images/harry-kleinman.jpg"
                                alt="Harry Kleinman"
                                fill
                                className="object-cover"
                            /> */}
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2} className="space-y-4">
                        <div className="p-6 bg-slate-50 rounded-lg border border-slate-100">
                            <h3 className="font-serif font-bold text-lg mb-4">Contact</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-sm">
                                    <Phone className="h-4 w-4 text-primary" />
                                    <a href="tel:610-623-2379" className="hover:text-primary transition-colors">(610) 623-2379</a>
                                </li>
                                <li className="flex items-center gap-3 text-sm">
                                    <Mail className="h-4 w-4 text-primary" />
                                    <a href="mailto:info@hbmlawoffice.com" className="hover:text-primary transition-colors">info@hbmlawoffice.com</a>
                                </li>
                            </ul>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Main Content */}
                <div className="md:col-span-8 space-y-8">
                    <ScrollReveal delay={0.1}>
                        <h1 className="text-4xl md:text-5xl font-bold font-serif tracking-tight text-primary mb-2">
                            Harry Kleinman
                        </h1>
                        <p className="text-xl text-muted-foreground">Senior Associate</p>
                    </ScrollReveal>

                    <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
                        <ScrollReveal delay={0.2}>
                            <h3 className="text-2xl font-bold font-serif text-foreground mt-8 mb-4">Background</h3>
                            <p>
                                <strong>Harry Kleinman</strong> is an attorney with over 30 years experience, including over 15 years as a litigator with the Delaware County Public Defender’s Office. He has devoted his legal career to protecting his client’s rights while addressing their goals and needs.
                            </p>
                            <p>
                                Prior to becoming a lawyer, he was Vice President of Professional Health Services, a local business with nationwide clients. His past business experience also includes owning and operating a restaurant that had the capacity to seat 400 people. His knowledge of the law, competence in the courtroom and empathy towards his clients has earned him the respect and admiration of both his colleagues and clients.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.3}>
                            <h3 className="text-2xl font-bold font-serif text-foreground mt-8 mb-4">Bar and Court Admissions</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Licensed to practice in Pennsylvania</li>
                                <li>Admitted to the United States District Court for the Eastern District of Pennsylvania</li>
                            </ul>
                        </ScrollReveal>

                        <ScrollReveal delay={0.4}>
                            <h3 className="text-2xl font-bold font-serif text-foreground mt-8 mb-4">Practice Areas</h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-none pl-0">
                                {[
                                    "Wills Estates and Trusts",
                                    "Real Estate Transactions",
                                    "Deeds",
                                    "Landlord and Tenant Actions",
                                    "Criminal Defense Cases",
                                    "Motor Vehicle Issues",
                                    "DUI Defense",
                                    "Expungements of Criminal Arrests and Records",
                                    "Protection From Abuse"
                                ].map((area) => (
                                    <li key={area} className="flex items-center gap-2">
                                        <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                                        {area}
                                    </li>
                                ))}
                            </ul>
                        </ScrollReveal>

                        <ScrollReveal delay={0.5}>
                            <h3 className="text-2xl font-bold font-serif text-foreground mt-8 mb-4">Education</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Widener University School of Law – Juris Doctorate</li>
                                <li>Moe Levine Honor Society in Trial Advocacy</li>
                                <li>Villanova University BS in Accounting</li>
                            </ul>
                        </ScrollReveal>

                        <ScrollReveal delay={0.6}>
                            <h3 className="text-2xl font-bold font-serif text-foreground mt-8 mb-4">Professional and Civic</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Boy Scouts of America
                                    <ul className="list-[circle] pl-5 mt-1">
                                        <li>Former District Chairman – Cradle of Liberty, Conestoga District</li>
                                        <li>Former Troop 512 Committee Chairman</li>
                                        <li>Troop 512 Assistant Scoutmaster</li>
                                    </ul>
                                </li>
                            </ul>
                        </ScrollReveal>
                    </div>

                    <ScrollReveal delay={0.7} className="pt-8 border-t">
                        <Button asChild size="lg">
                            <Link href="/contact">Contact Mr. Kleinman</Link>
                        </Button>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    )
}
