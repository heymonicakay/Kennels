import React from "react"
import "./Customers.css"

export const Customer = ({ customer }) => (
    <section className="customer">
        <h3 className="customer__name">{customer.name}</h3>
        <address className="customer__address">{customer.address}</address>
    </section>
)