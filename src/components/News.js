// import React, { Component } from 'react'
// import Newsitems from './Newsitems'
// import button from '../components/button'

// export class News extends Component {
//   constructor()
//   {
//     super();
//     console.log("Hello I am cosructer");
//     this.state=
//     {
//        articles :[],
//        loading : false,
//        cnt:0
//     }
//   }

 
  

//    async componentDidMount()
//   {

//     let ApiUrl= "https://newsapi.org/v2/top-headlines?country=us&apiKey=b8a93492d3eb43f188e2e6b1e811da14";



//     let data =  await fetch(ApiUrl);

//     let parcedData= await data.json()


//     this.setState({articles: parcedData.articles})

//     console.log(parcedData)



//   }

//    next=async()=>
//   {
//     this.setState({cnt:this.state.cnt+1})
//     let ApiUrl= `https://newsapi.org/v2/top-headlines?country=us&apiKey=b8a93492d3eb43f188e2e6b1e811da14&page=${cnt}`;



//     let data =  await fetch(ApiUrl);

//     let parcedData= await data.json()


//     this.setState({articles: parcedData.articles})


//   }

//   prev=async()=>
//   {
//     let ApiUrl= "https://newsapi.org/v2/top-headlines?country=us&apiKey=b8a93492d3eb43f188e2e6b1e811da14";



//     let data =  await fetch(ApiUrl);

//     let parcedData= await data.json()


//     this.setState({articles: parcedData.articles})


//   }


    
//   render() {
//     return (
//       <div className='container my-3'>
//         <h2>News App - Top Headlines </h2>
//         <div className="row">
//              {this.state.articles.map((item)=>{
//                  return <div className='col-md-3'  key={item.url}>
//                     <Newsitems title={item.title.slice(0,45)} discription={item.description.slice(0,80)} imgUrl={item.urlToImage} newsUrl={item.url}></Newsitems>
                    
//                 </div>
                

//             })}
//             <div style={{display:'flex',flexDirection:'row',gap:1200}}>

//             <button type="button" class="btn btn-primary" style={{width:70,height:50}} onClick={this.next}>Prev</button>
//             <button type="button" class="btn btn-primary" style={{width:70,height:50}} onClick={this.prev}>Next</button>

//             </div>
  
               
               
                
//         </div>
        
//       </div>
//     )
//   }
// }

// export default Ne



import React, { useEffect, useState } from 'react';
import Newsitems from './Newsitems';

export default function News() {
  const [data, setData] = useState([]);
  const [next, setNext] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const[pages,setPages]=useState(0)

  useEffect(() => {
    setLoading(true); 
    setError("");

    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a82467e200d84ab2adcb1dba35ef0d73&page=${next}&pageSize=15`)
      .then((response) => response.json())
      .then((resData) => {
        if (Array.isArray(resData.articles)) {
          setData(resData.articles);
          setPages(Math.ceil(resData.totalResults / 15));
        } else {
          setData([]);
          setError("No articles found.");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching news:", err);
        setError("Failed to fetch data.");
        setLoading(false);
      });
  }, [next]);

  return (
    <div className='container my-4'>
      <h2>News Top Headlines</h2>

      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">{error}</p>}

      <div className='row'>
        {data.map((item, index) => (
          <div className='col-md-4' key={item.url || index}>
            <Newsitems
              imgUrl={item.urlToImage}
              title={item.title}
              description={item.description}
              newsUrl={item.url}
            />
          </div>
        ))}
      </div>

      <div className="container d-flex justify-content-between my-3">
        <button
          disabled={next === 1}
          type="button"
          className="btn btn-primary"
          onClick={() => setNext(next - 1)}
        >
          &larr; Prev
        </button>

        <button
          disabled={next >= pages}
          type="button"
          className="btn btn-primary"
          onClick={() => setNext(next + 1)}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
}
