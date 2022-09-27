import React from "react"
import Layout from "../../components/layout/Layout"
import Cards from "../../components/common/cards"

export default function index() {
  return (
    <Layout>
      <div className="m-5 text-center">
        <Cards header={"Bussiness Unit"} />
      </div>
    </Layout>
  )
}
