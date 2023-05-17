import _ from 'lodash'
import dayjs from 'dayjs'

export const removeValueEmpty = obj => {
  const result = _.pickBy(obj, function (value) {
    return !(
      value === undefined ||
      value === '' ||
      value === null ||
      value === []
    )
  })

  return result
}

export const formatTime = value => {
  return dayjs(value).format('dddd, DD/MM/YYYY')
}
export const formatDateTime = value => {
  return dayjs(value).format('DD-MM-YYYY HH:mm')
}
export const formatDateMonth = value => {
  return dayjs(value).format('DD/MM')
}
export const formatHours = value => {
  return dayjs(value).format('HH:mm')
}

export const ellipseAddress = address => {
  if (!address) return ''
  const match = address.match(
    /^(0x[a-zA-Z0-9]{3})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/
  )
  if (!match) return address
  return `${match[1]}…${match[2]}`
}

export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
})

export const getRotationDegrees = (prizeNumber, numberOfPrizes) => {
  const degreesPerPrize = 360 / numberOfPrizes

  const prizeRotation = degreesPerPrize * (numberOfPrizes - prizeNumber)

  return numberOfPrizes - prizeNumber > numberOfPrizes / 2
    ? -360 + prizeRotation
    : prizeRotation
}

export const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) //The maximum is exclusive and the minimum is inclusive
}
