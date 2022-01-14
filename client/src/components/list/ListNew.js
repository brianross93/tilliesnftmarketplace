import React, {useState} from 'react';
import '../about/About.css'

function ListNew() {

    const [title,setTitle] = useState('');
    const [price, setPrice] = useState(0);

    return (
        <div className='About'>
            <form action='/list/new' method='post'>
                <h1>About Page</h1>
                <label>Title:</label>
                <input type='text' onChange={(e) => {
                    setTitle(e.target.value)
                }}/>
                <label>Price:</label>
                <input type='number' onChange={(e) => {
                    setPrice(e.target.value)
                }}/>
                <label>Description:</label>
                <input type='text' onChange={(e) => {
                    setPrice(e.target.value)
                }}/>
                <label>id:</label>
                <input type='text' onChange={(e) => {
                    setPrice(e.target.value)
                }}/>
                <label>File:</label>
                <input type='text' onChange={(e) => {
                    setPrice(e.target.value)
                }}/>
                <button type='submit'> Add to list </button>
            </form>
        </div>
        
    )
}
export default ListNew;