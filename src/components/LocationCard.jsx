
const LocationCard = ({ location }) => {
    return (
        <article>
            <div>{location?.name}</div>
            <ul>
                <li><span>Type: </span><span>{location?.type}</span></li>
                <li><span>Dimension: </span><span>{location?.dimension}</span></li>
                <li><span>Population: </span><span>{location?.residents.length}</span></li>
            </ul>
        </article >
    )
}

export default LocationCardhasta 