import React, { useState } from 'react';
import { text } from './data'



const Para = () => {
    const [count, setCount] = useState(0);
    const [paragraph, setParagraph] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('hello world')
        //amount is a variable that represents the number of elements you want to extract from the array.
        //slice() is a method available on arrays in JavaScript. It allows you to extract a portion of an array based on the specified start and end indexes.
        //The parseInt() function is used to parse a string and return an integer value.
        let figure = parseInt(count);
        if (count <= 0) {
            figure = 1
        }
        if (count > 8) {
            figure = 8
        }
        setParagraph(text.slice(0, figure))
    }
    return (
        //e.target.value retrieves the new value that the user has entered into the input field.
        <section className='section-center'>
            <h3>tired of writing</h3>
            <form className='lorem-form' onSubmit={handleSubmit}>
                <label htmlFor='figure'>No of paragraph</label>
                <input type='number' name='figure' id='figure' value={count} onChange={(e) => setCount(e.target.value)} />
                <button type='submit' className='btn'>Generate</button>
            </form>
            <article>
                {paragraph.map((item, index) => {
                    return <p key={index}>{item}</p>
                })}
            </article>
        </section>
    )
}

export default Para
