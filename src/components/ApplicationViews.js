import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalForm } from "./animal/AnimalForm"
import { CustomerProvider } from "./customer/CustomerProvider"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeForm } from "./employee/EmployeeForm"
import { LocationsList } from "./location/LocationsList"
import { AnimalList } from "./animal/AnimalList"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeList } from "./employee/EmployeeList"

export const ApplicationViews = (props) => {
  return (
    <>
      <LocationProvider>
        <Route exact path="/">
          <div className="location-container">
            <LocationsList />
          </div>
        </Route>

        <AnimalProvider>
          <EmployeeProvider>
            <CustomerProvider>

              <Route path="/animals" render={
                props=> <div className="animal-container">
                  <AnimalList { ...props} />
                </div>
              } />

              <Route path="/animals/create" render={
                props=> <div className="animal-form__container">
                  <AnimalForm { ...props} />
                </div>
              } />

              <Route path="/customers">
                <div className="customer-container">
                  <CustomerList />
                </div>
              </Route>

            </CustomerProvider>
          </EmployeeProvider>
        </AnimalProvider>
      </LocationProvider>

      <EmployeeProvider>
        <LocationProvider>
          <AnimalProvider>

            <Route path="/employees" render={
            props => <div className="employee-container">
              <EmployeeList {...props} />
              </div>
            } />
            <Route exact path="/employees/create" render={
              props => <div className="employee-form__container">
              <EmployeeForm { ...props} />
            </div>
            }/>

          </AnimalProvider>
        </LocationProvider>
      </EmployeeProvider>
    </>
  )
}