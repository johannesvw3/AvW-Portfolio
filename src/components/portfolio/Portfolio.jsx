import React from 'react'
import './portfolio.css'

import YoutubeEmbed from "./YoutubeEmbed";

const data= [
  {
    id: 1,
    title: "Film TV & Music Demo",
    subtitle: "Film",
    embedID: "A0OXva0qwkU",
    youtube: "https://www.youtube.com/watch?v=A0OXva0qwkU&list=PLoaKEoTKuIG3h7PByCpl1WhWdmrEfj8OK&t=1s",
    channel: "https://www.youtube.com/@MrAdrianvw"
  },
  {
    id: 2,
    title: "1 Jeep 4g Plus",
    subtitle: "Commercial",
    embedID: "kztP12DXjgk",
    youtube: "https://www.youtube.com/watch?v=kztP12DXjgk&list=PLoaKEoTKuIG2-mFaEVjBhBfSeZekBVQEZ&t=2s",
    channel: "https://www.youtube.com/@MrAdrianvw"
  },
  {
    id: 3,
    title: "Westworld",
    subtitle: "Commercial",
    embedID: "MJJAJeNCmmk",
    youtube: "https://www.youtube.com/watch?v=MJJAJeNCmmk",
    channel: "https://www.youtube.com/@MrAdrianvw"
  },
  {
    id: 4,
    title: '"Líderes" Maltin Polar',
    subtitle: "Commercial",
    embedID: "1S0pxZI9Dm0",
    youtube: "https://www.youtube.com/watch?v=1S0pxZI9Dm0",
    channel: "https://www.youtube.com/@MrAdrianvw"
  },
  {
    id: 5,
    title: "2 CocaCola Razones",
    subtitle: "Commercial",
    embedID: "_4MRMnA2Goc",
    youtube: "https://www.youtube.com/watch?v=_4MRMnA2Goc",
    channel: "https://www.youtube.com/@MrAdrianvw"
  },
  {
    id: 6,
    title: "Diablitos Jingle",
    subtitle: "Commercial",
    embedID: "kaFVuVSSN2A",
    youtube: "https://www.youtube.com/watch?v=kaFVuVSSN2A",
    channel: "https://www.youtube.com/@MrAdrianvw"
  },
]


const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, youtube, title, embedID, subtitle, channel}) => {
            return (
              <article key={id} className='portfolio_item'>
                <h5>{subtitle}</h5>
                <YoutubeEmbed className="embed_video" embedId={embedID} />
            <h3>{title}</h3>
            <div className="portfolio_item-cta">
              <a href={youtube} className='btn btn-primary' target='_blank'>Youtube Video</a>
              <a href={channel} className='btn btn' target='_blank'>Youtube Channel</a>
            </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default portfolio