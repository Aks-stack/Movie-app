import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card'
import "./Movie.css"

export default function Movie(props) {

    const [Cmovie, setCmovie] = useState()
    const [Recom, setRecom] = useState()
    const { id } = useParams()

    // useEffect(() => {
    //     fetch(`https://api.themoviedb.org/3/movie/${id}?append_to_response=recommendations&api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
    //         .then(res => res.json())
    //         .then(data => setCmovie(data))
    // }, [id])

    useEffect(() => {
        const fetchData = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?append_to_response=recommendations,credits&api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        const data = await res.json();
        setCmovie(data)
        setRecom(data.recommendations.results.slice(0,6))
        }
        fetchData();
    }, [id])

  return (
    <div >
        <div className='row'>
            <div className='col-md-8'>
                <iframe className="player" title='p1' allowFullScreen src={`https://multiembed.mov/directstream.php?video_id=${id}&tmdb=1`}></iframe>
                {/* <iframe className="player" title='p1' allowFullScreen src={`https://multiembed.mov/directstream.php?video_id=${id}&tmdb=1`} style={{width: "100%", height: "600px", margin: "30px"}}></iframe> */}
            </div>
            <div className='col-md-4'>
                <h1 className='title'>{Cmovie?.title}</h1>
                <img className='poster' src={`https://image.tmdb.org/t/p/original/${Cmovie?.poster_path}`} alt='/'/>
                <p className='date'>Release date: {Cmovie?.release_date}  Runtime: {Cmovie?.runtime}m</p>
                {/* <p className='date'>Director: {Cmovie?.credits.crew[3].name}</p> */}
                <div className='imdb'>
                    <a className="btn btn-warning" href={`https://www.imdb.com/title/${Cmovie?.imdb_id}`}>IMDB</a>
                </div>
                <p className='synopsis'>{Cmovie?.overview}</p>
            </div>
        </div>
        
        <h3 className='recom'>Related Movies:</h3>
        <div className='container'>
            {
                Recom?.map((movie) => {
                    return <div key={movie.id} className="item"><Card original_title={movie.title} poster_path={movie.poster_path}
                    release_date={movie.release_date} overview={movie.overview} id={movie.id}/>
                    </div>
                })
            }
        </div>
    </div>
  )
}
