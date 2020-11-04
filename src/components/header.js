import React from "react"
import { Link } from "gatsby"

export default function Header() {
  return (
    <div>
      <nav>
        <p>
          <Link to="/users/1">users/1</Link>
        </p>

        <p>
          <Link to="/users/2">users/2</Link>
        </p>
        <p>
          <Link to="/users/3">users/3</Link>
        </p>
      </nav>
    </div>
  )
}
