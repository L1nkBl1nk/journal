import "./entry.dsa-style.css"


export default function Entry(props){
    return(
        <article className="journal-entry">
            <div className="main-image-container">
                <img className="main-image" src={props.entry.img.src} alt={props.entry.img.alt}/>
            </div>
            <div>
                {/* <img src={MapIcon} alt="map marker icon" /> */}
                <span>{props.entry.country}</span>
                <a href={props.entry.googleMapsLink}>
                View on Google Map</a>
                <h2>{props.entry.title}</h2>
                <p>{props.entry.date}</p>
                <p>{props.entry.text}</p>
            </div>
        </article>
    )
}