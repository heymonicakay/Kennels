import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import { LocationContext } from "../location/LocationProvider"
import { Animal } from "./Animal"
import "./Animal.css"

export const AnimalList = () => {
    const { animals, getAnimals } = useContext(AnimalContext)
    const { customers, getCustomers } = useContext(CustomerContext)
    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => {
        getAnimals()
        getCustomers()
        getLocations()
    }, [])

    return (
        <div className="animals">
        {
            animals.map(a => {
              const owner = customers.find(c => c.id === a.customerId) || {}
              const kennel = locations.find(l => l.id === a.locationId) || {}

              return <Animal
                  key={a.id}
                  animal={a}
                  customer={owner}
                  location={kennel}
              />
            })
        }
        </div>
    )
}