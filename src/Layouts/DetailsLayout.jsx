import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet, useLoaderData, useParams } from 'react-router';
import ProtectedPlant from '../components/protected/ProtectedPlant';

const DetailsLayout = () => {
    const plantdata = useLoaderData();
    const {id} = useParams();
    const [data, setData] = useState([])

    useEffect ((()=>{
         setData(plantdata.find(item => item.plantId == id));
    }),[])
    
    // console.log(data)

    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <ProtectedPlant data={data}></ProtectedPlant>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default DetailsLayout;