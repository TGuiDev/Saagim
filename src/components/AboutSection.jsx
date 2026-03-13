import Marquee from 'react-fast-marquee'
import { HiMiniBolt, HiMiniChatBubbleLeftRight, HiMiniSparkles } from 'react-icons/hi2'

const aboutNotes = [
  {
    icon: HiMiniChatBubbleLeftRight,
    title: 'Chat Ativo',
    text: 'Interacao constante, feedbacks rapidos e ambiente acolhedor para perguntas e colabs.',
  },
  {
    icon: HiMiniBolt,
    title: 'Eventos Semanais',
    text: 'Desafios, workshops e colabs para manter a comunidade engajada e crescendo junta.',
  },
  {
    icon: HiMiniSparkles,
    title: 'Ranking e Visibilidade',
    text: 'Participacao ativa te coloca no ranking, ganhando destaque e reconhecimento na comunidade.',
  },
]

const aboutTicker = [
  'Social',
  'Animes',
  'Mangas',
  'Bate Papo',
  'Calls',
  'Jogos',
  'Amizades',
]

function AboutSection() {
  return (
    <section id="sobre" className="reveal mt-10 md:mt-12">
      <div className="section-shell relative overflow-hidden rounded-4xl border border-[#f6ddd2]/20 px-4 py-5 sm:px-6 md:px-8 md:py-8">
        <div className="section-grid-dots" aria-hidden="true" />
        <div className="slash-burst" aria-hidden="true" />

        <div className="relative z-10 grid gap-5 md:grid-cols-[1.1fr_0.9fr] md:gap-6">
          <div className="speech-bubble-card speech-bubble-card-lore panel-reveal p-5 sm:p-6 md:p-7">
            <span className="section-kicker text-[#7b3128]! font-extrabold">サーバーについて</span>
            <h2 className="section-title mt-3 font-display text-3xl leading-none text-[#2f120d] sm:text-4xl md:text-5xl">Sobre o servidor</h2>
            <p className="mt-4 max-w-xl text-sm text-[#5e261d] sm:text-base">
              Um lar para todos os humanos possíveis, sendo acessível até para pessoas internacionais! Aqui você não encontra apenas mais um servidor na multidão, encontra um lugar que te acolhe e te torna alguém no meio do mundo.
            </p>

            <div className="mt-5 flex flex-wrap gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#5a2218] sm:text-xs">
              <span className="sticker-pill"><HiMiniSparkles /> Ranking </span>
              <span className="sticker-pill"><HiMiniBolt /> Eventos Semanais </span>
              <span className="sticker-pill"><HiMiniChatBubbleLeftRight /> Chat ativo</span>
            </div>
          </div>

          <div className="grid gap-4">
            {aboutNotes.map(({ icon, title, text }, index) => {
              const IconComponent = icon

              return (
                <article key={title} className={`manga-card panel-reveal px-2 py-4 sm:p-5 ${index === 1 ? 'md:translate-x-4' : ''}`}>
                  <div className="flex items-start gap-3">
                    <span className="bg-[#f6ddd2]/20 p-2 rounded-lg"><IconComponent /></span>
                    <div>
                      <h3 className="theme-text text-base font-semibold sm:text-lg">{title}</h3>
                      <p className="theme-text-muted mt-2 text-sm">{text}</p>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>

        <div className="ticker-shell relative z-10 mt-5 sm:mt-6">
          <Marquee autoFill speed={28} gradient={false} pauseOnHover>
            {aboutTicker.map((item) => (
              <span key={item} className="ticker-chip">// {item}</span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
