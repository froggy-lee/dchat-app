import React, { useState, useEffect } from 'react'
import LineChart from '/src/components/Chart/LineChart'
import axios from 'axios'

const MarketLineChart = ({
  id,
  days,
  currency,
  borderColor,
  color,
  options
}) => {
  const [dataChart, setDataChart] = useState()

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`
      )
      .then(response => {
        setDataChart(response?.data?.prices)
      })
      // eslint-disable-next-line no-console
      .catch(error => console.log('error: ', error))
  }, [currency, days, id])

  const data = () => {
    return {
      labels: dataChart?.map(coin => {
        let date = new Date(coin[0])
        let time =
          date.getHours() > 12
            ? `${date.getHours() - 12} : ${date.getMinutes()} PM`
            : `${date.getHours()}:${date.getMinutes()} AM`
        return days === 1 ? time : date.toLocaleDateString()
      }),
      datasets: [
        {
          data: dataChart?.map(coin => coin[1]),
          borderColor: `${borderColor}`,
          borderWidth: 0.5,
          tension: 0.4,
          fill: 'start',
          backgroundColor: context => {
            const ctx = context.chart.ctx
            const gradient = ctx.createLinearGradient(0, 0, 0, 300)
            gradient.addColorStop(0, color[0])
            gradient.addColorStop(1, color[1])
            return gradient
          }
        }
      ]
    }
  }

  return <LineChart data={data()} options={options} />
}

export default MarketLineChart
