export default function urlBase() {
  return process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : process.env.PRODUCTION_BASE_URL
}
