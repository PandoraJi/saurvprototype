import React from 'react';
import { Nav, NavLogin, NavUser } from '@nav'
import UserHeaderNav from '@nav/components/UserHeaderNav';
import { Footer, FooterHome,  FooterAppLogin } from '@footer'
import '../../scss/styles.scss'

import BkgVideo from '@assets/videos/bgHD.mp4';
import BkgImgHome from '@assets/images/bg-home.png';
import BkgImgPages from '@assets/images/bg-pages.jpg';

export function Layout({ children, isUserNav, ...props }) {
  return (
    <div>
      <div className="container mx-auto relative z-10">
        <Nav pageName={props.pageName} />
      </div>
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export function LayoutHome({ children, isUserNav, ...props }) {
  return (
    <div>
      <video className="fixed top-0 left-0 w-full h-full object-cover z-0 opacity-50" autoPlay muted loop tabIndex="0">
        <source src={BkgVideo} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
      </video>
      <div className="container mx-auto relative z-10">
        <Nav />
        <main>{children}</main>
      </div>
      <FooterHome />
    </div>
  )
}

export function LayoutLogin({ children }) {
  return (
    <div>
      <video className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-50" autoPlay muted loop tabIndex="0">
        <source src={BkgVideo} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
      </video>
      <div className="container mx-auto relative z-10">
        <NavLogin />
        <main>{children}</main>
        <FooterAppLogin />
      </div>
    </div>
  )
}

export function AppContent({ children, ...props }) {

  return (
    <div className="flex flex-col lg:flex-row layout-app-container">
      <NavUser isOpen={props.sidebar} pageName={props.pageName} />
      <main className="flex-1">
        <UserHeaderNav toggleSidebar={props.handleSidebar} isOpen={props.sidebar} pageName={props.pageName}/>
        {children}
      </main>
    </div>
  )
}
