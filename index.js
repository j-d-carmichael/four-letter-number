module.exports = (input, inRange) => {
  inRange = inRange || 5000
  const regex = RegExp(/^[a-zA-Z]{4}$/);
  if (!regex.test(input)) {
    throw new Error('four-letter-number expects the input to be 4 letters, got: ' + input)
  }
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let port = 0
  input.toLowerCase().split('').forEach((t) => {
    port += Number(Object.keys(alphabet)[Object.values(alphabet).indexOf(t)])
  })
  return inRange + port
}
