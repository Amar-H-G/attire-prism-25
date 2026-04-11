import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Clock, Link2, Mail, MapPin, MessageCircle, Phone, Share2 } from 'lucide-react'

const social = [
  { name: 'Share', href: 'https://instagram.com', Icon: Share2 },
  { name: 'Messages', href: 'https://facebook.com', Icon: MessageCircle },
  { name: 'Profile', href: 'https://x.com', Icon: Link2 },
]

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Contact
          </p>
          <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            We answer every note — usually before your coffee cools
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Fittings, wholesale enquiries, press pulls, or a question about how
            our wool behaves in humidity — use the form or the direct lines below.
            This front-end is static; connect the form to your stack when you are
            ready to go live.
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3">
            <form
              onSubmit={onSubmit}
              className="space-y-5 rounded-2xl border border-white/10 bg-surface-900/50 p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-white"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="mt-2 w-full rounded-xl border border-white/10 bg-surface-950/80 px-4 py-3 text-white outline-none ring-primary/0 transition placeholder:text-muted focus:border-primary/50 focus:ring-2 focus:ring-primary/30"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-white"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="mt-2 w-full rounded-xl border border-white/10 bg-surface-950/80 px-4 py-3 text-white outline-none ring-primary/0 transition placeholder:text-muted focus:border-primary/50 focus:ring-2 focus:ring-primary/30"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-sm font-medium text-white"
                >
                  Topic
                </label>
                <select
                  id="contact-subject"
                  name="subject"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-surface-950/80 px-4 py-3 text-sm text-white outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/30"
                  defaultValue="general"
                >
                  <option value="general">General enquiry</option>
                  <option value="fitting">Studio fitting</option>
                  <option value="order">Order support</option>
                  <option value="press">Press / collaboration</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-white"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  required
                  className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-surface-950/80 px-4 py-3 text-white outline-none ring-primary/0 transition placeholder:text-muted focus:border-primary/50 focus:ring-2 focus:ring-primary/30"
                  placeholder="Tell us what you need — sizes, timelines, references…"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-primary py-3.5 text-base font-semibold text-surface-950 transition hover:bg-primary-dim sm:w-auto sm:px-12"
              >
                Send message
              </button>
              {sent && (
                <p className="text-sm text-primary" role="status">
                  Thank you — this demo does not transmit data; hook the form to
                  your endpoint to go live.
                </p>
              )}
            </form>
          </div>

          <aside className="flex flex-col gap-8 lg:col-span-2">
            <div className="rounded-2xl border border-white/10 bg-surface-850/50 p-6 sm:p-8">
              <h2 className="font-display text-lg font-semibold text-white">
                Flagship studio
              </h2>
              <p className="mt-4 flex gap-3 text-sm leading-relaxed text-muted">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>
                  428 Mercer Street
                  <br />
                  New York, NY 10012
                  <br />
                  United States
                </span>
              </p>
              <p className="mt-4 flex gap-3 text-sm text-muted">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <a
                  href="tel:+12125550187"
                  className="transition hover:text-white"
                >
                  +1 (212) 555-0187
                </a>
              </p>
              <p className="mt-3 flex gap-3 text-sm text-muted">
                <Mail className="h-5 w-5 shrink-0 text-primary" />
                <a
                  href="mailto:hello@attireprism.com"
                  className="transition hover:text-white"
                >
                  hello@attireprism.com
                </a>
              </p>
              <p className="mt-4 flex gap-3 text-sm text-muted">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>
                  Mon–Sat 10am–7pm · Sun 12pm–6pm
                  <br />
                  Fittings by appointment after 5pm on Thursdays.
                </span>
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-surface-850/50 p-6 sm:p-8">
              <h2 className="font-display text-lg font-semibold text-white">
                Social
              </h2>
              <p className="mt-2 text-sm text-muted">
                Daily floor snaps, restock alerts, and the occasional thread on
                why we passed on a fabric.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {social.map((item) => {
                  const IconComp = item.Icon
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-muted transition hover:border-primary/50 hover:text-primary"
                      aria-label={item.name}
                    >
                      <IconComp className="h-5 w-5" strokeWidth={1.75} />
                    </a>
                  )
                })}
              </div>
            </div>

            <Link
              to="/shop"
              className="rounded-2xl border border-dashed border-primary/30 bg-primary/5 p-6 text-center text-sm font-medium text-primary transition hover:border-primary/50 hover:bg-primary/10"
            >
              Prefer to browse first? → Open the shop
            </Link>
          </aside>
        </div>
      </div>
    </section>
  )
}
