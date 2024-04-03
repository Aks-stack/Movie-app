import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card'
import "./Movie.css"
import Modal from '../components/Modal'
import YouTube from 'react-youtube'

export default function Movie(props) {

    const [Cmovie, setCmovie] = useState()
    const [Recom, setRecom] = useState()
    const { id } = useParams()
    const [Open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true)
    }


    // useEffect(() => {
    //     fetch(`https://api.themoviedb.org/3/movie/${id}?append_to_response=recommendations&api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
    //         .then(res => res.json())
    //         .then(data => setCmovie(data))
    // }, [id])

    useEffect(() => {
        const fetchData = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?append_to_response=recommendations,credits,videos&api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        const data = await res.json();
        setCmovie(data)
        setRecom(data.recommendations.results.slice(0,6))
        }
        fetchData();
    }, [id])

  return (
    <div >
        <div className='row' style={{marginLeft:"0px",marginRight:"0px"}}>
            <div className='col-md-8'>
                <div className='iframeContainer'>
                    <iframe className="player" title='p1' allowFullScreen src={`https://multiembed.mov/directstream.php?video_id=${id}&tmdb=1`}></iframe>
                </div>
            </div>
            <div className='col-md-4'>
                <h1 className='title'>{Cmovie?.title}</h1>
                <img className='poster' src={`https://image.tmdb.org/t/p/original/${Cmovie?.poster_path}`} alt='/'/>
                <p className='date'>Release date: {Cmovie?.release_date}  Runtime: {Cmovie?.runtime}m</p>
                <p className='date'>Director: {Cmovie?.credits.crew.find(member => member.job === "Director")?.name}</p>
                <div className='imdb'>
                    <a className="btn btn-warning" href={`https://www.imdb.com/title/${Cmovie?.imdb_id}`}>IMDB</a>
                    <button type='button' className="btn btn-danger" style={{marginLeft:"15px"}} onClick={handleOpen}>Trailer</button>
                    <Modal isOpen={Open} onClose={handleClose}>
                        <>
                            <YouTube videoId={Cmovie?.videos.results.find(vid => vid.name.toLowerCase().includes("official trailer"))?.key} style={{marginBottom:"-7px"}}/>
                        </>
                    </Modal>
                </div>
                <p className='synopsis'>{Cmovie?.overview}</p>
            </div>
        </div>
        
        <h3 className='recom'>Related Movies:</h3>
        <div className='container2'>
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
