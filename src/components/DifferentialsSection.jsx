import { diferenciais } from '../data/content'
import { HiMiniChatBubbleLeftEllipsis, HiMiniShieldCheck, HiMiniSparkles, HiMiniUserGroup } from 'react-icons/hi2'

const icons = [
  HiMiniUserGroup,
  HiMiniChatBubbleLeftEllipsis,
  HiMiniSparkles,
  HiMiniShieldCheck,
]

function DifferentialsSection() {
  return (
    <section id="diferenciais" className="reveal mt-10 md:mt-12">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="section-kicker">ディファレンシャル</span>
          <h2 className="section-title mt-3 font-display text-3xl theme-text sm:text-4xl md:text-5xl">Diferenciais</h2>
        </div>
      </div>

      <div className="mt-5 grid gap-4 sm:mt-6 sm:grid-cols-2">
        {diferenciais.map((item, index) => {
          const Icon = icons[index % icons.length]

          return (
            <article
              key={item.title}
              data-variant={index % 4}
              className="manga-card differential-card panel-reveal relative overflow-hidden p-5 sm:p-6"
            >
              <div className="absolute right-4 top-4 rounded-full border border-[#f6ddd2]/30 bg-black/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#f6ddd2]/75">
                0{index + 1}
              </div>
              <div className="flex items-start gap-3 pr-12">
                <span className="icon-chip"><Icon /></span>
                <div>
                  <h3 className="differential-title text-base font-bold theme-text sm:text-lg">{item.title}</h3>
                  <p className="mt-2 max-w-md text-sm theme-text-muted sm:text-base">{item.text}</p>
                </div>
              </div>

              <div className="differential-line mt-5 h-0.5 w-full bg-[linear-gradient(90deg,transparent,rgba(246,221,210,0.75),transparent)]" aria-hidden="true" />
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default DifferentialsSection
