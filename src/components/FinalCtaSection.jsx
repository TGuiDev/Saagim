import Marquee from 'react-fast-marquee'
import { HiMiniArrowUpRight, HiMiniSparkles, HiMiniStar } from 'react-icons/hi2'

// const ctaMarks = ['ux', 'identidade', 'impacto', 'presenca', 'vibe', 'discord energy']

function FinalCtaSection() {
  return (
    <section id="cta-final" className="reveal mt-12 md:mt-14">
      <div className="cta-stage relative overflow-hidden rounded-4xl border border-[#f6ddd2]/20 px-5 py-6 sm:px-7 sm:py-8 md:px-10 md:py-10">
        <div className="section-grid-dots opacity-35" aria-hidden="true" />
        <div className="cta-slashes" aria-hidden="true" />

        <div className="relative z-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <span className="section-kicker">サーバーに入る</span>
            <h2 className="section-title theme-text mt-3 font-display text-4xl leading-[0.9] sm:text-5xl md:text-6xl">SAAGIM TWO</h2>
            <p className="theme-text-muted mt-4 max-w-2xl text-sm sm:text-base">
              Agora que você já conhece um pouco do que te espera, que tal dar o próximo passo e se juntar a nós? Clique no botão abaixo para entrar na nossa guilda no Discord e começar a viver a experiência SAAGIm TWO. Estamos ansiosos para te receber e compartilhar momentos incríveis juntos!
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://discord.gg/saagimtwo" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold sm:px-7">
                ENTRAR NO DISCORD
                <HiMiniArrowUpRight className="text-lg" />
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="speech-bubble-card speech-bubble-card-note panel-reveal p-5 sm:p-6">
              <div className="flex items-center gap-3 text-[#5a2218]">
                {/* <span className="icon-chip icon-chip-light"><HiMiniStar /></span> */}
                <img className="h-10 w-10 rounded-full" src="https://cdn.discordapp.com/avatars/968288190584717423/d2f1be2c8b9b0f57923835ff9c5c1614.webp?size=1024" alt="" />
                <span className="section-kicker text-xl! text-[#7b3128]!">Gui.Dev</span>
              </div>
              <p className="mt-4 text-sm text-[#5e261d] sm:text-base">
                Por que você idicaria o Saagim para alguém?
              </p>
            </div>
            <div className="speech-bubble-card speech-bubble-card-note panel-reveal p-5 sm:p-6">
              <div className="flex items-center gap-3 text-[#5a2218]">
                {/* <span className="icon-chip icon-chip-light"></span> */}
                <img className="h-10 w-10 rounded-full" src="https://cdn.discordapp.com/avatars/1076928114246025256/d7935f75339513ffdb8307d2a8eefa7d.png?size=256" alt="" />
                <span className="section-kicker text-xl! text-[#7b3128]!">spiderzxss</span>
              </div>
              <p className="mt-4 text-sm text-[#5e261d] sm:text-base">
                Pq ele tem eu
              </p>
            </div>

            {/* <div className="manga-card panel-reveal overflow-hidden p-0">
              <Marquee autoFill speed={26} gradient={false} pauseOnHover className="py-4">
                {ctaMarks.map((item) => (
                  <span key={item} className="ticker-chip">/{item}/</span>
                ))}
              </Marquee>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCtaSection
