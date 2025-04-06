import { useRef, useState } from 'react'
import { AboutFaqWrap } from './style'
import { Plus, X } from '@phosphor-icons/react'
import { IconButton } from '../../ui'
import gsap from 'gsap'
import faqsList from '../../assets/api/about/aboutFaqsList'

function AboutFaq() {
  const iconRefs = useRef([])
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleFAQ = (index) => {
    if (iconRefs.current[index]) {
      gsap.fromTo(
        iconRefs.current[index],
        { rotate: 0 },
        { rotate: 90, duration: 0.4, ease: 'power2.out' }
      )
    }

    setActiveIndex((prev) => (prev === index ? null : index))
  }

  return (
    <AboutFaqWrap className="aboutFaqWrap">
      <div className="aboutFaq-cont">
        <h2>자주 묻는 질문</h2>
        <div className="faqBox-cont">
          {faqsList.map((item, index) => (
            <div className="fqpItem" key={index} ref={iconRefs.current[index]}>
              <div
                className={`fqpItem__question ${
                  activeIndex === index ? 'active' : ''
                }`}
                onClick={() => toggleFAQ(index)}>
                {item.question}
                <div className="fqpItem__icon">
                  <IconButton
                    className="dropDown none"
                    icon={
                      <span
                        ref={(el) => (iconRefs.current[index] = el)}
                        style={{ display: 'inline-block' }}>
                        {activeIndex === index ? (
                          <X size={32} weight="bold" />
                        ) : (
                          <Plus size={32} weight="bold" />
                        )}
                      </span>
                    }
                    text="Arrow"
                  />
                </div>
              </div>
              <div
                className={`fqpItem__answer ${
                  activeIndex === index ? 'show' : ''
                }`}>
                {item.answer.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AboutFaqWrap>
  )
}

export default AboutFaq
