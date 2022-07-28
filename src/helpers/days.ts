import moment from 'moment'

export const thisDay = new Date()

export const today = moment(new Date()).utc().format()

export const lastWeek = moment(new Date(thisDay.getTime() - 7 * 24 * 60 * 60 * 1000))
  .utc()
  .format()

export const lastTwoWeeks = moment(new Date(thisDay.getTime() - 14 * 24 * 60 * 60 * 1000))
  .utc()
  .format()

export const lastMonth = moment(new Date(thisDay.getTime() - 30 * 24 * 60 * 60 * 1000))
  .utc()
  .format()

export const lastYear = moment(new Date(thisDay.getTime() - 365 * 24 * 60 * 60 * 1000))
  .utc()
  .format()

export const tomorrow = moment(new Date(thisDay.getTime() + 24 * 60 * 60 * 1000))
  .utc()
  .format()

export const yesterday = moment(new Date(thisDay.getTime() - 24 * 60 * 60 * 1000))
  .utc()
  .format()

export const simplifiedToday = moment(new Date()).format('YYYY-MM-DD')
