import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { AnimalContext } from "../animal/AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import { Employee } from "./Employees"
import "./Employees.css"

export const EmployeeList = (props) => {
    const { employees, getEmployees } = useContext(EmployeeContext)
    const { animals, getAnimals } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => {
        getEmployees()
        .then(getAnimals)
        .then(getLocations)
    }, [])

    return (
      <div className="employees">
      <h2>Employees</h2>
      <button className="btn add-emp-btn" onClick={() => props.history.push("/employees/create")}>
          Add Employee
      </button>

      <article className="employeeList">
          {employees.map(e =>
            { const pet = animals.find(a => a.id === e.animalId) || {}
              const kennel = locations.find(l => l.id === e.locationId) || {}
              return <Employee
                key={e.id}
                employee={e}
                animal={pet}
                location={kennel}/>
            })
          }
      </article>
      </div>
    )
}