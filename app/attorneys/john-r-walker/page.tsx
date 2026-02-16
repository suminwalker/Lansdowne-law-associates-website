import { Metadata } from "next"
// import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export const metadata: Metadata = {
    title: "John R. Walker | Lansdowne Law Center",
    description: "Bio and profile of John R. Walker, Partner at Lansdowne Law Center. Experienced in Municipal Court, Criminal Defense, and Estate Planning.",
}

export default function JohnWalkerBioPage() {
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
                                <span className="text-6xl font-serif font-bold opacity-20">JRW</span>
                            </div>
                            {/* Uncomment when image is available at public/images/john-r-walker.jpg */}
                            {/* <Image
                                src="/images/john-r-walker.jpg"
                                alt="John R. Walker"
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
                            John R. Walker
                        </h1>
                        <p className="text-xl text-muted-foreground">Partner</p>
                    </ScrollReveal>

                    <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
                        <ScrollReveal delay={0.2}>
                            <h3 className="text-2xl font-bold font-serif text-foreground mt-8 mb-4">Background</h3>
                            <p>
                                <strong>John R. Walker, Esquire</strong> was inspired to practice law so that he could help people and protect their rights. He has dedicated his law career to providing his clients with zealous representation, understanding his clients’ needs, and striving to achieve their goals and objectives.
                            </p>
                            <p>
                                Mr. Walker is committed to getting justice for his clients. He does this by utilizing his trial and courtroom skills, developing case strategies and tactics, and employing his drafting skills to prepare motions, pleadings, leases, or estate documents that allow them to achieve their deserved outcomes.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.3}>
                            <h3 className="text-2xl font-bold font-serif text-foreground mt-8 mb-4">Bar and Court Admissions</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Licensed to Practice in Pennsylvania</li>
                                <li>Licensed to Practice in New Jersey</li>
                                <li>Admitted, United States District Court for the Eastern District of Pennsylvania</li>
                            </ul>
                        </ScrollReveal>

                        <ScrollReveal delay={0.4}>
                            <h3 className="text-2xl font-bold font-serif text-foreground mt-8 mb-4">Practice Areas</h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-none pl-0">
                                {[
                                    "Municipal Court Matters",
                                    "District Court Matters",
                                    "Criminal Defense Matters",
                                    "Grand Jury Matters",
                                    "Landlord or Tenant Actions",
                                    "Expungement of Criminal Arrests and Records",
                                    "DUI Defense",
                                    "Protection From Abuse (PFA) Matters",
                                    "Estate Disputes",
                                    "Estate Planning",
                                    "Civil Matters"
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
                                <li>Temple University James E. Beasley School of Law, Juris Doctorate – Dean’s List
                                    <ul className="list-[circle] pl-5 mt-1">
                                        <li>Study Abroad – Temple University Law School’s Rome Campus, Rome, Italy</li>
                                        <li>Study Abroad – University of San Francisco Law School at Trinity College, Dublin, Ireland</li>
                                    </ul>
                                </li>
                                <li>Temple University James E. Beasley School of Law, LL.M. Transnational Law – Faculty Award</li>
                                <li>Temple University James E. Beasley School of Law, Certificate of Advanced Graduate Studies – Tax, Employee Benefits Law</li>
                                <li>Temple University College of Liberal Arts, B.A. in Political Science With Honors</li>
                            </ul>
                        </ScrollReveal>

                        <ScrollReveal delay={0.6}>
                            <h3 className="text-2xl font-bold font-serif text-foreground mt-8 mb-4">Professional and Civic</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>St. Ignatius Nursing and Rehabilitation Center, Member, Board of Trustees, 2019-2023</li>
                                <li>Legal advisor to Front Street Gym, working to create a non-profit program to promote boxing and scholarship opportunities for community youth, 2024 – present</li>
                                <li>Philadelphia Criminal Law-American Inn of Court</li>
                                <li>Nicholas A. Cipriani Family Law-American Inn of Court</li>
                                <li>Pennsylvania Association of Criminal Defense Lawyers</li>
                                <li>Jenkins Law Library</li>
                            </ul>
                        </ScrollReveal>
                    </div>

                    <ScrollReveal delay={0.7} className="pt-8 border-t">
                        <Button asChild size="lg">
                            <Link href="/contact">Contact Mr. Walker</Link>
                        </Button>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    )
}
