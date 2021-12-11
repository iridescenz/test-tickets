import moment from 'moment'
import 'moment/locale/ru'

export function showCurrency(cur, value) {
  if (cur === 'euro') {
    return `${Math.ceil(value / euroRate)} €`
  } else if (cur === 'usd') {
    return `${Math.ceil(value / dollarRate)} $`
  } else if (cur === 'rub') {
    return `${value} ₽`
  }
  return `${value} ₽`
}

export const dateFormatter = (date) => {
  moment.locale('ru')
  let formattedDate = moment(date).format('ll')
  formattedDate = formattedDate.replace(/\./gi, '')
  const day = moment(date).format('dd')
  return `${formattedDate}, ${day[0].toUpperCase()}${day[1]}`
}

export const priceFormatter = (price) =>
  price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

export const validDateFormatter = (date) => {
  //format date to fix safari bug
  const data = date.split('.')
  const [day, month, year] = data
  return `20${year}-${month}-${day}`
}

export const dollarRate = 72.3
export const euroRate = 86.3
