import React from 'react'
import cardData from '../../../assets/api/about/aboutCardData'
import { AboutWhyBokjakWrap } from './style'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

function AboutWhyBokjakDesktop() {
  const imgRefs = useRef([])

  useEffect(() => {
    imgRefs.current.forEach((img) => {
      gsap.fromTo(
        img,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: img,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })
  }, [])

  return (
    <AboutWhyBokjakWrap className="aboutWhyBokjakWrap">
      <div className="aboutWhyBokjak-cont">
        <h2>
          왜 <span className="highlight">BOKJAK</span>이어야 할까요?
        </h2>
        <div className="cardBox-cont">
          {cardData.map((card, idx) => (
            <div
              className={`cardBox ${
                card.id === 1 || card.id === 3 ? 'reverse' : ''
              }`}
              key={card.id}>
              <div
                className={`cardBox-img ${card.id !== 1 ? 'card-border' : ''}`}
                ref={(el) => (imgRefs.current[idx] = el)}>
                <img src={card.img} alt={card.alt} />
              </div>
              <div className="cardBox-text">
                <div className="text-area">
                  <h3>{card.title}</h3>
                  <p>
                    {card.desc.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AboutWhyBokjakWrap>
  )
}

export default AboutWhyBokjakDesktop
