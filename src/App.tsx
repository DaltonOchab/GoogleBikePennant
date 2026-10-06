import { useRef, useState } from 'react'

const STORE = 'https://shop.merch.google/product/google-bike-pennant-ggoegcba200499'
const colors = [{ name: 'Forest', hex: '#263f35' }, { name: 'Clay', hex: '#934c36' }, { name: 'Midnight', hex: '#283b50' }]

function Pennant({ color }: { color: string }) {
  return <svg viewBox="0 0 560 590" role="img" aria-label="Proposed racing bike pennant with a cream road bicycle on a colored pointed banner">
    <defs><filter id="shadow" x="-40%" y="-30%" width="180%" height="180%"><feDropShadow dx="8" dy="18" stdDeviation="15" floodColor="#22392b" floodOpacity=".2" /></filter><pattern id="weave" width="4" height="4" patternUnits="userSpaceOnUse"><path d="M0 0h4M0 0v4" stroke="#fff" strokeOpacity=".08" strokeWidth=".7" /></pattern></defs>
    <path d="M120 95Q280 -20 440 95" fill="none" stroke="#b8a88c" strokeWidth="4" />
    <g filter="url(#shadow)"><path d="M107 93H453V370L280 519 107 370Z" fill={color} /><path d="M107 93H453V370L280 519 107 370Z" fill="url(#weave)" /><path d="M118 107H442V364L280 504 118 364Z" fill="none" stroke="#e7dfc6" strokeOpacity=".45" strokeDasharray="3 4" />
    <path d="M100 94h360" stroke="#c8b694" strokeWidth="12" strokeLinecap="round" />
    <text x="280" y="157" textAnchor="middle" fill="#f4edda" fontFamily="Georgia,serif" fontSize="24" letterSpacing="5">THE GOOD RIDE</text>
    <g fill="none" stroke="#f4edda" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"><circle cx="189" cy="298" r="51"/><circle cx="372" cy="298" r="51"/><path d="M189 298l52-87 48 87H189l38-65h111l-49 65m49-65 34 65m-34-65-10-31h27q20 0 15 17-3 8-14 8M241 211l-9-17m-17 0h35"/><circle cx="289" cy="298" r="10"/><path d="m289 298 16 15h12"/></g>
    <text x="280" y="391" textAnchor="middle" fill="#f4edda" fontFamily="monospace" fontSize="10" letterSpacing="3">TAKE THE LONG WAY HOME</text>
    <g transform="translate(256 427)"><circle r="4" fill="#4285f4"/><circle cx="16" r="4" fill="#ea4335"/><circle cx="32" r="4" fill="#fbbc05"/><circle cx="48" r="4" fill="#34a853"/></g></g>
  </svg>
}

export default function App() {
  const [selected, setSelected] = useState(0)
  const stage = useRef<HTMLDivElement>(null)
  return <>
    <a className="skip" href="#main">Skip to content</a>
    <header><a className="brand" href="#"><span className="brand-mark">⚑</span> the good ride<span className="brand-dot">.</span></a><nav aria-label="Main navigation"><a href="#design">The pennant</a><a href="#story">The idea</a><a href="#details">The details</a></nav><a className="nav-shop" href={STORE} target="_blank" rel="noreferrer">Shop the original <span>↗</span></a></header>
    <main id="main">
      <section className="hero" aria-labelledby="hero-title">
        <div className="product-side"><div className="edition"><span>GOOGLE BIKE PENNANT</span><span>REIMAGINED / 01</span></div>
          <div className="stage" ref={stage} onPointerMove={e => { if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return; const r = e.currentTarget.getBoundingClientRect(); stage.current?.style.setProperty('--turn', `${((e.clientX-r.left)/r.width-.5)*12}deg`); stage.current?.style.setProperty('--tilt', `${-((e.clientY-r.top)/r.height-.5)*8}deg`) }} onPointerLeave={() => { stage.current?.style.setProperty('--turn','0deg'); stage.current?.style.setProperty('--tilt','0deg') }}><div className="pennant"><Pennant color={colors[selected].hex}/></div><span className="side-note">A LITTLE PIECE OF THE RIDE.</span></div>
          <div className="product-controls"><div className="swatches" role="group" aria-label="Preview concept color">{colors.map((c,i)=><button key={c.name} aria-label={`${c.name} concept`} aria-pressed={selected===i} onClick={()=>setSelected(i)} style={{background:c.hex}} />)}<span>{colors[selected].name}</span></div><span className="concept-label">DESIGN CONCEPT</span></div>
        </div>
        <div className="hero-copy"><p className="eyebrow"><span/> FOR THE LOVE OF TWO WHEELS</p><h1>Your ride.<br/>Your story.<br/><em>Fly your colors.</em></h1><p className="lede">The ride doesn’t end when you get home. Give your favorite corner a little cycling soul with a pennant that celebrates life on two wheels.</p><div className="actions"><a className="button primary" href={STORE} target="_blank" rel="noreferrer">Shop the original <span>↗</span></a><a className="button secondary" href="#design">Explore the design <span>↓</span></a></div><p className="purchase-note">Original available at Google Merchandise Store.<br/>Racing-bike artwork shown is a proposed redesign.</p><dl className="stats"><div><dt>THE INSPIRATION</dt><dd>Two wheels</dd></div><div><dt>THE ORIGINAL</dt><dd>100% recycled*</dd></div><div><dt>THE FEELING</dt><dd>More you.</dd></div></dl></div>
      </section>
      <div className="ticker" aria-label="For early starts, scenic detours, coffee stops, and the long way home"><div aria-hidden="true">{[0,1].map(i=><span key={i}>EARLY STARTS <b>✳</b> SCENIC DETOURS <b>✳</b> COFFEE STOPS <b>✳</b> THE LONG WAY HOME <b>✳</b> JUST ONE MORE MILE <b>✳</b> </span>)}</div></div>
      <section className="design-section" id="design"><div><p className="eyebrow">01 / A FRESH PERSPECTIVE</p><h2>Less souvenir.<br/><em>More cycling soul.</em></h2></div><div><p>The Google Bike Pennant sparked the idea. This concept takes it down a different road: a drop-bar racing bike, quieter colors, and a little nod to Google’s familiar four-color palette.</p><p>Choose Forest, Clay, or Midnight above to find your favorite. These are design explorations, not products currently available for purchase.</p><a className="text-link" href="#main">Find your color ↑</a></div></section>
      <section className="story-section" id="story"><p className="eyebrow">02 / THE MILES STAY WITH YOU</p><h2>For the space<br/>between <em>rides.</em></h2><p>The first climb. The coffee halfway. That detour you’d take again. Make room for the things that make you want to get back in the saddle—above your desk, beside your bike, or in your favorite corner.</p><div className="route-art" aria-hidden="true"><span>HOME</span><svg viewBox="0 0 600 100"><path d="M10 75C90-55 120 170 220 60S340 0 390 60 490 105 590 20"/></svg><span>THE NEXT ADVENTURE</span></div></section>
      <section className="details-section" id="details"><div><p className="eyebrow">03 / MEET THE ORIGINAL</p><h2>A small pennant.<br/><em>A good starting point.</em></h2><a className="button primary" href={STORE} target="_blank" rel="noreferrer">View on Google’s store ↗</a></div><div className="details"><details open><summary>What is the original made of?</summary><p>Google lists heavy, durable, 100% post-consumer recycled materials for the original Bike Pennant.</p></details><details><summary>How does it hang?</summary><p>The original includes a ribbon top for easy hanging. It’s a decorative wall pennant to bring cycling into your space.</p></details><details><summary>Can I buy the racing-bike design?</summary><p>Not currently. The artwork and three colors shown here are student design concepts. All shop links lead to the original Google Bike Pennant; check the store for its current appearance, pricing, and availability.</p></details></div></section>
    </main><footer><a className="brand" href="#">the good ride.</a><p>Independent student marketing concept. Not affiliated with Google.<br/>*Material claim applies to the original product. <a href={STORE} target="_blank" rel="noreferrer">Source: Google Merchandise Store ↗</a></p><a href="#main">Back to top ↑</a></footer>
  </>
}
