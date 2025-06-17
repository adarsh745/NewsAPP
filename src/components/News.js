import React, { useEffect, useState } from 'react';
import Newsitems from './Newsitems';
import Loading from './Loading';
import { store } from '../App';
import { useContext } from 'react';
import LoadingBar from 'react-top-loading-bar';

export default function News(props) {
  const [data, setData] = useState([]);
  const [next, setNext] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const[pages,setPages]=useState(0)

  const [mode, setMode]=useContext(store)

  useEffect(() => {
    setLoading(true); 
    setError("");

    fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a82467e200d84ab2adcb1dba35ef0d73&page=${next}&pageSize=15`)
      .then((response) => response.json())
      .then((resData) => {
        if (Array.isArray(resData.articles)) 
          {
          setData(resData.articles);
          setPages(Math.ceil(resData.totalResults / 15));
          console.log("the total ordrs is :",resData.totalResults)
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
  if(loading)
  {
    return <Loading></Loading>
  }
  

  console.log(props.category)
    console.log(props.country)
    console.log("mode of navbar is :", mode)
    const  catgory=props.category;
    const uppercase=catgory.toUpperCase();

  return (
    <div className='container my-4 bg-blue'>
      <h1 className={`text-${mode === 'light' ? 'black' : 'white'}`} style={{marginTop:'90px'}} >Top News Headlines  </h1>
     <br></br>

      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">{error}</p>}

      <div className='row'>
        {!loading && data.map((item, index) => (
          <div className='col-md-4' key={item.url || index}>
            <Newsitems
               imgUrl={item.urlToImage}
               title={item.title.slice(0,20)}
               discription={!item.description ? "No description available" : item.description.slice(0,80)}
               newsUrl={item.url}
               author={item.author || "Unknown"}
               date={new Date(item.publishedAt).toISOString().split('T')[0]}
               source={item.source.name}
               pages={pages}
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


