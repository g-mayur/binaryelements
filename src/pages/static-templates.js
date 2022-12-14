import React from "react"
import Layout from "../components/layout/Layout"
import Cards from "../components/common/cards"

export default function StaticTemplates() {
  return (
    <Layout>
      <div className="m-5 text-center">
        <Cards header={"Static Templates"} />
      </div>
    </Layout>
  )
}
