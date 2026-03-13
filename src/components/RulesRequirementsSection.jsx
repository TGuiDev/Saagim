import { HiMiniChatBubbleLeftRight, HiMiniCheckBadge, HiMiniExclamationTriangle, HiMiniShieldCheck, HiMiniSparkles, HiMiniUserGroup } from 'react-icons/hi2'

const communityRules = [
  'Respeite geral no chat: zero toxicidade, discriminação ou treta gratuita.',
  'Sem spam, flood ou divulgação sem autorização da moderação.',
  'Use os canais certos (anime, manga, off-topic, call, etc).',
  'Discussões quentes? Argumenta na boa, sem ataque pessoal.',
  'Conteúdo NSFW não é permitido.',
]

const serverSpaces = [
  {
    icon: HiMiniChatBubbleLeftRight,
    title: 'Chats temáticos',
    text: 'Canais de anime, manga e papo livre para conversar todo dia.',
  },
  {
    icon: HiMiniUserGroup,
    title: 'Calls e watch party',
    text: 'Salas de voz para maratonar episódio, jogar ou só trocar ideia.',
  },
  {
    icon: HiMiniSparkles,
    title: 'Eventos da comunidade',
    text: 'Rankings, desafios, sorteios e momentos especiais para engajar a galera.',
  },
]

function RulesRequirementsSection() {
  return (
    <section id="requisitos" className="reveal mt-10 grid gap-4 md:mt-12 md:gap-6 md:grid-cols-2">
      <div className="speech-bubble-card speech-bubble-card-rules panel-reveal p-5 sm:p-6 md:p-7">
        <div className="flex items-center gap-3 text-[#5a2218]">
          <span className="icon-chip icon-chip-light"><HiMiniShieldCheck /></span>
          <span className="section-kicker text-[#7b3128]!">コミュニティルール</span>
        </div>
        <h2 className="section-title mt-4 font-display text-3xl text-[#2f120d] sm:text-4xl md:text-5xl">Regras da comunidade</h2>
        <ul className="mt-5 space-y-3 text-sm text-[#5e261d]">
          {communityRules.map((item) => (
            <li key={item} className="flex items-start gap-3 rounded-[1.2rem] border border-[#8e3238]/20 bg-white/55 px-4 py-3 shadow-[6px_6px_0_rgba(94,38,29,0.14)]">
              <HiMiniExclamationTriangle className="mt-0.5 shrink-0 text-lg text-[#8e3238]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="manga-card panel-reveal p-5 sm:p-6 md:p-7">
        <div className="flex items-center gap-3">
          <span className="icon-chip"><HiMiniCheckBadge /></span>
          <span className="section-kicker">ここで見つかるもの</span>
        </div>
        <h2 className="section-title mt-4 font-display text-3xl theme-text sm:text-4xl md:text-5xl">O que você encontra aqui</h2>
        <ul className="mt-5 space-y-3 text-sm theme-text-muted">
          {serverSpaces.map(({ icon, title, text }, index) => {
            const IconComponent = icon

            return (
              <li key={title} className="flex items-start gap-3 rounded-[1.3rem] border border-[#f6ddd2]/18 bg-black/20 px-4 py-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-sm font-bold theme-text">
                  <IconComponent />
                </span>
                <span>
                  <strong className="block theme-text">{index + 1}. {title}</strong>
                  <span className="theme-text-muted">{text}</span>
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default RulesRequirementsSection
