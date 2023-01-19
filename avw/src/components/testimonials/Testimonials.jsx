import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'


import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Teressa Lisbon',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam eos doloribus voluptatibus fugit nisi voluptatem aliquid sequi eum laborum deserunt. Consectetur harum modi nesciunt aliquam tempore similique totam voluptatum illo.'
  },
  {
    avatar: AVTR2,
    name: 'Patrick Jane',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et reprehenderit eum tempora illo aut, ratione veritatis quod quasi repellendus. Non distinctio reprehenderit commodi iste architecto, aliquam cupiditate corporis in tempore ea quasi laborum veniam.'
  },
  {
    avatar: AVTR3,
    name: 'Kimball Cho',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi laborum deleniti sapiente nam neque et officiis officia harum suscipit dolore, culpa sit adipisci dolor eum quidem aut impedit quisquam ipsam cumque amet veritatis? Porro, nobis provident quaerat iure aperiam sequi.'
  },
  {
    avatar: AVTR4,
    name: 'Grace van Pelt',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos exercitationem esse distinctio cupiditate cum blanditiis error vitae placeat explicabo! Laborum assumenda deleniti placeat earum, quam laboriosam aspernatur possimus vero maiores, incidunt, quos nulla quaerat modi ad tempore cumque quae? Id, et? Officiis aperiam qui assumenda aliquid molestias dolorum eaque.'
  },
]

const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
        <div className="client_avatar">
            <img src={avatar} alt={name} />
          </div>
          <h5 className='client_name'>{name}</h5>
          <small className='client_review'>
            {review}
          </small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default testimonials