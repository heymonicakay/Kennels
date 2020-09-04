import React from "react"
import "./Animal.css"

export const Animal = ({ animal, customer, location }) => (
    <section className="animal-card">
        <h3 className="animal__name">{animal.name}</h3>
      <section className="animal__details">
        <div className="animal__address">Breed: {animal.breed}</div>
        <div className="animal__owner">Owner: {customer.name}</div>
        <div className="animal__location">Kennel: {location.name}</div>
      </section>
    </section>
)