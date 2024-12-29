import React, { Component } from 'react'

export class Newitem extends Component{
  render(){
     let {title,description,url,urlToImage}=this.props;
     return (
    <div className="card" style={{height:"auto"}} >
        <img src={urlToImage} className="card-img-top" alt=""/>
        <div className="card-body">
            <h5 className="card-title">{title.slice(0,10)}</h5>
            <p className="card-text">{description.slice(0,100)}.</p>
            <a href="/" className="btn btn-primary">Read More</a>
        </div>
    </div>
     )

  }
}

export default Newitem;
