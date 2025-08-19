export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6">
          <nav className="flex h-16 items-center justify-between">
            <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
              <span className="text-xl">Kismet Tarot</span>
            </a>
            <div className="hidden sm:flex items-center gap-8">
              <a href="#features" className="hover:opacity-80">Features</a>
              <a href="#readings" className="hover:opacity-80">Readings</a>
              <a href="#faq" className="hover:opacity-80">FAQ</a>
            </div>
            <div className="flex items-center gap-3">
              <a href="#book" className="rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90">
                Book a Reading
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(60%_60%_at_50%_30%,black,transparent)]">
          <div className="absolute -inset-[20%] bg-[conic-gradient(at_50%_50%,_#6d28d9_0deg,_#22d3ee_120deg,_#f472b6_240deg,_#6d28d9_360deg)] opacity-20" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-xs text-foreground/80">
                <span>🔮</span>
                Personalized Tarot Guidance
              </p>
              <h1 className="text-balance text-4xl font-bold leading-tight sm:text-5xl">
                Find clarity in the cards
              </h1>
              <p className="mt-4 text-pretty text-base text-foreground/80 sm:text-lg">
                Insightful, compassionate tarot readings to illuminate your next steps in love, career, and life.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href="#book" className="rounded-full bg-foreground text-background px-6 py-3 text-sm font-semibold hover:opacity-90">
                  Book your session
                </a>
                <a href="#features" className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium hover:bg-white/5">
                  See how it works
                </a>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-md">
              <div className="aspect-square rounded-3xl border border-white/10 bg-gradient-to-br from-purple-600/20 to-cyan-400/20 p-8 shadow-[0_0_60px_-15px_rgba(109,40,217,0.5)]">
                <div className="flex h-full w-full items-center justify-center text-[80px] sm:text-[100px]">
                  🃏
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">What you can expect</h2>
          <p className="mt-3 text-foreground/80">
            A grounded, supportive experience designed to give you clarity and confidence.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-2xl">🌙</div>
            <h3 className="mt-3 text-lg font-semibold">Intuitive Guidance</h3>
            <p className="mt-2 text-sm text-foreground/80">Receive insight that blends tarot wisdom with practical next steps.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-2xl">🧭</div>
            <h3 className="mt-3 text-lg font-semibold">Clarity & Direction</h3>
            <p className="mt-2 text-sm text-foreground/80">Cut through uncertainty and focus on what truly matters right now.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-2xl">⏱️</div>
            <h3 className="mt-3 text-lg font-semibold">Flexible Sessions</h3>
            <p className="mt-2 text-sm text-foreground/80">Choose from mini, standard, or deep-dive readings to fit your needs.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-2xl">💬</div>
            <h3 className="mt-3 text-lg font-semibold">Safe Space</h3>
            <p className="mt-2 text-sm text-foreground/80">Judgment-free guidance with compassion, confidentiality, and care.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-2xl">✨</div>
            <h3 className="mt-3 text-lg font-semibold">Actionable Insights</h3>
            <p className="mt-2 text-sm text-foreground/80">Leave with clear takeaways and supportive perspectives.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-2xl">📅</div>
            <h3 className="mt-3 text-lg font-semibold">Easy Booking</h3>
            <p className="mt-2 text-sm text-foreground/80">Book online at a time that works for you—virtual or in person.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="book" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-purple-600/20 to-cyan-400/20 p-8 sm:p-10">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-2xl font-semibold sm:text-3xl">Ready to explore your path?</h3>
            <p className="mt-3 text-foreground/80">Schedule your tarot reading and step forward with clarity and confidence.</p>
            <div className="mt-6 flex justify-center">
              <a href="mailto:hello@example.com?subject=Tarot%20Reading%20Request" className="rounded-full bg-foreground text-background px-6 py-3 text-sm font-semibold hover:opacity-90">
                Book via Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-foreground/70">© {new Date().getFullYear()} Kismet Tarot. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="hover:opacity-80">Terms</a>
              <a href="#" className="hover:opacity-80">Privacy</a>
              <a href="mailto:hello@example.com" className="hover:opacity-80">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
