import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

export default function GunungBerapi(props) {
  const [gunung, setGunung] = useState()
  const { history } = props

  const volcanoesApi =
    'https://mocki.io/v1/fbeb9c50-59b4-4a4c-a019-44a3dca8e026'

  useEffect(() => {
    axios
      .get(volcanoesApi)
      .then((response) => {
        return response.data
      })
      .then((data) => {
        setGunung(data)
        console.log(data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  console.log(gunung)

  return (
    <div className="gunung">
      <h1 className="title">List Gunung Berapi di Indonesia</h1>
      <div className="gunung-content">
        {gunung === undefined
          ? 'Loading...'
          : gunung.map((g, index) => {
              return (
                <NavLink
                  key={index}
                  to={`/${g.nama}`}
                  onClick={() => history.push(`/${g.nama}`)}
                  className="link nama-gunung"
                >
                  <div>{g.nama}</div>
                </NavLink>
              )
            })}
      </div>
    </div>
  )
}
