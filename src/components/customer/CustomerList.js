import React, { useContext, useEffect } from "react"
import { CustomerContext } from "./CustomerProvider"
import { Customer } from "./Customers"
import "./Customers.css"

export const CustomerList = () => {
    const { customers, getCustomers } = useContext(CustomerContext)

    useEffect(() => {
        getCustomers()
    }, [])

    return (
        <div className="customers">
        {
            customers.map(c => <Customer key={c.id} customer={c} />)
        }
        </div>
    )
}