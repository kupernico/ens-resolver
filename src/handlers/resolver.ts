const Resolver = () => {
  const body = JSON.stringify({ version: 0.1 })
  const headers = { 'Content-type': 'application/json' }
  return new Response(body, { headers })
}

export default Resolver