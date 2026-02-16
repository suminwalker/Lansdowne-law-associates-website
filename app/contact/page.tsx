import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
    title: "Contact Lansdowne Law Center | Lansdowne & Delaware County Attorneys",
    description: "Contact our Lansdowne, PA law office to schedule a consultation. Serving clients in Lansdowne, Upper Darby, Drexel Hill, and Delaware County. Call (610) 623-3445.",
}

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Lansdowne Law Center",
    "image": "https://lansdownelawcenter.com/images/hero-justice.png",
    "telephone": "+1-610-623-2379",
    "email": "info@hbmlawoffice.com",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "55 N. Lansdowne Ave",
        "addressLocality": "Lansdowne",
        "addressRegion": "PA",
        "postalCode": "19050",
        "addressCountry": "US"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 39.938,
        "longitude": -75.275
    },
    "url": "https://lansdownelawcenter.com/contact",
    "openingHoursSpecification": [
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "09:00",
            "closes": "17:00"
        }
    ],
    "priceRange": "$$",
    "areaServed": ["Lansdowne", "Upper Darby", "Drexel Hill", "Havertown", "Delaware County", "Clifton Heights"]
};

export default function ContactPage() {
    return (
        <div className="container py-12 md:py-20 px-4 max-w-5xl mx-auto">
            <div className="space-y-6 text-center mb-16">
                <h1 className="text-4xl font-bold font-serif tracking-tight text-primary">Contact Us</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    We look forward to hearing from you.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Contact Info */}
                <div className="lg:col-span-1 space-y-8">
                    {/* Office Image / Contact Visual */}
                    <div className="relative aspect-video w-full rounded-lg overflow-hidden shadow-md bg-slate-100 mb-6">

                        <Image
                            src="/images/contact-landline.png"
                            alt="Office landline telephone on desk"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <Card className="border-t-4 border-t-primary shadow-sm">
                        <CardContent className="p-8 space-y-8">
                            <div className="flex items-start gap-4">
                                <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold font-serif text-lg">Office Location</h3>
                                    <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                                        55 N. Lansdowne Avenue<br />
                                        Lansdowne, PA 19050
                                    </p>
                                    <a
                                        href="https://maps.google.com/maps?q=55+N+Lansdowne+Ave,+Lansdowne,+PA+19050"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary text-sm hover:underline mt-2 inline-block"
                                    >
                                        Get Directions
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Phone className="h-6 w-6 text-primary shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold font-serif text-lg">Phone</h3>
                                    <p className="font-medium text-lg mt-1">
                                        <a href="tel:610-623-2379" className="hover:text-primary transition-colors">
                                            (610) 623-2379
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Mail className="h-6 w-6 text-primary shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold font-serif text-lg">Email</h3>
                                    <p className="text-muted-foreground text-sm mt-1">
                                        <a href="mailto:info@hbmlawoffice.com" className="hover:text-primary transition-colors">
                                            info@hbmlawoffice.com
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Clock className="h-6 w-6 text-primary shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold font-serif text-lg">Hours</h3>
                                    <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                                        Mon – Fri: 9:00 a.m. – 5:00 p.m.<br />
                                        Sat – Sun: By Appointment Only
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-2">
                    <Card className="shadow-sm">
                        <CardContent className="p-8 md:p-10">
                            <h3 className="text-2xl font-bold font-serif mb-6">Send us a Message</h3>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="firstName">First Name</Label>
                                        <Input id="firstName" placeholder="John" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="lastName">Last Name</Label>
                                        <Input id="lastName" placeholder="Doe" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" placeholder="john@example.com" />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="phone">Phone (Optional)</Label>
                                    <Input id="phone" type="tel" placeholder="(555) 555-5555" />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea
                                        id="message"
                                        placeholder="How can we help you?"
                                        className="min-h-[150px]"
                                    />
                                </div>

                                <Button type="submit" size="lg" className="w-full md:w-auto px-8">
                                    Send Message
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </div>
    )
}
