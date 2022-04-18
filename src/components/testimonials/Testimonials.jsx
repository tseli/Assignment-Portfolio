import React from 'react'
import './testimonials.css'
import AVR1 from '../../assets/avatar1.jpg'
import AVR2 from '../../assets/avatar2.jpg'
import AVR3 from '../../assets/avatar3.jpg'
import AVR4 from '../../assets/avatar4.jpg'

//import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data=[
  {
    avatar: AVR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, Explicabo ratione exercitationem in iste debitis laborum id ut facere accusantium quia perspiciatis hic recusandae vel, voluptas maxime? Beatae aliquam voluptas sunt!'
  },
  {
    avatar: AVR2,
    name: 'Shatta Wale',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur corrupti ducimus possimus doloribus assumenda nemo aut sit suscipit distinctio repellat deleniti rerum, dicta reiciendis saepe sed mollitia excepturi, cumque molestias?'
  },
  {
    avatar: AVR3,
    name: 'Kwame Despite',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, sit, a nemo iste architecto fugit dolores sed, ipsam quaerat est aliquam? Suscipit possimus nobis officiis fugiat est amet accusantium dicta.'
  },
  {
    avatar: AVR4,
    name: 'Nana Ama McBrown',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum sunt vel quo odio non aut tenetur omnis? Officiis eos facere, officia reprehenderit earum, totam quia, commodi laudantium modi a incidunt?'
  },

]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

    <Swiper className="container testimonials__container"
      
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
      
        {
          data.map(({avatar,name,review},index) =>{
          return(
          <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} />
            </div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}</small>
          </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials