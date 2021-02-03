import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Thumbs, Controller } from 'swiper'
import 'swiper/swiper-bundle.css'
import './styles.css'

SwiperCore.use([Navigation, Pagination, Thumbs, Controller])

function Swipers({ members }) {
  const [thumbSwiper, setThumbSwiper] = useState(null)
  const [controlledSwiper, setControlledSwiper] = useState(null)

  const slides = (
    members && members.map(member => {
      const { idolName, idolImg, idolPosition } = member;
      return <SwiperSlide className="idol" key={idolName}><h3>{idolName} ~ <span>{idolPosition}</span></h3><div className="box-img"><img src={idolImg[0]} alt={idolName}/></div>
      </SwiperSlide>
    })
  )

  const thumbs = (
    members && members.map(member => {
      const { idolName, idolImg} = member;
      return <SwiperSlide tag="li" className="idol-thumb" key={idolName}><img src={idolImg[0]} alt={idolName}/>
      </SwiperSlide>
    })
  )
  // this one below contains nickname etc
  const slides2 = (
    members && members.map(member => {
      const { idolName, idolImg, idolPosition } = member;
      return <SwiperSlide className="idol" key={idolName}><h3>{idolName} ~ <span>{idolPosition}</span></h3><div className="box-img"><img src={idolImg[1]} alt={idolName}/></div>
      </SwiperSlide>
    })
  )
  
  return (
    <div className="mains">
      <div className="main">
      <Swiper id="main" thumbs={{ swiper: thumbSwiper }} controller={{ control: controlledSwiper }} tag="section" wrapperTag="ul" navigation pagination spaceBetween={0} slidesPerView={1}>
        { slides }
      </Swiper>
      <Swiper id="controller" onSwiper={setControlledSwiper}>
        { slides2 }
      </Swiper>
      </div>
      <Swiper id="thumbs" onSwiper={setThumbSwiper} spaceBetween={5} slidesPerView={4}>
        {thumbs}
      </Swiper>
    </div>
  );
}

export default Swipers;
