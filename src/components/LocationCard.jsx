import "../components/styles/LocationCard.css"

const LocationCard = ({ location }) => {
    return (
        <article className="resident__location__article">
            <div className="resident__location">{location?.name}</div>
            <ul className="resident__location__list">
                <li className="resident__location__item"><span className="resident__span">Type: </span><span className="resident__span__value">{location?.type}</span></li>
                <li className="resident__location__item"><span className="resident__span">Dimension: </span><span className="resident__span__value">{location?.dimension}</span></li>
                <li className="resident__location__item"><span className="resident__span">Population: </span><span className="resident__span__value">{location?.residents.length}</span></li>
            </ul>
        </article >
    )
}

export default LocationCard 