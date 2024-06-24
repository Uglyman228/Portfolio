import React from 'react'
import { Header } from './Header'
import { Foooter } from './Foooter'

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Foooter />
        </div>
    )
}
export default Layout
