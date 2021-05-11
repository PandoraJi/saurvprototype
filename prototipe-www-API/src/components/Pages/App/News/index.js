import React from 'react'
import { Link } from 'gatsby'

import { AppContent } from '../../../Layout'

const News = (props) => {
  return (

      <AppContent  {...props}>
        <div className="flex flex-row justify-between mb-8">
          <div>
          <h1 className="text-lg">News</h1>
          </div>

          <button className="bg-red h-12 px-9 rounded flex-0">
            <Link rel="preload" crossorigin="anonymous" to="/submit-story">
              Follow us on Twitter
            </Link>
          </button>
        </div>

        <Link rel="preload" crossorigin="anonymous" to="/dashboard">Home</Link>
      </AppContent>
  )
}

export default News
