import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BarChart3,
  Bell,
  CreditCard,
  Github,
  LineChart,
  ReceiptText,
  Shield,
  Twitter,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10">
        {/* Navbar */}
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto flex h-14 max-w-screen-2xl items-center space-x-10">
            <Link href="/dashboard" className="flex items-center gap-2">
              <ReceiptText className="h-4 w-4 text-secondary-foreground" />
              <span className="text-base font-bold text-secondary-foreground">
                Bill Pilot
              </span>
            </Link>
            <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
              <Link
                href="#features"
                className="transition-colors hover:text-primary"
              >
                Features
              </Link>
              <Link
                href="#pricing"
                className="transition-colors hover:text-primary"
              >
                Pricing
              </Link>
              <Link
                href="#about"
                className="transition-colors hover:text-primary"
              >
                About
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link
                href="https://github.com/billpilot"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="ghost" size="icon">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
              </Link>
              <Button size="sm">Get Started</Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
          <div className="space-y-4">
            <h1 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
              Take Control of Your
              <br />
              SaaS Spending
            </h1>
            <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              {`Bill Pilot helps you track, optimize, and manage all your software subscriptions in one place. Save time and reduce costs with our intelligent subscription management platform.`}
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="/dashboard">
              <Button size="lg">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button variant="outline" size="lg">
              Book Demo
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="container mx-auto space-y-16 py-24 md:py-32"
        >
          <div className="mx-auto max-w-[58rem] text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
              Everything you need to manage subscriptions
            </h2>
            <p className="mt-4 text-muted-foreground sm:text-lg">
              Powerful features to help you take control of your SaaS spending
              and streamline subscription management.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            {[
              {
                name: "Expense Analytics",
                description:
                  "Get detailed insights into your subscription spending with powerful analytics and visualization tools.",
                icon: BarChart3,
              },
              {
                name: "Smart Renewals",
                description:
                  "Never miss a renewal with automated tracking and intelligent notifications for all your subscriptions.",
                icon: Bell,
              },
              {
                name: "Team Management",
                description:
                  "Efficiently manage access and permissions for your entire team with role-based controls.",
                icon: Users,
              },
              {
                name: "Vendor Management",
                description:
                  "Keep track of all your SaaS vendors, contracts, and billing information in one central location.",
                icon: CreditCard,
              },
              {
                name: "Usage Tracking",
                description:
                  "Monitor and optimize your subscription usage to identify opportunities for cost savings.",
                icon: LineChart,
              },
              {
                name: "Enterprise Security",
                description:
                  "Rest easy with enterprise-grade security features and compliance controls.",
                icon: Shield,
              },
            ].map((feature) => (
              <div
                key={feature.name}
                className="relative overflow-hidden rounded-lg border bg-background p-8"
              >
                <div className="flex items-center gap-4">
                  <feature.icon className="h-8 w-8" />
                  <h3 className="font-bold">{feature.name}</h3>
                </div>
                <p className="mt-2 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t">
          <div className="container mx-auto flex flex-col items-center gap-4 py-24 text-center md:py-32">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
              Ready to optimize your SaaS spending?
            </h2>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Join leading companies who trust Bill Pilot to manage their
              software subscriptions and reduce unnecessary spending.
            </p>
            <Link href="/dashboard">
              <Button size="lg" className="mt-4">
                Get Started Today
              </Button>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t">
          <div className="container mx-auto flex flex-col gap-8 py-8 md:flex-row md:py-12">
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                <h2 className="font-bold">Bill Pilot</h2>
              </div>
              <p className="text-sm text-muted-foreground">
                Intelligent subscription management for modern businesses.
              </p>
            </div>
            <div className="grid flex-1 grid-cols-2 gap-12 sm:grid-cols-3">
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Product</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link
                      href="#features"
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#pricing"
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      Pricing
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Company</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link
                      href="#about"
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Connect</h3>
                <div className="flex space-x-4">
                  <Link
                    href="https://github.com/billpilot"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link
                    href="https://twitter.com/billpilot"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto border-t py-6">
            <p className="text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} Bill Pilot. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
