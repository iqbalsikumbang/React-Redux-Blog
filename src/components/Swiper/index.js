import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.css'
import './styles.css'

SwiperCore.use([Navigation, Pagination])

function Swipers({ members }) {  
  // const slides = (
  //   <Swiper id="main" tag="section" wrapperTag="ul" navigation pagination spaceBetween={0}>
  //     { members && members.map((member) => {
  //       const { idolName, idolImg, idolPosition } = member;
  //       return <SwiperSlide wrapperTag="li" key={idolName}><h3>{idolName}</h3><img src={idolImg} alt={idolName}/>
  //       <p>{idolPosition}</p></SwiperSlide>
  //     }) }
  //   </Swiper>
  // )

  const [member] = members

  console.log(member);
  
  return (
    <Swiper id="main" tag="section" wrapperTag="ul" navigation pagination spaceBetween={0}>
      <SwiperSlide wrapperTag="li">
        {/* <h3>{data.idolName}</h3><img src={data.idolImg} alt={data.idolName}/>
        <p>{data.idolPosition}</p> */}
      </SwiperSlide>
    </Swiper>    
  );
}

export default Swipers;
