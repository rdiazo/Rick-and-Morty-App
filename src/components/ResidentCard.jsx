import { useEffect } from "react"
import useFetch from "../hooks/useFetch"

const ResidentCard = ({ url }) => {

    const [resident, getResident] = useFetch(url)

    useEffect(() => {
        getResident()
    }, [])

    console.log(resident)

    return (
        <article>
            <header>
                <img src={resident?.image} alt="" />
                <div className="circle">
                    <span>{resident?.status}</span>
                </div>
            </header>
            <section>
                <h3>{resident?.name} </h3>
                <hr />
                <ul>
                    <li><span>Specie </span><span>{resident?.species} </span></li>
                    <li><span>Origen </span><span>{resident?.origin.name} </span></li>
                    <li><span>Eppisodes where appear </span>{resident?.episode.length} <span></span></li>
                </ul>
            </section>

        </article>



    )
}

export default ResidentCard