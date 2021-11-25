import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

export default function GunungBerapiDetail() {
  const [gunung, setGunung] = useState()
  const { namaGunung } = useParams()

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
      <h1 className="title">Gunung {namaGunung}</h1>
      <div className="gunung-detail">
        {gunung === undefined
          ? 'Loading...'
          : gunung.map(
              (g, index) =>
                g.nama.includes(namaGunung) && (
                  <div key={index}>
                    {/* <p>{g.nama}</p> */}
                    <p>
                      <strong>Bentuk: </strong>
                      {g.bentuk}
                    </p>
                    <p>
                      <strong>Geolokasi: </strong>
                      {g.geolokasi}
                    </p>
                    <p>
                      <strong>Tinggi: </strong>
                      {g.tinggi_meter}
                    </p>
                    <p>
                      <strong>Estimasi letusan terakhir: </strong>
                      {g.estimasi_letusan_terakhir}
                    </p>
                  </div>
                )
            )}
      </div>
    </div>
  )
}
