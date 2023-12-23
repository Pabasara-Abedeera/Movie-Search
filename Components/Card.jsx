const Card =(props) =>{
return(
    <div className="container">
                <div className="movie">
                    <div>
                        <p>{props.Movie.Year}</p>
                    </div>
                    <div>
                        <img src={props.Movie.Poster} alt={props.Title}/>
                    </div>
                    <div>
                        <span>{props.Movie.Type}</span>
                        <h3>{props.Movie.Title}</h3>
                    </div>

                </div>

            </div>
)
}
export default Card;