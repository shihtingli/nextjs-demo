import { parseISO, format } from 'date-fns'

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  debugger
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}

export const demoFn = (date) => {
  return format(date, 'LLLL d, yyyy')
}
