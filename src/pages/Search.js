import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import "./Search.css"
import { useDispatch, useSelector } from 'react-redux'
import { updateSearchQuery } from '../components/actions'


export default function Search() {

    const dispatch = useDispatch();
    const searchQuery = useSelector((state) => state.searchQuery);

    // const [Text , setText] = useState("")
    const [Sdata, setSdata] = useState([])

    const handleSearchChange = (event) => {
        dispatch(updateSearchQuery(event.target.value));
    };
    
    // useEffect(() => {
    //     fetch(`https://api.themoviedb.org/3/search/movie?query=${Text}&include_adult=false&language=en-US&page=1&api_key=4e44d9029b1270a757cddc766a1bcb63`)
    //         .then(res => res.json())
    //         .then(data => setSdata(data.results))
    // }, [Text])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1&api_key=4e44d9029b1270a757cddc766a1bcb63`)
            const data = await res.json();
            setSdata(data.results)
        }
        fetchData();
    }, [searchQuery])


    return (
        <div>
            <h1>Search for any Movie</h1>
            <div className='container' data-bs-theme="dark">
                <form className="d-flex  testinput" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleSearchChange} value={searchQuery} />
                </form>
            </div>
            <div className='container1'>
                {
                    Sdata?.map((movie) => {
                        return <div key={movie.id} className="item1"><Card original_title={movie.title} poster_path={movie.poster_path}
                            release_date={movie.release_date} overview={movie.overview} id={movie.id} />
                        </div>
                    })
                }
            </div>
        </div>
    )
}
