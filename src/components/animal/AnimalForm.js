import React, { useContext, useRef, useEffect } from "react"
import { EmployeeContext } from "../employee/EmployeeProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import { LocationContext } from "../location/LocationProvider"
import { AnimalContext } from "./AnimalProvider"
import "./Animal.css"

export const AnimalForm = (props) => {
  const { addAnimal } = useContext(AnimalContext)
  const { locations, getLocations } = useContext(LocationContext)
  const { employees, getEmployees } = useContext(EmployeeContext)
  const { customers, getCustomers } = useContext(CustomerContext)

  const name = useRef(null)
  const breed = useRef(null)
  const location = useRef(null)
  const employee = useRef(null)
  const owner = useRef(null)

  useEffect(() => {
    getCustomers().then(getLocations).then(getEmployees)
  }, [])

  const constructNewAnimal = () => {
    const locationId = parseInt(location.current.value)
    const employeeId = parseInt(employee.current.value)
    const ownerId = parseInt(owner.current.value)

    if (locationId === 0) {
      window.alert("Please select a location")
    } else {
      addAnimal({
        name: name.current.value,
        breed: breed.current.value,
        locationId,
        employeeId,
        ownerId
      })
      .then(() => props.history.push("/animals"))
    }
  }


  return (
    <form className="animal-form">
        <h2 className="animal-form--title">
          New Animal
        </h2>
        <div className="form-group">
          <label htmlFor="animalName">Animal name: </label>
          <input type="text" id="animalName" ref={name} required autoFocus className="form-control" placeholder="Animal name" />
        </div>
        <div className="form-group">
          <label htmlFor="animalBreed">Animal breed: </label>
          <input type="text" id="animalBreed" ref={breed} required autoFocus className="form-control" placeholder="Animal breed" />
        </div>
        <div className="form-group">
          <label htmlFor="location">Assign to location: </label>
          <select defaultValue="" name="location" ref={location} id="animalLocation" className="form-control" >
              <option value="0">Select a location</option>
              {locations.map(l => (
                  <option key={l.id} value={l.id}>
                      {l.name}
                  </option>
              ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="owner">Assign to owner: </label>
          <select defaultValue="" name="owner" ref={owner} id="animalOwner" className="form-control" >
              <option value="0">Select an owner</option>
              {customers.map(c => (
                  <option key={c.id} value={c.id}>
                      {c.name}
                  </option>
              ))}
          </select>
        </div>
        <div className="form-group">
            <label htmlFor="employee">Caretaker: </label>
            <select defaultValue="" name="employee" ref={employee} id="animalEmployee" className="form-control" >
                <option value="0">Select an employee</option>
                {employees.map(e => (
                    <option key={e.id} value={e.id}>
                        {e.name}
                    </option>
                ))}
            </select>
        </div>
        <button className="btn save-btn save-btn--pet" type="submit"
            onClick={e => {
                e.preventDefault()
                constructNewAnimal()
            }}
            className="btn save-btn save-btn--pet">
            Save Animal
        </button>
    </form>
  )
}