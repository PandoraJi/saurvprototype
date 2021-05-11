import React from 'react'
import { Link } from 'gatsby'
import { AppContent } from '@layout'

const NewsWireDetail = (props) => {
  return (
    <AppContent {...props}>
      <div className="flex flex-row justify-between mb-8">
        <div className="flex-1">
          <h1 className="text-lg">Production company with network mandate</h1>
          <span className="text-sm text-gray-lighter"></span>
        </div>

        <button className="bg-red h-12 px-9 rounded mt-4 lg:mt-0">
          <Link rel="preload" crossorigin="anonymous" to="/jobs-alerts/job1/reply">
          Reply to Job Alert
          </Link>
        </button>

      </div>

      <article className="bg-gray-darker rounded p-8">
        <div className="text-xs uppercase font-medium mb-4">
          <span className="text-yellow">Alert #105</span> · <time className="text-gray-lighter">Posted on Oct 19, 2020</time>
        </div>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae fermentum nibh. Sed at auctor nulla, id ullamcorper ante. Fusce pellentesque ex in nisi euismod, cursus aliquam magna euismod. In non leo lobortis, facilisis odio semper, convallis augue. Cras eget lacus a ipsum sollicitudin sodales.</p>
        <p>Ut lacus velit, dictum sed lobortis quis, interdum et leo. Sed molestie faucibus erat fermentum viverra. Phasellus fermentum lectus eget dictum porttitor. Nam interdum euismod nisl, bibendum molestie justo scelerisque rutrum. Praesent suscipit nibh nec scelerisque tempor. Curabitur euismod varius turpis vitae vehicula.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae fermentum nibh. Sed at auctor nulla, id ullamcorper ante. Fusce pellentesque ex in nisi euismod, cursus aliquam magna euismod.</p>
      </article>

      <div className="flex justify-between items-center mt-10">
        <Link rel="preload" crossorigin="anonymous" to="/jobs-alerts" >
          <span className="font-semibold text-xs text-blue uppercase tracking-wide">Back to Job Alerts</span>
        </Link>

        <button className="bg-red h-12 px-9 rounded mt-4 lg:mt-0">
          <Link rel="preload" crossorigin="anonymous" to="/jobs-alerts/job1/reply">
          Reply to Job Alert
          </Link>
        </button>
      </div>
    </AppContent>
  )
}

export default NewsWireDetail
