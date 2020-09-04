import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import { LocationContext } from "../location/LocationProvider"
import { Animal } from "./Animal"
import "./Animal.css"

export const AnimalList = (props) => {
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
        <h2>Animals</h2>

        <button className="btn add-pet-btn" onClick={() => props.history.push("/animals/create")}>
          Add Animal
        </button>

        <article className="animalList">

        {animals.map(a => {
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
        </article>
        </div>
    )
}