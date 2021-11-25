import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

export default function TipeDetail() {
  const { namaTipe } = useParams()
  const [tipe, setTipe] = useState()
  const [gunung, setGunung] = useState()

  const tipeApi = 'https://mocki.io/v1/60ee9d78-1043-4442-ae60-99d73454a4f1'

  const volcanoesApi =
    'https://mocki.io/v1/fbeb9c50-59b4-4a4c-a019-44a3dca8e026'

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
    <div className="tipe">
      <h1 className="title">Tipe {namaTipe}</h1>
      <div className="tipe-detail">
        {tipe === undefined
          ? 'Loading..'
          : tipe.map(
              (t, index) =>
                t.tipe.includes(namaTipe) && (
                  <div key={index}>
                    <p>
                      <strong>Deskripsi: </strong> {t.desc}
                    </p>
                  </div>
                )
            )}
        <h2>Gunung dengang Tipe {namaTipe}:</h2>
        {gunung === undefined
          ? 'Loading...'
          : gunung.map(
              (g, index) =>
                g.bentuk.includes(namaTipe) && (
                  <div key={index}>
                    <p>{g.nama}</p>
                  </div>
                )
            )}
      </div>
    </div>
  )
}
