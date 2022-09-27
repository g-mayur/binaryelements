import React from "react"
import Layout from "../components/layout/Layout"
import Cards from "../components/common/cards"
import "bootstrap/dist/css/bootstrap.min.css"
import { header } from "../styles/home.module.css"

export default function Home() {
  return (
    <Layout>
      <section className={header}>
        <div className="m-5 text-center">
          <Cards header={"Home"} />
        </div>
      </section>
    </Layout>
  )
}
