import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import LeftSide from '../components/LeftSide';
import RightSide from '../components/RightSide';

const HomeLayout = () => {
    return (
        <div className='bg-[#ece7e7] max-w-7xl mx-auto'>
            <header>
                <Navbar></Navbar>
            </header>

            {/* <section className="hero">
                <Banner></Banner>
            </section> */}

            <main className='max-w-7xl mx-auto grid grid-cols-12 gap-5 mt-10 
                p-4 '>
                <aside className='col-span-2'>
                    <LeftSide></LeftSide>
                </aside>
                <section className="center col-span-8">
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-2'>
                    <RightSide></RightSide>
                </aside>
            </main>

            <footer>
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default HomeLayout;