import React from 'react'
import Products from './Products'

export default function Home() {
    return (
        <div className="hero">
            <div className="card bg-dark text-white border-0">
                <img src="/assets/bg.jpg" className="card-img" alt="Background" height="573px" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-3">LATEST BOOKS ARE HERE</h5>
                        <p className="card-text lead fs-2">
                            CKECK OUT THE TRENDING BOOKS OF THIS MONTH
                        </p>
                    </div>
                </div>
            </div>
            <div id="section1">
            < Products />
            </div>
        </div>
    )
}
