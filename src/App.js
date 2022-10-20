import {useState} from 'react';
import {BiMoviePlay,BiSearch} from 'react-icons/bi';
import axios from 'axios';
import Portal from './portal.js'
export default function App(){
    const [movieData,setMovieData]=useState('');
    const [title,setTitle]=useState('');
    const query=()=>{
        const options = {
            method: 'GET',
            url: 'https://moviesdatabase.p.rapidapi.com/titles/search/title/'+title,
            params: {info: 'mini_info', limit: '10', page: '1', titleType: 'movie'},
            headers: {
              'X-RapidAPI-Key': '21b80da699mshd4bc6f20998e8d7p1344b5jsnca16b9cdd521',
              'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
              console.log(response.data);
              setMovieData(response.data)
          }).catch(function (error) {
              console.error(error);
          });
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        query();
    }
    return(
        <main >
            <div className='movieContainer'>
                <div className='titleContainer'>
                    <h1 className='title'>Available movies <span className='movieIcon'><BiMoviePlay/></span> within scope of</h1>
                    <form onSubmit={handleSubmit}>
                        <input placeholder='movie'
                            value={title}
                            onChange={(e)=>setTitle(e.target.value)}
                        />
                        <button><BiSearch /></button>
                    </form>
                </div>
            </div>
            {movieData && <Portal movieData={movieData} className='portal'/>}
        </main>
    )
}