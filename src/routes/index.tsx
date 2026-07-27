import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone,
  Star,
  Clock,
  Award,
  Sparkles,
  Check,
  Search,
  Layout,
  MapPin,
  Megaphone,
  RefreshCw,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import heroOcean from "@/assets/hero-ocean.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sharkbait Website Design & Marketing | Sites That Bite" },
      {
        name: "description",
        content:
          "Sharkbait builds fast, conversion-focused websites and runs SEO and ads that bring local businesses real leads. Free estimate in 24 hours.",
      },
      { property: "og:title", content: "Sharkbait Website Design & Marketing" },
      {
        property: "og:description",
        content:
          "Websites that convert and marketing that hunts. Free estimate, no obligation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const stats = [
  { value: "180+", label: "5-Star Reviews" },
  { value: "1,200+", label: "Projects Launched" },
  { value: "15+", label: "Years Experience" },
  { value: "24hr", label: "Response Time" },
];

const services = [
  {
    icon: Layout,
    title: "Custom Web Design",
    body: "Fast, mobile-first websites built to turn visitors into paying customers — not just look pretty.",
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    body: "Technical SEO, content, and links that move you onto page one and keep you there.",
  },
  {
    icon: MapPin,
    title: "Local SEO & Maps",
    body: "Own the map pack in your service area with an optimized Google Business Profile.",
  },
  {
    icon: Megaphone,
    title: "Google Ads (PPC)",
    body: "Leads today, not next quarter. Tight campaigns managed by people who watch the numbers.",
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    body: "Turn a dated, slow site into a modern conversion machine — usually in weeks.",
  },
  {
    icon: ShieldCheck,
    title: "Care & Maintenance",
    body: "Updates, backups, security, and same-day edits so your site never goes stale.",
  },
];

const reasons = [
  {
    title: "Work Directly With Us",
    body: "No sales reps, no junior handoffs. You talk to the person building your site.",
  },
  {
    title: "Same-Day Support",
    body: "Need a change? Most requests are handled the same day you send them.",
  },
  {
    title: "Weeks, Not Months",
    body: "Most sites are designed, built, and launched in 2–4 weeks flat.",
  },
  {
    title: "Plain Language",
    body: "No jargon, no confusing proposals, no surprise invoices at the end.",
  },
  {
    title: "You Own Everything",
    body: "Domain, hosting, and files stay in your name. You're never locked in.",
  },
];

const testimonials = [
  {
    quote:
      "Our phone started ringing within a month of launch. Sharkbait rebuilt the whole site and got us ranking for the terms that actually matter.",
    name: "Dana Whitlock",
    role: "Whitlock Roofing",
  },
  {
    quote:
      "They explained everything without the tech talk and shipped faster than the agency we used before quoted for a discovery call.",
    name: "Marcus Reed",
    role: "Reed Family Dental",
  },
  {
    quote:
      "Best money we've spent on marketing. Leads doubled, and edits get handled the same afternoon I ask.",
    name: "Priya Nandan",
    role: "Coastline Legal",
  },
];

function Index() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <div className="bg-deep text-deep-foreground">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-5 py-2 text-xs font-medium sm:text-sm">
          <p className="flex items-center gap-2">
            <Check className="h-4 w-4 text-surf" />
            Trusted since 2010 · 180+ 5-star reviews · Serving businesses nationwide
          </p>
          <a href="tel:+15550142200" className="hidden items-center gap-2 hover:text-surf sm:flex">
            <Phone className="h-4 w-4" /> (555) 014-2200
          </a>
        </div>
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border bg-card/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">
          <a href="/" className="flex items-center gap-2">
            <span className="font-display text-2xl font-extrabold uppercase tracking-tight text-primary">
              Shark<span className="text-accent">bait</span>
            </span>
            <span className="hidden text-[10px] font-semibold uppercase leading-tight tracking-[0.2em] text-muted-foreground sm:block">
              Website Design
              <br />& Marketing
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-semibold lg:flex">
            <a href="#services" className="hover:text-accent">Services</a>
            <a href="#why" className="hover:text-accent">Why Us</a>
            <a href="#process" className="hover:text-accent">Process</a>
            <a href="#reviews" className="hover:text-accent">Reviews</a>
            <a href="tel:+15550142200" className="flex items-center gap-2 hover:text-accent">
              <Phone className="h-4 w-4" /> (555) 014-2200
            </a>
          </nav>
          <a
            href="#estimate"
            className="rounded-md bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-deep"
          >
            Free Estimate
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroOcean}
          alt="Deep ocean water with light rays and a distant shark silhouette"
          width={1920}
          height={1088}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-deep/80" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div className="text-deep-foreground">
            <h1 className="font-display text-5xl font-extrabold uppercase leading-[0.95] sm:text-6xl lg:text-7xl">
              Websites That Hunt
              <br />
              <span className="text-surf">For New Business</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-deep-foreground/85">
              Sharkbait designs sharp, fast websites and runs the SEO and ads behind
              them — so your business shows up first and closes more work.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-lg bg-card/10 px-5 py-4 ring-1 ring-deep-foreground/20">
              <div className="text-3xl font-bold">5.0</div>
              <div>
                <div className="flex gap-0.5 text-surf">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-deep-foreground/80">180+ verified reviews</p>
              </div>
            </div>

            <ul className="mt-8 space-y-2 text-sm font-medium">
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-surf" /> Launched in weeks, not months
              </li>
              <li className="flex items-center gap-3">
                <Award className="h-4 w-4 text-surf" /> Trusted since 2010
              </li>
              <li className="flex items-center gap-3">
                <Sparkles className="h-4 w-4 text-surf" /> 15+ years of experience
              </li>
            </ul>
          </div>

          <div id="estimate" className="rounded-xl bg-card p-7 shadow-2xl">
            <h2 className="text-center font-display text-3xl font-bold text-primary">
              Get Your Free Estimate
            </h2>
            <p className="mt-1 text-center text-sm text-muted-foreground">
              No obligation. We usually reply within 24 hours.
            </p>
            <form
              className="mt-6 space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <input
                required
                placeholder="Full Name *"
                className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-ring/40"
              />
              <input
                required
                type="email"
                placeholder="Email Address *"
                className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-ring/40"
              />
              <input
                required
                type="tel"
                placeholder="Phone Number *"
                className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-ring/40"
              />
              <textarea
                required
                rows={4}
                placeholder="Tell us about your project… *"
                className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-ring/40"
              />
              <button
                type="submit"
                className="w-full rounded-md bg-primary px-5 py-3.5 font-bold text-primary-foreground transition-colors hover:bg-deep"
              >
                {sent ? "Thanks — we'll be in touch!" : "Get My Free Estimate →"}
              </button>
              <p className="text-center text-xs text-muted-foreground">
                No spam. No obligation. Reply typically within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-12 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-4xl font-extrabold lg:text-5xl">{s.value}</div>
              <p className="mt-1 text-sm text-primary-foreground/75">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section id="why" className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">Why Choose Us</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold uppercase leading-tight lg:text-5xl">
              A Small Crew That Bites Above Its Weight
            </h2>
            <p className="mt-5 text-muted-foreground">
              Sharkbait is owner-operated. No account managers, no agency factory, no
              project sitting in a queue for six weeks. You work directly with the
              people designing, building, and marketing your site.
            </p>
            <p className="mt-4 text-muted-foreground">
              That's how we've held a perfect five-star rating across 180+ reviews, and
              why most clients stay with us for years.
            </p>
            <a
              href="#estimate"
              className="mt-7 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-bold text-accent-foreground transition-opacity hover:opacity-90"
            >
              Get Your Free Estimate <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="rounded-lg border border-border bg-card p-5 transition-shadow hover:shadow-lg"
              >
                <h3 className="font-display text-xl font-bold text-primary">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-secondary">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">Our Services</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold uppercase lg:text-5xl">
              Design & Marketing Under One Fin
            </h2>
            <p className="mt-4 text-muted-foreground">
              From custom builds to local SEO and paid ads — everything your business
              needs to get found and get hired.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="group rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="inline-flex rounded-lg bg-accent/15 p-3 text-accent-foreground">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="mx-auto max-w-7xl px-5 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">Our Process</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold uppercase lg:text-5xl">
            Four Steps From Call To Launch
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["01", "Free Estimate", "A quick call about your goals, competitors, and budget."],
            ["02", "Design", "We map the pages and design a site built to convert."],
            ["03", "Build & Optimize", "Development, copy, and on-page SEO wired in from day one."],
            ["04", "Launch & Grow", "We launch, monitor, and keep the leads coming."],
          ].map(([num, title, body]) => (
            <div key={num} className="border-t-4 border-accent bg-card p-6 shadow-sm">
              <div className="font-display text-4xl font-extrabold text-accent">{num}</div>
              <h3 className="mt-2 font-display text-xl font-bold text-primary">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="bg-deep text-deep-foreground">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-surf">Reviews</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold uppercase lg:text-5xl">
              What Clients Say
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-xl bg-card/10 p-7 ring-1 ring-deep-foreground/15">
                <div className="flex gap-0.5 text-surf">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-deep-foreground/90">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-5 text-sm font-bold">
                  {t.name}
                  <span className="block font-normal text-deep-foreground/70">{t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-14 text-accent-foreground md:flex-row">
          <div>
            <h2 className="font-display text-3xl font-extrabold uppercase lg:text-4xl">
              Ready to stop being bait?
            </h2>
            <p className="mt-2 text-accent-foreground/80">
              Get a free, no-obligation estimate — usually back within 24 hours.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="#estimate"
              className="rounded-md bg-primary px-7 py-3.5 font-bold text-primary-foreground hover:bg-deep"
            >
              Get My Free Estimate
            </a>
            <a
              href="tel:+15550142200"
              className="rounded-md border-2 border-accent-foreground/40 px-7 py-3.5 font-bold hover:border-accent-foreground"
            >
              (555) 014-2200
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-10 sm:flex-row">
          <span className="font-display text-2xl font-extrabold uppercase">
            Shark<span className="text-surf">bait</span>
          </span>
          <p className="text-sm text-primary-foreground/70">
            © {new Date().getFullYear()} Sharkbait Website Design & Marketing
          </p>
        </div>
      </footer>
    </div>
  );
}
