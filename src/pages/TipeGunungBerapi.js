import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

export default function TipeGunungBerapi(props) {
  const [tipe, setTipe] = useState()
  const { history } = props

  const tipeApi = 'https://mocki.io/v1/60ee9d78-1043-4442-ae60-99d73454a4f1'

  useEffect(() => {
    axios
      .get(tipeApi)
      .then((response) => {
        return response.data
      })
      .then((data) => {
        setTipe(data)
        console.log(data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  console.log(tipe)

  return (
    <div className="tipe">
      <h1 className="title">Tipe - Tipe Gunung Berapi </h1>
      <div className="tipe-content">
        {tipe === undefined
          ? 'Loading...'
          : tipe.map((t, index) => {
              return (
                <NavLink
                  to={`/tipe/${t.tipe}`}
                  onClick={() => history.push(`/tipe/${t.tipe}`)}
                  className="link nama-tipe"
                >
                  <div key={index}>{t.tipe}</div>
                </NavLink>
              )
            })}
      </div>
    </div>
  )
}
