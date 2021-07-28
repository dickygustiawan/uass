

export default function propdata (props)
{
   
    return(
      
    <div className="card">
      <img src={props.urlgam} className="card-img-top" alt="hujan"/>
      <div className="card-body">
        <h5 className="card-title">{props.nama}</h5>
        <p className="card-text">{props.ktg}</p>
        <h5 className="card-title">{props.harga}</h5>
      </div>
    </div>
  
  
 

    )
}
