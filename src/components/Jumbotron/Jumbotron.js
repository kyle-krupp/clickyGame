import React from 'react';
import "./Jumbotron.css";


const Jumbotron = () =>{
    return(
        <div className="jumbotron jumbotron-fluid backgroundForJum">
            <div className="container text text-center">
                <h1 className="display-3">Your 2018 World Series Champions</h1>
                <p className="lead">The 2018 Red Sox team had some memorable faces, can you remember them all? Click on each image, but only once!</p>
            </div>
        </div>
    )
}

export default Jumbotron;

