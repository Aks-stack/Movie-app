import React, { useState, useEffect } from 'react'
import Card from '../components/Card'

export default function Popular() {

    const [Popular, setPopular] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
        const res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
        const data = await res.json();
        setPopular(data.results)
        }
        fetchData();
    }, [])
  return (
    <div style={{margin:"25px", minHeight:"100vh", fontSize:"smaller"}}>
        <div className='row'>
                {
                    Popular.map((movie) => {
                        return <div key={movie.id} className="col-md-4 my-3"><Card original_title={movie.title} poster_path={movie.poster_path}
                        release_date={movie.release_date} overview={movie.overview} id={movie.id}/>
                        </div>
                    })
                }
            </div>
    </div>
  )
}
