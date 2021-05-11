import React from 'react'
import SEO from '@components/SEO'

import bgLeadership from '@assets/images/bg-leadership@2x.jpg'
import Marc from '@assets/images/marc@2x.png'
import Joe from '@assets/images/joe@2x.png'
import Chris from '@assets/images/chris@2x.png'

const LeadershipPage = () => {
  return (
    <>
    <SEO title="Leadership Team" />
    <div
        style={{
          //backgroundColor: 'red',
          backgroundImage: `url(${bgLeadership})`,
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
        className="h-96 absolute top-0 left-0 w-full z-0"
      ></div>

      <div className="container mx-auto relative z-10">
        <div className="h-72 pt-5 justify-start flex items-center relative z-10 mx-auto" style={{maxWidth: "940px"}}>
          <h1>Leadership Team</h1>
        </div>

      <div className="flex flex-col md:flex-row mt-16 mb-10 mx-auto" style={{maxWidth: "940px"}}>
        <div className="flex flex-col items-center text-center md:w-1/2 md:mr-8 mb-16 md:mb-0 ">
            <img src={Marc} alt="Marc Gordon" className="h-48 w-48 mb-4 rounded-lg" />
            <h2 className="text-lg">Marc Gordon</h2>
            <h4 className="text-md text-gray-lighter mb-4 font-semibold">Founder</h4>
            <p className="mb-4 md:mb-8">Has been both a n executive and Producer for 15 years at the highest leves of the creative community. Marc is a former HBO executive and Producer at both The Firm and Playground Entertainment. He has overseen, developed and produced numerous film & TV projects including <a href="https://www.imdb.com/title/tt1389137/">We Bought a Zoo</a> for Fox, <a href="https://www.imdb.com/title/tt1319735/?ref_=nv_sr_srsg_0">Royal Pains</a> for USA and <a href="https://www.nbc.com/dracula">Dracula</a> for NBC.</p>
        </div>

        <div className="flex flex-col items-center text-center md:w-1/2 md:ml-8 mb-16 md:mb-0">
            <img src={Joe} alt="Joe" className="h-48 w-48 mb-4 rounded-lg" />
            <h2 className="text-lg">Joe Pappalardo</h2>
            <h4 className="text-md text-gray-lighter mb-4  font-semibold">Founder</h4>
            <p className="mb-4 md:mb-8">Is an internationally recognized and award winning journalist. Joe worked as a senior editor at Popular Mechanics for more than 15 years, with 7 years as senior editor. He is a former associate editor at Smithsonian’s Air & Space magazine, National Defense magazine and served as editor in chief of the Dallas Observer.</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-start p-6 md:p-10 bg-gray-darker mb-10 md:my-10 mx-auto rounded-lg border border-blue" style={{maxWidth: "1050px"}}>
        <aside className="flex-0 mr-5">
          <img src={Chris} alt="Chris Yates" className="w-40 rounded-lg" />
        </aside>
        <div className="md:w-1/4 pt-3">
          <h2 className="text-lg">Chris Yates</h2>
          <h4 className="text-md text-gray-lighter mb-4  font-semibold">Founder</h4>
        </div>
        <div className="md:w-3/4 pt-3">
          <p>Is the current GM of Redbox who is serving as an advisor to the company. Chris has over 15 years of experience in digital etertainment. He has launched and operated OTT video services, interactive gaming products, and digital music services, and has held senior roles with content owners, consumer electronics manufacturers and entertainment brands.</p>
        </div>
      </div>
      
    </div>
    </>
  )
}

export default LeadershipPage
