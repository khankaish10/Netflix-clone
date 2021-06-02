import React, { useEffect, useState } from 'react'
import './Banner.css'
import requests from './requests'
import axios from './axios'


const base_Url = 'http://image.tmdb.org/t/p/original/'

function Banner() {
    const [movies, setMovies ] = useState([])

    useEffect(()=> {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginal)
            setMovies(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ])
            return request;
        }
        fetchData()
    }, [])

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n) + "..." : str;
    }

    return (
        <header className='banner' style={{
            backgroundImage: `url(${base_Url}${movies?.backdrop_path})`,
            backgroundPosition:"center center",
            backgroundSize:"cover"
        }}>
            <div className='banner_content' >
                <h1 className='banner_title'> {movies?.title || movies?.name || movies?.original_name} </h1>
                <div>
                    <button className='banner_button'>Play</button>
                    <button className='banner_button'>My List</button>
                </div>
                <h1 className='banner_description'> {truncate(movies?.overview, 150)} </h1>
            </div>

            <div className='banner_smoke'></div>
        </header>
    )
}

export default Banner
