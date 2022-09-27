import React from "react"
import { Link } from "gatsby"

export default function Navbar() {
  return (
    <nav className="d-flex flex-row">
      <span className="px-3">
        <Link to="/">
          <b className="text-black">Home</b>
        </Link>
      </span>
      <span className="px-2">
        <Link to="/contact-us">
          <b className="text-black">contact us</b>
        </Link>
      </span>
      <span className="px-2">
        <Link to="/business-units/voip-elements">
          <b className="text-black">Voip Elements</b>
        </Link>
      </span>
      <span className="px-2">
        <Link to="/business-units/it-elements">
          <b className="text-black">IT Elements</b>
        </Link>
      </span>
      <span className="px-2">
        <Link to="/business-units/cloud-elements">
          <b className="text-black">Cloud Elements</b>
        </Link>
      </span>
      <span className="px-2">
        <Link to="/business-units/growth-elements">
          <b className="text-black">Growth Elements</b>
        </Link>
      </span>
      <span className="px-2">
        <Link to="/business-units/iot-elements">
          <b className="text-black">IOT Elements</b>
        </Link>
      </span>
      <span className="px-2">
        <Link to="/static-templates">
          <b className="text-black">Static Templates</b>
        </Link>
      </span>
    </nav>
  )
}
