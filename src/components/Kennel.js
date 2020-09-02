import React from "react"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeesList } from "./employee/EmployeeList"
import { LocationProvider } from "./location/LocationProvider"
import { LocationsList } from "./location/LocationsList"
import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList"

import "./animal/Animal.css"
import "./employee/Employees.css"
import "./location/Locations.css"
import "./customer/Customers.css"
import "./Kennel.css"

export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <h2>Animals</h2>
        <article className="animals">
            <AnimalProvider>
              <AnimalList />
            </AnimalProvider>
        </article>

        <h2>Employees</h2>
        <article className="employees">
        <EmployeeProvider>
            <EmployeesList />
        </EmployeeProvider>
        </article>

        <h2>Locations</h2>
        <article className="locations">
        <LocationProvider>
            <LocationsList />
        </LocationProvider>
        </article>

        <h2>Customers</h2>
        <article className="customers">
        <CustomerProvider>
            <CustomerList />
        </CustomerProvider>
        </article>
    </>
)