const express = require('express')
const spawn = require('child_process').spawn
const createHandler = require('github-webhook-handler')
const handler = createHandler({ path: '/push', secret: 'update' })
const app = express()
// const log4js = require('log4js')
// log4js.configure({
//   appenders: {
//     "access": {
//       "type": "dateFile",
//       "filename": "log/deploy.log",
//       // "pattern": ".yyyy-MM-dd",
//       "alwaysIncludePattern": true,
//       "daysToKeep": 7,
//       "keepFileExt": true
//     }
//   },
//   categories: {
//     default: {
//       "appenders": ["access"],
//       "level": "debug"
//     }
//   }
// })
// const log = log4js.getLogger()
const myLocalIp = require('my-local-ip')

app.all('*', (req, res) => {
  handler(req, res, () => {
    if (req.method === 'POST') {
    } else {
      res.statusCode = 404
      res.end(`not support ${req.method} methods!`)
    }
  })
})


app.listen(8084, function() {
  console.log(`server is start at ${myLocalIp()}:8084!`)
  // log.debug(`server is start at ${myLocalIp()}:8083!`)
})

handler.on('error', function (err) {
  console.log('Error:', err.message)
})

handler.on('push', (event) => {
  console.log(`Received a push event for ${event.payload.repository.name} to ${event.payload.ref}`)
  rumCommand('sh', ['./deploy/build.sh'], txt => {
    // log.debug(txt)
    console.log(`Hooks update success: ${event.payload.repository.name} !`)
  })
})

function rumCommand(cmd, args, callback) {
  let response = ''
  const child = spawn(cmd, args)

  child.stdout.on('data', buffer => {
    response += buffer.toString()
    console.log(`stdout: ${buffer}`)
  })

  child.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`)
  })

  child.stdout.on('end', () => {
    callback(response)
  })
}
