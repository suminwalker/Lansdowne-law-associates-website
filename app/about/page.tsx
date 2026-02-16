import { Metadata } from "next"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export const metadata: Metadata = {
    title: "About Our Firm | Lansdowne Law Center",
    description: "Learn about our history and our team of dedicated attorneys serving Lansdowne since 1966.",
}

export default function AboutPage() {
    return (
        <div className="container py-12 md:py-20 px-4 max-w-4xl mx-auto">
            {/* Firm History */}
            <div className="space-y-8 mb-20">
                <ScrollReveal>
                    <h1 className="text-4xl md:text-5xl font-bold font-serif tracking-tight text-center text-primary">
                        About Our Firm
                    </h1>
                </ScrollReveal>
                <div className="prose prose-lg dark:prose-invert mx-auto text-muted-foreground leading-loose">
                    <ScrollReveal delay={0.1}>
                        <p className="text-xl font-medium text-foreground text-center">
                            Lansdowne Law Center has been a cornerstone of the Lansdowne legal community, combining over 100 years of experience serving our clients.
                        </p>
                    </ScrollReveal>
                    <p className="mt-6">
                        We are a fully-staffed general practice firm dedicated to representing individuals, small businesses, proprietorships, corporations, and insurance companies with integrity and professionalism.
                    </p>
                    <p>
                        Our firm is proud to represent the CLC Prepaid Legal Services Plan, covering many large employers such as Verizon, SAP, Kimberly-Clark, and Mercy Health Systems. Additionally, we are on the list of approved lawyers for the Military Officers Association of America.
                    </p>
                </div>
            </div>

            {/* Attorneys */}
            <div className="space-y-12">
                <ScrollReveal>
                    <h2 className="text-3xl font-bold font-serif text-center border-b pb-4">Our Attorneys</h2>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {[
                        "Joseph W. Bullen",
                        "Richard P. Landry",
                        "John R. Walker",
                        "Harry Kleinman"
                    ].map((name, index) => (
                        <ScrollReveal key={name} delay={index * 0.1}>
                            <div className="flex flex-col items-center text-center p-6 bg-slate-50 border rounded-lg h-full">
                                {/* Placeholder Avatar */}
                                <div className="w-32 h-32 bg-slate-200 rounded-full mb-6 flex items-center justify-center text-slate-400 text-3xl font-serif font-bold">
                                    {name.split(" ").map(n => n[0]).join("")}
                                </div>
                                <h3 className="text-xl font-bold font-serif text-primary">{name}</h3>
                                <p className="text-muted-foreground mt-2">Partner</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </div>
    )
}
