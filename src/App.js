import React, { useState, useEffect} from 'react';
// import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
// import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

function App() {
  const [slide,setSlide] = useState(1)
  const [people,setPeople] = useState(data)

  useEffect(() => {
    const lastSlide = people.length;
    if (slide < 1) {
      setSlide(lastSlide);
    }
    if (slide > lastSlide) {
      setSlide(1);
    }
  }, [slide,people])

  // automatically changes slide every 5000 milliseconds
  useEffect(() => {
    let slider = setInterval(() => {
      setSlide(slide+1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [slide]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person)=>{
          const {id,image,name,title,quote} = person
          if (id === slide){
            return ( 
            <article key={id} className="review">
              <div className="img-container">
              <img className="person-img" src={image} alt={name}/>
              </div>
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
            </article>
            )
          }
        })}
        <button className="next" onClick={()=>setSlide(slide+1)}>&rarr;</button>
        <button className="prev" onClick={()=>setSlide(slide-1)}>&larr;</button>
      </div>
    </section>
  );
}

export default App;
