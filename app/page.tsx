import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-white text-neutral-900">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm flex flex-col gap-8">
        <h1 className="text-6xl font-bold tracking-tighter text-center">
          Shoe Fit <span className="text-bio-blue">Biomechanics</span>
        </h1>
        <p className="text-center text-xl max-w-2xl text-neutral-600">
          An interactive research documentary on the invisible mechanics of foot discomfort.
        </p>

        <Link
          href="/narrative"
          className="bg-neutral-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-neutral-800 transition-all hover:scale-105"
        >
          Start The Analysis &rarr;
        </Link>
      </div>
    </main>
  );
}
