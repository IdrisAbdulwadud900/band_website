'use client';

export default function Home() {
  return (
    <main className="bg-black text-white">
      {/* ✅ NAVBAR FIRST */}
      <nav className="flex justify-between items-center px-6 py-4 border-b border-white/10">
        <img src="/logo.png" alt="$BAND logo" className="h-20 w-auto" />
        <div className="flex gap-6 text-sm">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#tokenomics" className="hover:underline">Tokenomics</a>
        </div>
      </nav>

      {/* ✅ HERO SECTION */}
      <section id="home" className="flex flex-col items-center justify-start text-center px-6 pt-32 pb-20 bg-black min-h-fit">
        <div className="w-[250px] h-auto mb-12">
          <img src="/logo.png" alt="$BAND Logo" className="w-full h-full object-contain mx-auto" />
        </div>

        <h2 className="text-5xl md:text-6xl font-extrabold uppercase mb-6 leading-tight">
          Bulls Are Never Dead
        </h2>

        <p className="max-w-3xl text-xl md:text-2xl text-white/80 leading-relaxed mb-6">
          In a world where only the bulls thrive and the fearless charge ahead, this is your invitation to WIN.
          Embrace the unbreakable spirit of the BULL RUN! Welcome to <strong>$BAND</strong> — a testament to strength,
          resilience, and the destruction of the BEARS.
        </p>

        <p className="text-2xl font-semibold text-white">
          This is your invitation to the Bull Market. Will you answer your call?
        </p>
      </section>

      {/* ✅ ABOUT SECTION */}
      <section id="about" className="bg-zinc-900 py-24 text-center px-6">
        <h3 className="text-4xl font-bold uppercase mb-4">What is $BAND?</h3>
        <p className="max-w-2xl mx-auto text-white/80 text-lg leading-relaxed">
          $BAND is more than a token — it's a culture. A symbol of bullish resilience, community strength, and degen
          energy that refuses to die. If you know, you know.
        </p>
      </section>

      {/* ✅ TOKENOMICS SECTION */}
      <section id="tokenomics" className="bg-black py-24 text-center px-6">
        <h3 className="text-4xl font-bold uppercase mb-4">Tokenomics</h3>
        <p className="max-w-2xl mx-auto text-white/80 text-lg leading-relaxed">
          1 Billion Supply • 0% Tax • LP Burned • Renounced.  
          $BAND is made for the degen bulls who lead the charge, never fold, and never fade.
        </p>
      </section>

      {/* ✅ FOOTER */}
      <footer className="text-center py-10 text-white/40 text-sm border-t border-white/10">
        &copy; 2025 $BAND. Bulls are never dead.
      </footer>
    </main>
     );
}