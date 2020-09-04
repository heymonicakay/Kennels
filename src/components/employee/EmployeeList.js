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
      <h1>Employees</h1>
      <button className="btn add-emp-btn" onClick={() => props.history.push("/employees/create")}>
          Add Employee
      </button>

      <article className="employeeList">
          {employees.map(employee =>
            { const pet = animals.find(a => a.id === employee.animalId) || {}
              const kennel = locations.find(l => l.id === employee.locationId) || {}
              return <Employee
                key={employee.id}
                employee={employee}
                animal={pet}
                location={kennel}/>
            })
          }
      </article>
  </div>
    )
}