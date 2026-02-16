import Link from "next/link"
import { Scale, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
    return (
        <footer className="w-full border-t bg-slate-50 dark:bg-slate-950">
            <div className="container px-4 md:px-6 py-12 md:py-16 mx-auto max-w-7xl">
                <div className="flex flex-col md:flex-row md:justify-between gap-12 md:gap-8">
                    <div className="space-y-4 md:max-w-xs">
                        <Link href="/" className="flex items-center space-x-2">
                            <Scale className="h-6 w-6 text-primary" />
                            <span className="text-lg font-bold font-serif text-primary">Lansdowne Law Center</span>
                        </Link>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            A fully-staffed Pennsylvania law firm located in Lansdowne since 1966. Representing individuals, small businesses, and corporations.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-sm font-medium font-serif text-primary uppercase tracking-wider">Quick Links</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link href="/about" className="hover:text-primary transition-colors">Our Firm</Link></li>
                            <li><Link href="/practices" className="hover:text-primary transition-colors">Legal Services</Link></li>
                            <li><Link href="/about" className="hover:text-primary transition-colors">Attorneys</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-sm font-medium font-serif text-primary uppercase tracking-wider">Contact</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li className="flex items-start gap-2">
                                <MapPin className="h-4 w-4 shrink-0 mt-1" />
                                <span>55 N. Lansdowne Avenue<br />Lansdowne, PA 19050</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="h-4 w-4 shrink-0" />
                                <span>(610) 623-3445</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4 shrink-0" />
                                <span>info@hbmlawoffice.com</span>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-sm font-medium font-serif text-primary uppercase tracking-wider">Office Hours</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li>Mon – Fri: 9:00 a.m. – 5:00 p.m.</li>
                            <li>Sat – Sun: By Appointment Only</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row text-xs text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Lansdowne Law Center. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="#" className="hover:underline">Privacy Policy</Link>
                        <Link href="#" className="hover:underline">Legal Disclaimer</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
