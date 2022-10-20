
export default function Portal({movieData}){
    return(
        <div className='portal'>
            {movieData.results.map((movie)=>{
                return (
                    <>
                    {movie.primaryImage && <div key={movie.id} className='poster'>
                        <img src={movie.primaryImage.url} alt={movie.titleText.text} />
                        <h2>{movie.titleText.text}</h2>
                        {movie.releaseYear && <h2>{movie.releaseYear.year}</h2>}
                        <a href="#">Watch</a> 
                    </div>
                    }
                    </>
                )
            })}
        </div>
    )
}