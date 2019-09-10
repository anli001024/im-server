import { Server } from 'http'
import { print } from './configs/utils'
import { Environment } from './configs/environments'
import { createServer } from './configs/application'
import * as bootstrap from './configs/bootstrap'
import WbeSocket from 'ws'

module.exports = (async(): Promise<Server> => {
  try {
    const app = await createServer()

    const Ws = new WbeSocket.Server({ port: 3002 });

    Ws.on('connection', function connection(ws) {
        ws.on('message', function incoming(message) {
          console.log('received: %s', message);
        });
      
        ws.send('something');
      });
    
    return app.listen(Environment.port, () => {
      print.log(`server listening on ${Environment.port}, in ${Environment.identity} mode.`)
      bootstrap.after()
    })
  } catch (e) {
    console.log(e)
  }
})()
