import React from 'react'
// import { Link } from 'gatsby'

import { AppContent } from '../../../Layout'
import Cards from './components/Cards'

const Newswire = (props) => {
  return (
    
      <AppContent  {...props}>
      <div className="flex flex-row justify-between mb-8">
        <div>
          <h1 className="text-lg">Prototipe Newswire</h1>
          <span className="text-sm text-gray-lighter"></span>
        </div>
        <div></div>
      </div>

      <div>
      <Cards />
      </div>
      </AppContent>
    
  )
}

export default Newswire