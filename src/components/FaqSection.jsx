import { faq } from '../data/content'
import { HiMiniChatBubbleOvalLeftEllipsis, HiMiniMinusSmall, HiMiniPlusSmall } from 'react-icons/hi2'

function renderAnswer(answer) {
  if (typeof answer === 'string') {
    return answer
  }

  if (Array.isArray(answer)) {
    return answer.map((part, idx) => {
      if (part.text) {
        return <span key={idx}>{part.text}</span>
      }
      if (part.channel) {
        return (
          <span key={idx} className="inline-flex items-center gap-0.5 rounded-md bg-blue-500/20 px-2 py-0.5 text-blue-400 font-mono text-sm">
            {part.channel}
          </span>
        )
      }
      return null
    })
  }

  return answer
}

function FaqSection() {
  return (
    <section id="faq" className="reveal mt-10 md:mt-12">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="section-kicker">よくある質問</span>
          <h2 className="section-title mt-3 font-display text-3xl theme-text sm:text-4xl md:text-5xl">FAQ</h2>
        </div>
      </div>

      <div className="faq-shell mt-5 grid gap-4 sm:mt-6">
        {faq.map((item, index) => (
          <details key={item.q} className="faq-card panel-reveal group faq-panel p-5 sm:p-6">
            <summary className="faq-summary flex cursor-pointer list-none items-start justify-between gap-4 text-left">
              <span className="flex min-w-0 items-start gap-3">
                <span className="faq-index">0{index + 1}</span>
                <span className="faq-icon-wrap"><HiMiniChatBubbleOvalLeftEllipsis /></span>
                <span className="faq-question pt-1 text-sm font-semibold sm:text-base">{item.q}</span>
              </span>
              <span className="faq-toggle mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                <HiMiniPlusSmall className="faq-plus text-xl" />
                <HiMiniMinusSmall className="faq-minus absolute text-xl" />
              </span>
            </summary>

            <div className="faq-answer-wrap mt-4 pl-0 sm:pl-11">
              <p className="faq-answer text-sm">{renderAnswer(item.a)}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}

export default FaqSection
