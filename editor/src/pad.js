var repeat = require('repeat-string')

module.exports = pad

var lineFeed = '\n'
var space = ' '

// Pad `value` with `level * tabSize` spaces.  Respects lines.  Ignores empty
// lines.
function pad(value, level, tabSize) {
  var values = value.split(lineFeed)
  var index = values.length
  var padding = repeat(space, level * tabSize)

  while (index--) {
    if (values[index].length !== 0) {
      values[index] = padding + values[index]
    }
  }

  return values.join(lineFeed)
}
