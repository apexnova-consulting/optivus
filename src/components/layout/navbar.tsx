import * as React from "react"
import Link from "next/link"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"

const navigation = [
  { name: "Product", href: "/product" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-sm dark:bg-dark-bg/80">
      <Container>
        <nav className="flex h-16 items-center justify-between" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center space-x-2">
              <ArrowUpRight className="h-8 w-8 text-optivus-blue" />
              <span className="text-2xl font-extrabold tracking-tight">Optivus</span>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-optivus-blue transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/login">Log in</Link>
            </Button>
            <Button asChild>
              <Link href="/contact">Book Your ROI Demo</Link>
            </Button>
          </div>
        </nav>
      </Container>

      {/* Mobile menu */}
      <div
        className={`lg:hidden ${
          mobileMenuOpen ? "fixed inset-0 z-50" : "hidden"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-dark-bg">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center space-x-2">
              <ArrowUpRight className="h-8 w-8 text-optivus-blue" />
              <span className="text-2xl font-extrabold tracking-tight">Optivus</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6 space-y-4">
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/login">Log in</Link>
                </Button>
                <Button className="w-full" asChild>
                  <Link href="/contact">Book Your ROI Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
