const fs = require('fs')
fs.writeFileSync('text.txt', 'the true brother and the real man on the job')

fs.appendFileSync('text.txt', 'the appended text')
