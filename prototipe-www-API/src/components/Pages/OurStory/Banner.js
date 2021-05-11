import React  from 'react'
import { Link } from 'gatsby'

import BkgBox from '@assets/images/our-story-box-bg.jpg'

const Banner = () => {

return (
    <>
    <div
            className="flex flex-col md:flex-row justify-between items-center p-8 md:p-16 bg-gray-dark my-5 md:my-10 rounded-lg border border-blue"
            style={{
              backgroundImage: `url(${BkgBox})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div>
              <p className="text-base md:text-md font-bold mb-0">
                The answer to these questions became Prototipe.
              </p>
              <p className="text-base md:text-md font-bold mb-0">
                Prototipe empowers media professionals to pursue his or her
                multimedia ambitions.
              </p>
            </div>

            <Link  rel="preload" crossorigin="anonymous" to="/register" className="btn bg-red flex-0 mt-8 md:mt-0">
              Register
            </Link>
          </div>
    </>
    )
}

export default Banner
