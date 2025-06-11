import React, { Component } from 'react'

export class Newsitems extends Component {
  render() {
    let {title,discription,imgUrl, newsUrl}=this.props
    return (
      <div className='my-3'>
        

        <div className="card" style={{width: "18rem"}}>
             <img src={!imgUrl?" https://wm.observador.pt/wm/l/https%3A%2F%2Fbordalo.observador.pt%2Fv2%2Frs%3Afill%3A770%3A403%2Fc%3A2000%3A1124%3Anowe%3A0%3A105%2Fq%3A70%2Ff%3Awebp%2Fplain%2Fhttps%3A%2F%2Fs3.observador.pt%2Fwp-content%2Fuploads%2F2025%2F05%2F29033306%2F45013635-1.jpg?layer=obstop:T":imgUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{discription}</p>
                    <a href={newsUrl} className="btn  btn-sm btn-dark">Read More</a>
                </div>
       </div>
        
      </div>
    )
  }
}

export default Newsitems
