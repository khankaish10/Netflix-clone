import React, { useState, useEffect } from 'react'
import axios from './axios'
import './Row.css'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const base_Url = 'http://image.tmdb.org/t/p/original/'

function Row({ title, fetchURL, isLarge }) {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL)
            setMovies(request.data.results)

            return request
        }
        fetchData()
    }, [fetchURL])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };
    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('')
        } else {
            movieTrailer(movie?.name || "")
                .then(url => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    urlParams.get('v')
                    setTrailerUrl(urlParams.get('v'))

                })
                .catch(err => console.log(err))
        }
    }

    return (
        <div className='row'>
            <h2> {title} </h2>

            <div className='row_container'>
                {movies.map(movie => {
                    return <img
                        key={movie.id}
                        src={`${base_Url}${isLarge ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                        onClick={() => handleClick(movie)}
                        className={`row_image ${isLarge && 'row_imageLarge'}`}
                    />
                })}
            </div>
            { trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row
