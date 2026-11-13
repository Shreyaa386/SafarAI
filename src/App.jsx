
import { useState } from "react";
import {
  ArrowRight,
  Sparkles,
  MapPin,
  Menu,
  X,
  CloudSnow,
  Wallet,
  Plane,
  Compass,
  Star,
  ShieldCheck,
  ChevronRight
} from "lucide-react";

const destinations = [
  {
    name: "Manali",
    state: "Himachal Pradesh",
    type: "Mountain Escape",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=900"
  },
  {
    name: "Goa",
    state: "Goa, India",
    type: "Beach Paradise",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900"
  },
  {
    name: "Jaipur",
    state: "Rajasthan",
    type: "Culture & Heritage",
    image:
      "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=900"
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const startPlanning = (e) => {
    e.preventDefault();

    if (!prompt.trim()) return;

    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#202820]">

      {/* Navbar */}
      <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">

        <a href="#" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#243b32] text-white">
            <Compass size={23} />
          </div>

          <span className="text-2xl font-bold tracking-tight">
            Safar<span className="text-[#b78b53]">AI.</span>
          </span>
        </a>

        <div className="hidden items-center gap-9 text-sm font-medium text-gray-600 md:flex">
          <a href="#destinations" className="hover:text-[#b78b53]">
            Explore
          </a>

          <a href="#how-it-works" className="hover:text-[#b78b53]">
            How it works
          </a>

          <a href="#features" className="hover:text-[#b78b53]">
            Why SafarAI
          </a>
        </div>

        <div className="hidden items-center gap-5 md:flex">
          <button className="text-sm font-semibold">
            Sign in
          </button>

          <a
            href="#planner"
            className="rounded-full bg-[#243b32] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#365749]"
          >
            Start planning <ArrowRight className="ml-2 inline" size={15} />
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        {menuOpen && (
          <div className="absolute left-0 top-20 flex w-full flex-col gap-5 bg-white p-6 shadow-lg md:hidden">
            <a href="#destinations" onClick={() => setMenuOpen(false)}>
              Explore
            </a>

            <a href="#how-it-works" onClick={() => setMenuOpen(false)}>
              How it works
            </a>

            <a href="#features" onClick={() => setMenuOpen(false)}>
              Why SafarAI
            </a>

            <a href="#planner" onClick={() => setMenuOpen(false)}>
              Start planning
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="px-5 pb-16 pt-5 lg:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#263a31]">

          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=2000"
            alt="Beautiful mountain landscape"
            className="absolute inset-0 h-full w-full object-cover opacity-55"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#14271f]/95 via-[#14271f]/65 to-transparent" />

          <div className="relative z-10 max-w-3xl px-7 py-24 md:px-16 md:py-32">

            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md">
              <Sparkles size={15} className="text-[#e6c18d]" />
              Your personal AI travel companion
            </div>

            <h1 className="text-5xl font-semibold leading-[1.12] tracking-tight text-white md:text-7xl">
              The world is waiting.

              <span className="mt-2 block text-[#e4bd88]">
                Let's find your place.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/80 md:text-lg">
              Tell us your dream weather, travel dates and budget.
              Let AI discover the perfect destination and plan your journey.
            </p>

            <a
              href="#planner"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#e4bd88] px-7 py-4 font-semibold text-[#263a31] transition hover:bg-white"
            >
              Plan my journey <ArrowRight size={18} />
            </a>

            <div className="mt-12 flex flex-wrap gap-7 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <CloudSnow size={17} /> Weather based
              </span>

              <span className="flex items-center gap-2">
                <Wallet size={17} /> Budget friendly
              </span>

              <span className="flex items-center gap-2">
                <Sparkles size={17} /> AI powered
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* AI Planner */}
      <section
        id="planner"
        className="mx-auto -mt-1 max-w-6xl scroll-mt-8 px-5 pb-24"
      >
        <div className="rounded-3xl border border-[#e9e5dd] bg-white p-7 shadow-xl shadow-gray-200/40 md:p-10">

          <div className="mb-7 text-center">
            <span className="text-xs font-bold uppercase tracking-[3px] text-[#b78b53]">
              Start your journey
            </span>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Where does your heart want to go?
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Describe your dream trip. Our AI will take it from here.
            </p>
          </div>

          <form onSubmit={startPlanning}>
            <div className="rounded-2xl border border-gray-200 bg-[#faf9f6] p-4 focus-within:border-[#b78b53]">

              <textarea
                value={prompt}
                onChange={(e) => {
                  setPrompt(e.target.value);
                  setSubmitted(false);
                }}
                rows={3}
                placeholder="I want to visit a snowy destination in December with a budget of ₹25,000 for two people..."
                className="w-full resize-none bg-transparent text-sm leading-7 outline-none placeholder:text-gray-400"
              />

              <div className="flex items-center justify-between border-t border-gray-200 pt-4">

                <span className="flex items-center gap-2 text-xs text-gray-500">
                  <Sparkles size={15} className="text-[#b78b53]" />
                  Powered by AI
                </span>

                <button
                  type="submit"
                  className="flex items-center gap-2 rounded-full bg-[#243b32] px-6 py-3 text-sm font-semibold text-white hover:bg-[#365749]"
                >
                  Discover places <ArrowRight size={16} />
                </button>

              </div>
            </div>
          </form>

          {submitted && (
            <p className="mt-4 text-center text-sm text-[#365749]">
              Your travel brief is ready. We'll connect the AI recommendation
              engine in the next development phase.
            </p>
          )}

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {[
              "Snowy mountains",
              "Beach vacation",
              "Peaceful getaway",
              "Adventure trip"
            ].map((item) => (
              <button
                key={item}
                onClick={() => {
                  setPrompt(
                    `I want a ${item.toLowerCase()} in India. Suggest destinations according to my budget and travel dates.`
                  );
                  setSubmitted(false);
                }}
                className="rounded-full border border-gray-200 px-4 py-2 text-xs text-gray-600 transition hover:border-[#b78b53] hover:text-[#243b32]"
              >
                + {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section
        id="destinations"
        className="mx-auto max-w-7xl scroll-mt-10 px-6 pb-24 lg:px-10"
      >

        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-[3px] text-[#b78b53]">
              Get inspired
            </span>

            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Explore incredible India
            </h2>

            <p className="mt-3 text-sm text-gray-500">
              A few places to spark your next adventure.
            </p>
          </div>

          <a href="#planner" className="text-sm font-semibold text-[#365749]">
            Find my destination <ArrowRight className="ml-1 inline" size={16} />
          </a>
        </div>

        <div className="grid gap-7 md:grid-cols-3">
          {destinations.map((place) => (
            <div
              key={place.name}
              className="group overflow-hidden rounded-3xl border border-[#eeeae2] bg-white transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={place.image}
                  alt={place.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-[#243b32]">
                  {place.type}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold">
                  {place.name}
                </h3>

                <p className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                  <MapPin size={15} /> {place.state}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5">
                  <span className="text-sm font-medium text-[#365749]">
                    Explore destination
                  </span>

                  <ChevronRight size={20} className="text-[#b78b53]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-[#f0eee7] px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-16 max-w-xl text-center">
            <span className="text-xs font-bold uppercase tracking-[3px] text-[#b78b53]">
              Simple process
            </span>

            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Your journey, three steps away.
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-500">
              From a simple idea to a complete travel plan, SafarAI makes it
              effortless.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                icon: Sparkles,
                number: "01",
                title: "Tell us your dream",
                description:
                  "Share your preferred weather, travel dates, interests and budget through chat or a simple form."
              },
              {
                icon: Compass,
                number: "02",
                title: "Discover your match",
                description:
                  "AI analyses weather, destinations and estimated costs to find places that suit your needs."
              },
              {
                icon: Plane,
                number: "03",
                title: "Plan and travel",
                description:
                  "Explore flights, hotels, food and attractions. Build your itinerary and manage your bookings."
              }
            ].map((step) => (
              <div key={step.number} className="rounded-3xl bg-white p-8">

                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#243b32] text-[#e4bd88]">
                    <step.icon size={25} />
                  </div>

                  <span className="text-4xl font-light text-[#e7e1d6]">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-8 text-xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  {step.description}
                </p>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="mx-auto max-w-7xl px-6 py-24 lg:px-10"
      >
        <div className="grid items-center gap-14 md:grid-cols-2">

          <div>
            <span className="text-xs font-bold uppercase tracking-[3px] text-[#b78b53]">
              Travel smarter
            </span>

            <h2 className="mt-4 text-4xl font-semibold leading-tight">
              More than a destination.
              <span className="text-[#b78b53]">
                {" "}A complete experience.
              </span>
            </h2>

            <p className="mt-5 leading-8 text-gray-500">
              SafarAI brings intelligent recommendations and travel services
              together, helping you spend less time planning and more time
              exploring.
            </p>

            <div className="mt-9 space-y-6">
              {[
                [
                  CloudSnow,
                  "Weather-first discovery",
                  "Find destinations that match the weather you love."
                ],
                [
                  Wallet,
                  "Smart budget planning",
                  "Understand estimated trip expenses before you book."
                ],
                [
                  ShieldCheck,
                  "One travel companion",
                  "Keep your itinerary and travel bookings organized."
                ]
              ].map(([Icon, title, description]) => (
                <div key={title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f0eee7] text-[#365749]">
                    <Icon size={21} />
                  </div>

                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1000"
              alt="Beautiful mountain lake"
              className="h-[500px] w-full rounded-[32px] object-cover"
            />

            <div className="absolute -bottom-6 -left-5 max-w-xs rounded-2xl bg-white p-5 shadow-xl">
              <div className="flex items-center gap-2 text-[#b78b53]">
                <Star size={17} fill="currentColor" />
                <span className="text-xs font-semibold">
                  Travel differently
                </span>
              </div>

              <p className="mt-2 font-semibold">
                Your preferences. Your journey. Your way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#243b32] px-7 py-20 text-center text-white md:px-16">

          <Sparkles className="mx-auto mb-5 text-[#e4bd88]" size={32} />

          <h2 className="text-3xl font-semibold md:text-5xl">
            Your next adventure starts here.
          </h2>

          <p className="mx-auto mt-5 max-w-lg leading-7 text-white/70">
            Tell SafarAI what you love. We'll help you discover where to go
            next.
          </p>

          <a
            href="#planner"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#e4bd88] px-8 py-4 font-semibold text-[#243b32] transition hover:bg-white"
          >
            Plan your trip <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e9e5dd] px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6">

          <div>
            <div className="text-2xl font-bold">
              Safar<span className="text-[#b78b53]">AI.</span>
            </div>

            <p className="mt-2 text-xs text-gray-500">
              Discover more. Travel smarter.
            </p>
          </div>

          <p className="text-xs text-gray-500">
            © 2026 SafarAI. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}

export default App;
