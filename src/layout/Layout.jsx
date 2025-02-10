import React from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Layout() {
    return (
        <div className="min-h-screen  bg-[#030014] text-white font-sans overflow-hidden">
            <div className=" max-w-[1540px] mx-auto">
                <Header />
                <Outlet />
                <Footer />
            </div>
            <ScrollRestoration />
        </div>
    )
}

export default Layout