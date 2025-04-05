import React from 'react'
import cardData from '../../../assets/api/aboutCardData'
import { AboutWhyBokjakWrap } from './style'

function AboutWhyBokjakMobile() {
  return (
    <AboutWhyBokjakWrap className="aboutWhyBokjakWrap">
      <div className="aboutWhyBokjak-cont">
        <h2>
          왜 <span className="highlight">BOKJAK</span>이어야 할까요?
        </h2>
        <div className="cardBox-cont">
          {cardData.map((card) => (
            <div className="cardBox" key={card.id}>
              <div className="cardBox-img">
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

export default AboutWhyBokjakMobile
