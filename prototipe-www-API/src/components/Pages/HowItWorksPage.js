import React from 'react'
import { Link } from 'gatsby'

import SEO from '@components/SEO'

import bgHowItWorks from '@assets/images/bg-how-it-works@2x.jpg'

import ArrowRight from '@assets/vectors/arrow-right-white.svg';
import IconEdit from '@assets/vectors/howitworks/edit.svg'
import IconIpMetric from '@assets/vectors/howitworks/ipmetric.svg'
import IconMonitor from '@assets/vectors/howitworks/monitor.svg'
import IconUpload from '@assets/vectors/howitworks/upload.svg'

const HowItWorks = () => {
  return (
    <>
    <SEO title="How it works" />

    <div
        style={{
          backgroundImage: `url(${bgHowItWorks})`,
          backgroundPosition: "center ",
          backgroundSize: "cover"
        }}
        className="h-96 absolute top-0 left-0 w-full z-0"
      ></div>

    <div className="container mx-auto relative z-10">
        <div className="h-72 pt-5 justify-start flex items-center relative z-10 mx-auto" style={{maxWidth: "940px"}}>
          <h1>How it works</h1>
        </div>

      <div className="flex flex-col  mt-16 mb-10">

        <article className="flex flex-col text-white font-medium">

          <div>
          <p className="text-md">They say ‘content is king’, and with an insatiable appetite from distributors and the public alike, there has never been a better time to create content. In this pursuit of content creation… let’s work together.</p>
          <p className="text-md">Prototipe focuses on non-fiction stories: we always have specific requests which are backed by intelligence from the greater media landscape. As we are in constant communication with the highest levels of the creative community, Prototipe is continually updated with everyone’s immediate needs and their overall mandates. We convert this intel into search requests, which we blast to you in helping us source the idea and to participate in the project.</p>
          <p className="text-md">And… information should flow both ways - so don’t just wait for us to send you the latest intel, we want to hear your unsolicited ideas as well. Find your PAWN STARS business, your DUCK DYNASTY family, or just simply great characters or venues… we want to hear your true crime stories; the next great documentary subject or issue; or the longer form piece that becomes the basis for a great film or scripted TV play. Put on your Producer hat and open your rolodexes and archives - send us your leads, tips and ideas that you think would make great unscripted or scripted TV, film, book, or documentary.</p>
          </div>

          <ul className="flex flex-col md:flex-row justify-center items-start my-10">
            <li className="flex flex-col justify-center items-center mb-10 md:mb-0 relative" style={{maxWidth: "220px"}}>
              <div
                className="bg-blue rounded-full flex flex-col justify-center items-center"
                style={{ width: '190px', height: '190px' }}
              >
                <IconEdit />
              </div>
              <h4 className="text-md text-white font-semibold my-4">
              1. Source a Story
              </h4>
              <p className="text-center text-gray-light">
              Either an original sourced idea/project or sourced in response to a mandate we have alerted you to
              </p>
            </li>

            <li className="mt-20 mx-4" ><ArrowRight /></li>

            <li className="flex flex-col justify-center items-center mb-10 md:mb-0 relative" style={{maxWidth: "220px"}}>
              <div
                className="bg-blue rounded-full flex flex-col justify-center items-center"
                style={{ width: '190px', height: '190px' }}
              >
              <IconUpload />
              </div>
              <h4 className="text-md text-white font-semibold my-4">
              2. Upload it
              </h4>
              <p className="text-center text-gray-light">
              After you are registered and approved, you will have a personalized portal which will allow you to upload your stories to Prototipe
              </p>
            </li>

            <li className="mt-20 mx-4" ><ArrowRight /></li>

            <li className="flex flex-col justify-center items-center mb-10 md:mb-0 relative" style={{maxWidth: "220px"}}>
              <div
                className="bg-blue rounded-full flex flex-col justify-center items-center"
                style={{ width: '190px', height: '190px' }}
              >
                <IconIpMetric />
              </div>
              <h4 className="text-md text-white font-semibold my-4">
              3. We’ll analyze it…
              </h4>
              <p className="text-center text-gray-light">
              Prototipe’s exec team will determine if we want to pursue the project for development
              </p>
            </li>

            <li className="mt-20 mx-4" ><ArrowRight /></li>

            <li className="flex flex-col justify-center items-center mb-10 md:mb-0 relative" style={{maxWidth: "220px"}}>
              <div
                className="bg-blue rounded-full flex flex-col justify-center items-center"
                style={{ width: '190px', height: '190px' }}
              >
               <IconMonitor />
              </div>
              <h4 className="text-md text-white font-semibold my-4">
              4. And… Action!
              </h4>
              <p className="text-center text-gray-light">
              We sell the story, make the project... and you get paid!
              </p>
            </li>


          </ul>

          <p className="text-md">Stories are literally all around us and we can pick up on them if we have our antenna up. With everyone in the creative community looking under the same rocks trying to find the next big thing for media consumption, we get it first because you, the freelance journalist, finds it before its viral or even has a social footprint. This is why Prototipe works… because its powered by YOUR stories.</p>
        </article>


        <div
          className="flex flex-col md:flex-row justify-between items-center py-8 px-8 md:px-16 bg-gray-dark my-5 md:my-10 rounded-lg border border-blue"
        >
          <div>
            <p className="text-base md:text-md font-bold mb-0">
            Prototipe empowers media professionals to pursue their multimedia ambitions.
            </p>
          </div>

          <Link rel="preload" crossorigin="anonymous" to="/register" className="btn bg-red flex-0 mt-8 md:mt-0">
            Register
          </Link>
        </div>

      </div>

    </div>
    </>
  )
}

export default HowItWorks
