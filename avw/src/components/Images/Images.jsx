import React from 'react'
import './Images.css'
import IMG1 from '../../assets/studio.jpeg'
import IMG2 from '../../assets/studio-room1.jpeg'
import IMG3 from '../../assets/studio-entrance.jpeg'
import IMG4 from '../../assets/avw-logo.png'


import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    image: IMG1,
    name: 'Studio',
  },
  {
    image: IMG2,
    name: 'Studio Side',
  },
  {
    image: IMG3,
    name: 'Studio Entrance',
  },
  {
    image: IMG4,
    name: 'AVW Logo'
  }
]

const Images = () => {
  return (


    <section id='images'>
      <h5>Welcome</h5>
      <h2>Meet the Studio</h2>
      <div className="container_image-text">
      <Swiper className="container images_container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({image, name}, index) => {
            return (
              <SwiperSlide key={index} className="image" style={{backgroundImage: `url(${image})`}}>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
      <h5 className='description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed porro deserunt et, adipisci tempore voluptate minima hic, ipsam molestiae, temporibus doloribus eveniet ea dolorum? Possimus est quaerat fugit quasi ad?
      <br></br>
      <br></br>

      Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus possimus, odio culpa id aut modi nihil sint reprehenderit ad eveniet provident maxime optio numquam ea officiis? Eaque, voluptatum. Incidunt, ullam architecto fugiat laboriosam doloremque eligendi aliquid nihil facilis consectetur cumque atque ipsam at magni officia illo temporibus nam earum sit. Molestias animi impedit eveniet vero quod cum deserunt, illo reiciendis.</h5>
      </div>
    </section>
  )
}

export default Images