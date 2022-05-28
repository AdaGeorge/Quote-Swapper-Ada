import React, { useState } from 'react'
import quotes from '../json/quotes.json'
import QuoteButton from './QuoteButton'

//Componente QuoteBox

const QuoteBox = () =>{
  
  //Arreglo de colores 
  const colors = [ '#A7168A', '#40AA16', '#C0F24E', '#2FC797', '#B982F7', '#0ABCE2', '#A6087F', '#D53D52', '#0FE9F8', '#EBF34C']
  
  //Funcion para obtener numero aleatorio de cualquier arreglo
  const randomPosition = (max) => {
    return Math.floor(Math.random() * max.length + 1)
  }  

  //Estados de frase, autor y color
  const [quote, setQuote] = useState(`${quotes[randomPosition(quotes)].quote}`)
  const [author, setAuthor] = useState(`${quotes[randomPosition(quotes)].author}`)
  const [color, setColor] = useState(`${colors[randomPosition(colors)]}`)


  //Funcion de boton para cambiar todos los estados
  const handlerQuote = () => {
    setQuote(quotes[randomPosition(quotes)].quote)
    setAuthor(quotes[randomPosition(quotes)].author)
    setColor(colors[randomPosition(colors)])
  }

  //Contenido renderizado
  return (
    <div className='container-card'>
      <article className='card' style={{borderColor: `${color}`, boxShadow: `1px 1px 30px 9px ${color}`}}>
        <p className='card-quote'>{quote}</p>
        <h4 className='card-author'>- {author} -</h4>
        <QuoteButton className='card-btn' handlerQuote = {handlerQuote} color={color}/>
      </article>
    </div>
  )
}

export default QuoteBox