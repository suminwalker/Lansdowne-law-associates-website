import Link from "next/link"
import { Menu, Scale } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet"

export function Header() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Firm", href: "/about" },
    { name: "Practice Areas", href: "/practices" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between mx-auto max-w-7xl">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2 group">
            <Scale className="h-8 w-8 text-primary shrink-0" />
            <div className="flex flex-col">
              <span className="text-xl font-bold font-serif tracking-tight text-primary leading-tight">
                Lansdowne Law Associates
              </span>
              <span className="text-xs font-medium text-muted-foreground leading-tight">
                (610) 623-3445
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
          <Button asChild>
            <Link href="/contact">Free Consultation</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="!w-screen h-screen border-none p-0" showCloseButton={false}>
            <div className="flex justify-end p-6">
              <SheetClose className="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none">
                <Menu className="size-6 text-primary" />
                <span className="sr-only">Close</span>
              </SheetClose>
            </div>
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col mt-4 px-12">
              {navItems.map((item) => (
                <SheetClose asChild key={item.href}>
                  <Link
                    href={item.href}
                    className="text-2xl font-medium py-8 border-b border-slate-100 hover:text-primary transition-colors flex items-center justify-between"
                  >
                    {item.name}
                  </Link>
                </SheetClose>
              ))}
              <div className="pt-16">
                <SheetClose asChild>
                  <Button asChild className="w-full py-10 text-xl rounded-xl shadow-lg">
                    <Link href="/contact">Free Consultation</Link>
                  </Button>
                </SheetClose>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
