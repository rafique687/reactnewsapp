import React, { Component } from 'react'

export default class Mynews extends Component {
  render() {
    let {title , description , url ,urlToImage} =this.props;
    return (
       
        <div>
        <div className="card" style={{width: "18rem;"}}>
        <img src={urlToImage} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="/" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </div>
    )
  }
}
