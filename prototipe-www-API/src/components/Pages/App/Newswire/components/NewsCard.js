import React from 'react'
import { Link } from 'gatsby'
import ImgNews from '@assets/images/news.png'


const Card = (props) => {
  return (
    <li className="cursor rounded-lg border border-blue overflow-hidden" style={{width:'auto',height:'auto'}}>
      <img src={ImgNews} className="object-cover w-full h-40" />
      <div className="bg-gray-darker p-6 pt-5 ">
      <h4 className="text-base text-blue font-semibold mb-0">{props.title}</h4>
      <time className="block text-xs text-gray-light uppercase font-medium mb-2">{props.time}</time>
      <p className="text-sm text-white font-medium">{props.text}</p>
      </div>
    </li>
  )
}

export default Card
