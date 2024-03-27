import React, { useEffect, useState } from 'react'
import "./Home.css"
import Card from '../components/Card'


export default function Home() {
    const [Curated, setCurated] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/list/8294945-curated?language=en-US&page=1&api_key=4e44d9029b1270a757cddc766a1bcb63")
            .then(res => res.json())
            .then(data => setCurated(data.items))
    }, [])

    return (
        <div className='para'>
            <div className='row'>
                {
                    Curated.map((movie) => {
                        return <div key={movie.id} className="col-md-4 my-3"><Card original_title={movie.title} poster_path={movie.poster_path}
                        release_date={movie.release_date} overview={movie.overview} id={movie.id}/>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
