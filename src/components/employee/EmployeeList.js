import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { Employee } from "./Employees"
import "./Employees.css"

export const EmployeesList = () => {
    const { employees, getEmployees } = useContext(EmployeeContext)

    useEffect(() => {
        getEmployees()
    }, [])

    return (
        <div className="employees">
        {
            employees.map(e => <Employee key={e.id} employee={e} />)
        }
        </div>
    )
}