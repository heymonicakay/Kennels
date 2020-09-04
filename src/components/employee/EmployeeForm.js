import React, { useContext, useRef, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../location/LocationProvider"
import { AnimalContext } from "../animal/AnimalProvider"
import "./Employees.css"

export const EmployeeForm = (props) => {
  const { addEmployee } = useContext(EmployeeContext)
  const { locations, getLocations } = useContext(LocationContext)
  const { animals, getAnimals } = useContext(AnimalContext)

  const name = useRef(null)
  const location = useRef(null)
  const animal = useRef(null)

  useEffect(() => {
    getAnimals().then(getLocations)
  }, [])

  const constructNewEmployee = () => {
    const locationId = parseInt(location.current.value)
    const animalId = parseInt(animal.current.value)

    if (locationId === 0) {
      window.alert("Please select a location")
    } else {
      addEmployee({
        name: name.current.value,
        locationId,
        animalId
      })
      .then(() => props.history.push("/employees"))
    }
  }

  return (
    <form className="employee-form">
        <h2 className="employee-form--title">
          New Employee
        </h2>
        <div className="form-group">
          <label htmlFor="employeeName">Employee name: </label>
          <input type="text" id="employeeName" ref={name} required autoFocus className="form-control" placeholder="Employee name" />
        </div>
        <div className="form-group">
          <label htmlFor="location">Assign to location: </label>
          <select defaultValue="" name="location" ref={location} id="employeeLocation" className="form-control" >
              <option value="0">Select a location</option>
              {locations.map(l => (
                  <option key={l.id} value={l.id}>
                      {l.name}
                  </option>
              ))}
          </select>
        </div>
            <div className="form-group">
                <label htmlFor="location">Caretaker for: </label>
                <select defaultValue="" name="animal" ref={animal} id="employeeAnimal" className="form-control" >
                    <option value="0">Select an animal</option>
                    {animals.map(a => (
                        <option key={a.id} value={a.id}>
                            {a.name}
                        </option>
                    ))}
                </select>
            </div>
        <button className="btn save-btn save-btn--emp" type="submit"
            onClick={e => {
                e.preventDefault()
                constructNewEmployee()
            }}
            className="btn save-btn save-btn--emp">
            Save Employee
        </button>
    </form>
  )
}