import React from 'react'
import { Link } from 'gatsby'

import SEO from '@components/SEO'

import bgOurStory from '@assets/images/bg-our-story@2x.jpg'

import Formula from '@components/Pages/OurStory/Formula';
import More from '@components/Pages/OurStory/More';
import Banner from '@components/Pages/OurStory/Banner';

const OurStoryPage = () => {
  return (
    <>
      <SEO title="Our Story" />

      <div
        style={{
          backgroundImage: `url(${bgOurStory})`,
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
        className="h-96 absolute top-0 left-0 w-full z-0"
      ></div>

      <div className="container mx-auto relative z-10">
        <div className="h-72 pt-5 justify-start flex items-center relative z-10 mx-auto" style={{maxWidth: "940px"}}>
          <h1>Our Story</h1>
        </div>
        <div className="full-height mt-16 mb-10">

          <p className="text-base md:text-md text-white my-11 font-semibold">
          Prototipe was born out of a chance relationship between a Hollywood based producer and a Dallas based journalist. After reading about his upcoming book, producer Marc Gordon cold-called journalist Joe Pappalardo with interest in adapting his book for media. Those initial conversations led to a greater ambition based around the symbiotic relationship between producer and journalist – and as Marc was getting mandates from his colleagues at the networks and studios, Joe was able to meet much of that demand himself through his network and even his own archives.
          </p>

          <Formula />
          <More />
          <Banner />
        </div>
      </div>
    </>
  )
}

export default OurStoryPage
