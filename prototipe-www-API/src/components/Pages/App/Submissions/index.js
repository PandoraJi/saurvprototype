import React from 'react'
// import { Link } from 'gatsby'

import { AppContent } from '@layout'
import SubmissionsList from './components/List'

const Submissions = (props) => {
  return (
    <AppContent {...props}>
      <div className="flex flex-row justify-between mb-8">
        <div>
          <h1 className="text-lg">Submissions</h1>
          <span className="text-sm text-gray-lighter"></span>
        </div>
        <div></div>
      </div>

      <div
        className="bg-gray-darker rounded p-0  border border-blue"
        style={{
          overflow: 'scroll',
          height: 'calc(100vh - 420px)',
          minHeight: '280px',
        }}
      >
        <SubmissionsList />
      </div>
    </AppContent>
  )
}

export default Submissions