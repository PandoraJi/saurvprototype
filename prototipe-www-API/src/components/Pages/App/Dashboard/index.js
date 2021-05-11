import React from 'react'
import { Link } from 'gatsby'
import { AppContent } from '@layout'

import DotsIcon from '@assets/vectors/dots.svg';
import ReferralsIcon from '@assets/vectors/referrals.svg';
import NewswireIcon from '@assets/vectors/newswire.svg';
import TwitterIcon from '@assets/vectors/twitter.svg';
import DashboardCards from '@app/Newswire/components/Cards';
import DashboardAlerts from '@app/JobsAlerts/components/List';

const Dashboard = (props) => {
  return (

    <AppContent {...props}>

      <div className="flex flex-col lg:flex-row justify-between mb-8">
        <div>
        <h1 className="text-lg">Welcome back, !</h1>
        <span className="text-sm text-gray-lighter font-medium">Last login date: October 19, 2020 - 3:52 ET</span>
        </div>

        <button className="bg-red h-12 px-9 rounded mt-4 lg:mt-0">
          <Link rel="preload" crossorigin="anonymous" to="/submit-story">
            Submit a Story
          </Link>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">

        <div className="md:col-span-2 lg:col-span-4">
            <div className="bg-gray-darker rounded p-0  border border-blue" style={{
              overflow: "scroll",
              height: "calc(100vh - 300px)",
              minHeight: '280px'
            }}>

              <div className="flex justify-between mb-2 sticky bg-gray-darker top-0 px-5 pt-5 pb-2">
                <h3>Latest Alerts</h3>
                <button>
                  <DotsIcon />
                </button>
              </div>

              <DashboardAlerts />

            </div>
        </div>

        <div className="md:col-span-2 lg:col-span-2 flex flex-col">
          <div className="bg-gray-darker rounded p-5 flex-1  border border-blue">
            <div className="flex justify-between">

                <h3>Recent Tweets</h3>
                <button>
                  <TwitterIcon />
                </button>
            </div>
            <DashboardCards/>
          </div>

          <div className="bg-gray-darker rounded p-5 mt-8 border border-blue">
            <Link rel="preload" crossorigin="anonymous" to="/referrals" >
            <div className="h-12 flex justify-between content-start">
                <div className="flex flex-col justify-between">
                    <h3>Referrals</h3>
                    <span className="text-blue text-sm"><Link rel="preload" crossorigin="anonymous" to="/referrals">Send out new invites!</Link></span>
                </div>
                <span className="float-right "><ReferralsIcon /></span>
            </div>
            </Link>
          </div>

        </div>



      </div>


    </AppContent>

  )
}

export default Dashboard
