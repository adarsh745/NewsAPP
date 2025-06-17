import React from 'react'

export default function Newsitems(props) {

  return (
    <div> 
      <div className='my-3'>
        
        

        <div className="card" style={{width: "18rem"}}>
          
             <img src={!props.imgUrl?" https://wm.observador.pt/wm/l/https%3A%2F%2Fbordalo.observador.pt%2Fv2%2Frs%3Afill%3A770%3A403%2Fc%3A2000%3A1124%3Anowe%3A0%3A105%2Fq%3A70%2Ff%3Awebp%2Fplain%2Fhttps%3A%2F%2Fs3.observador.pt%2Fwp-content%2Fuploads%2F2025%2F05%2F29033306%2F45013635-1.jpg?layer=obstop:T":props.imgUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}    
                      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{width:'auto',marginRight:30}}> {props.source}    <span class="visually-hidden">{props.source}</span>  </span></h5>

     
   
                    
                    <h5 className="card-text">{props.discription}</h5>
                    <p  >By {!props.author?"unkown":props.author} {props.date} </p>
                    <a href={props.newsUrl} className="btn  btn-sm btn-dark">Read More</a>
               </div>
       </div>
        
      </div>
      
    </div>
  )
}
