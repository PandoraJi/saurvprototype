import React from 'react'
import { Link } from 'gatsby'
import '../../scss/styles.scss'
import MailIcon from '../../assets/vectors/icon-email.svg'
import IPIcon from '../../assets/vectors/icon-ip.svg'

export function FooterHome() {
  return (
    <footer className="container mx-auto mb-10 relative z-30">
        <Link to="/our-story" className="flex flex-row items-center">
            <MailIcon /> <span className="ml-3 text-sm font-semibold">Contact us</span>
        </Link>
    </footer>
  )
}


export function Footer() {
  return (
    <footer className="container mx-auto flex flex-row items-center justify-between mb-10  relative z-30">
      
      <div className="flex flex-row items-center">
        <IPIcon /> <span className="ml-3 text-sm text-gray-light font-regular">© {(new Date().getFullYear())} - Prototipe Media</span>
      </div>
      
      <div className="flex flex-row items-center">
        <Link to="/our-story" className="flex flex-row items-center">
              <MailIcon /> <span className="ml-3 text-sm font-semibold">Contact us</span>
        </Link>
      </div>
    </footer>
  )
}

export function FooterAppLogin() {
  return (
    <footer className="container mx-auto my-20 flex justify-center  relative z-30">
      <Link to="/our-story" className="flex flex-col justify-center items-center">
          <MailIcon /> <span className="text-sm font-semibold">Contact us</span>
      </Link>
    </footer>
  )
}

export function FooterApp() {
    return (
      <footer className="container mx-auto mb-10  relative z-30">
        <Link to="/our-story" className="flex flex-row items-center">
            <MailIcon /> <span className="ml-3 text-sm font-semibold">Contact us</span>
        </Link>
      </footer>
    )
}

