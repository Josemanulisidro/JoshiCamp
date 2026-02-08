import {useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import Loader from '../../Components/Loader'

import Products from '../Products'
import Solutions from '../Solutions'
import NewsEvent from '../NewsEvent'
import GetKnow from '../GetKnow'
import Gallery from '../Gallery'
import NotFound from '../NotFound'



import './App.css'
import { useEffect, useState } from 'react'

const AppRoutes = () =>{
    let routes = useRoutes([
        { path: '/', element: <Home /> },
        { path: 'products', element: <Products /> },
        { path: 'solutions', element: <Solutions /> },
        { path: 'news-and-events', element: <NewsEvent /> },
        { path: 'GetKnow', element: <GetKnow />},
        { path: 'imageGallery', element: <Gallery/>},
        { path: '*', element: <NotFound /> },
    ])
    return routes
}

const App = () =>{
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const initApp = async () =>{
            await new Promise((res) => setTimeout(res,4000));
            setLoading(false);
        };
        initApp();
    },[]);

    if(loading) return <Loader />;

    return(
        <BrowserRouter>
            <Navbar />
            <AppRoutes />
            <Footer />
        </BrowserRouter>
    );
}

export default App