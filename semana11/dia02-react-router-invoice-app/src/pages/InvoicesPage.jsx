// TODO: Consultar los datos de mockapi y listar los invoices en el navegador
// https://67074c39a0e04071d229b837.mockapi.io/api/v1/invoices

import { useEffect, useState } from "react"

import Header from "../components/Header"

const fetchInvoices = async () => {
  const url = 'https://67074c39a0e04071d229b837.mockapi.io/api/v1/invoices'

  const response = await fetch(url)

  return await response.json()
}

const InvoicesPage = () => {
  const [invoices, setInvoices] = useState([])

  useEffect(() => {
    fetchInvoices()
      .then(invoices => setInvoices(invoices))
  }, [])

  return (
    <>
      <Header title='Invoices' />

      {/* <div>{JSON.stringify(invoices)}</div> */}
    </>
  )
}

export default InvoicesPage