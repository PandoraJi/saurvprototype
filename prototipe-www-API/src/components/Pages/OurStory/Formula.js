import React  from 'react'
import { Link } from 'gatsby'


import Hat from '@assets/vectors/ourstory/hat.svg';
import Director from '@assets/vectors/ourstory/director.svg';
import Idea from '@assets/vectors/ourstory/idea.svg';

const Formula = () => {
    
return (
    <> 
    <ul className="flex flex-col md:flex-row justify-center">
          <li className="flex flex-col justify-center items-center mb-10 md:mb-0 relative">
            <div
              className="bg-blue rounded-full flex flex-col justify-center items-center"
              style={{ width: '190px', height: '190px' }}
            >
              <Hat />
            </div>
            <h4 className="text-plus2 text-white font-semibold my-4">
            Reporter
            </h4>
            <p className="text-center text-gray-light">
            Has a fundamental understanding of story: how to source them; why it matters; what makes great characters. Access to places that others have not been, and stories yet to be told. Extensive archives both of published and unpublished work. Commands a rolodex and network to call on.
            </p>
          </li>

          <li>
          <div className="mt-20" 
            style={{
              fontFamily: "Inter-Light", 
              fontSize: "80px", 
              color: "#FFFFFF", 
              textAlign: "center", 
              lineHeight: "20px"}}>
              +
            </div>
          </li>

          <li className="flex flex-col justify-center items-center mb-10 md:mb-0">
            <div
              className="bg-blue rounded-full flex flex-col justify-center items-center"
              style={{ width: '190px', height: '190px' }}
            >
              <Director />
            </div>
            <h4 className="text-plus2 text-white font-semibold my-4">
            Producer
            </h4>
            <p className="text-center text-gray-light">
            Sources intelligence from the greater creative community: in touch with the constant evolution of mandates, needs and ambitions at each distribution hub. Access to talent in developing story into a premium package as a project for media consumption. Able to take project and strategically place with the best partners for distribution. 
            </p>
          </li>

          <li>
          <div className="mt-20" 
            style={{
              fontFamily: "Inter-Light", 
              fontSize: "80px", 
              color: "#FFFFFF", 
              textAlign: "center", 
              lineHeight: "20px"}}>
              =
            </div>
          </li>

          <li className="flex flex-col justify-center items-center mb-10 md:mb-0 equal-icon">
            <div
              className="bg-blue rounded-full flex flex-col justify-center items-center"
              style={{ width: '190px', height: '190px' }}
            >
              <Idea />
            </div>
            <h4 className="text-plus2 text-white font-semibold my-4">
            Light Bulb Moment
            </h4>
            <p className="text-center text-gray-light">
            If one journalist could provide so many interesting stories and access points, imagine what a network of journalists could! Let’s command an army of journalists acting as story scouts to aggregate the best IP to both hit distributor mandates, but also source original concepts and ideas they didn’t know they needed until we brought it to them.
            </p>
          </li>

    </ul>
    </>
    )
}

export default Formula