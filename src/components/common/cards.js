import React from "react"

export default function Cards({ header }) {
  console.log("Card header", header)
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{header}</h5>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <button type="button" className="btn btn-primary">
          Go somewhere
        </button>
      </div>
    </div>
  )
}
