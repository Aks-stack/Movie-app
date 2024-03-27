import React from 'react'
import { Link } from 'react-router-dom'

export default function Card(props) {
  return (
        <div className="card">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={`https://image.tmdb.org/t/p/original/${props.poster_path}`} className="card-img" alt="/"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.original_title}</h5>
                        <p className="card-text">{`${props.overview.slice(0,55)}...`}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                            <li className="list-group-item">{`Release Date: ${props.release_date}`}</li>
                    </ul>
                    <div className="card-body">
                        <Link className="btn btn-outline-dark mx-3" to={`/movie/${props.id}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-play" viewBox="0 0 16 16">
                                <path d="M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z"/>
                            </svg> Watch</Link>
                    </div>
                </div>
            </div>
        </div>
  )
}
