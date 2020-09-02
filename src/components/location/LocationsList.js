import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { Location } from "./Locations"
import "./Locations.css"

export const LocationsList = () => {
    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => {
        getLocations()
    }, [])

    return (
        <div className="locations">
        {
            locations.map(l => <Location key={l.id} location={l} />)
        }
        </div>
    )
}