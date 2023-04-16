import Header from "./header"
import Footer from "./footer"
import React, { ReactNode } from "react"

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
        <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
