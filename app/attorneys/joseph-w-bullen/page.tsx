import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export const metadata: Metadata = {
    title: "Joseph W. Bullen, III | Lansdowne Law Center",
    description: "Bio and profile of Joseph W. Bullen, III, Partner at Lansdowne Law Center. Experienced in Real Estate, Business Law, and Estate Planning.",
}

export default function JosephBullenBioPage() {
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
                                <span className="text-6xl font-serif font-bold opacity-20">JWB</span>
                            </div>
                            {/* Uncomment when image is available at public/images/joseph-w-bullen.jpg */}
                            {/* <Image
                                src="/images/joseph-w-bullen.jpg"
                                alt="Joseph W. Bullen, III"
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
                                    <a href="tel:610-623-3445" className="hover:text-primary transition-colors">(610) 623-3445</a>
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
                            Joseph W. Bullen, III
                        </h1>
                        <p className="text-xl text-muted-foreground">Partner</p>
                    </ScrollReveal>

                    <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
                        <ScrollReveal delay={0.2}>
                            <h3 className="text-2xl font-bold font-serif text-foreground mt-8 mb-4">Background</h3>
                            <p>
                                <strong>Joseph W. Bullen, III, Esquire</strong> is an experienced lawyer of more than 40 years. Previously, he also served as Trust Officer, The Bryn Mawr Trust Company, served as Senior Command and Staff in U.S. Army Reserve with Special Operations Command, and is Ret. Colonel, USAR, JAG.
                            </p>
                            <p>
                                Mr. Bullen finds both immediate and long-term solutions for his clients. Representation includes real estate transactions, brokered and sale by owner, zoning and development; representation of Corporate Fiduciaries in operation and sale of small businesses, and of individual Executors and Trustees, including income and estate tax return preparation; General Practitioner, helping individuals and privately held businesses solve legal problems, including those involving substantial litigation; and Significant trial experience, including over 20 homicide defense and capital cases.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.3}>
                            <h3 className="text-2xl font-bold font-serif text-foreground mt-8 mb-4">Bar and Court Admissions</h3>
                            <p>Licensed to Practice in Pennsylvania</p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.4}>
                            <h3 className="text-2xl font-bold font-serif text-foreground mt-8 mb-4">Practice Areas</h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-none pl-0">
                                {[
                                    "Real Estate",
                                    "Business Law",
                                    "Contracts",
                                    "Family Law",
                                    "Estates and Trusts",
                                    "Criminal",
                                    "DUI Defense",
                                    "Motor Vehicle",
                                    "Municipal (Zoning)",
                                    "School and Employment Law"
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
                                <li>Temple University James E. Beasley School of Law, Juris Doctorate</li>
                                <li>Dickinson College, B.A.</li>
                                <li>U.S. Army Command and General Staff School</li>
                            </ul>
                        </ScrollReveal>

                        <ScrollReveal delay={0.6}>
                            <h3 className="text-2xl font-bold font-serif text-foreground mt-8 mb-4">Professional and Civic</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Member of several Delaware County Bar Association Committees in areas of Probate and Family Law</li>
                                <li>Former adjunct Professor, Delaware County Community College, Paralegal</li>
                                <li>Program Instructor of Contracts, Family and Criminal Law</li>
                                <li>Former member Delaware County Community College Paralegal Advisory Board</li>
                                <li>Former Chairman, Delaware County Youth Services, and Drug and Alcohol Commissions; Barrister Guy G. de Furia American Inn of Court</li>
                                <li>Past President, Rotary Club of Newtown Square</li>
                                <li>Former member and Corporate Secretary, Board of Directors, Girl Scouts of Delaware County</li>
                            </ul>
                        </ScrollReveal>
                    </div>

                    <ScrollReveal delay={0.7} className="pt-8 border-t">
                        <Button asChild size="lg">
                            <Link href="/contact">Contact Mr. Bullen</Link>
                        </Button>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    )
}
