import 'reflect-metadata'
import Koa from 'koa'
import IO from 'koa-socket-2'
import { Container } from 'typedi'
import { useMongoDB } from './customs'
import { routingConfigs } from './routing.options'
import { useSocketMiddlewares } from './socket'
import { useMiddlewares } from './koa.middlewares'
import { useKoaServer, useContainer } from 'routing-controllers'
if (useMongoDB) {
    require('./connection')
}

export const createServer = async (): Promise<Koa> => {

    const koa: Koa = new Koa()

    useMiddlewares(koa)

    const app: Koa = useKoaServer<Koa>(koa, routingConfigs)

    const io = new IO({
        ioOptions: {
            pingTimeout: 10000,
            pingInterval: 5000,
        },
    });

    // 注入应用
    io.attach(app);

    // if (process.env.NODE_ENV === 'production' && config.allowOrigin) {
    //     // @ts-ignore
    //     app._io.origins(config.allowOrigin);
    // }

    // @ts-ignore
    useSocketMiddlewares(io, app._io);

    io.on('message', (ctx, data) => {
        console.log('client sent data to message endpoint', data);
    });

    // @ts-ignore
    app.io.on('connection', async (socket) => {
        console.log(`  <<<< connection ${socket.id} ${socket.request.connection.remoteAddress}`);
        // await Socket.create({
        //     id: socket.id,
        //     ip: socket.request.connection.remoteAddress,
        // });
    
        socket.on('disconnect', async () => {
            console.log(`  >>>> disconnect ${socket.id}`);
            // await Socket.deleteOne({
            //     id: socket.id,
            // });
        });
    });

    useContainer(Container)

    return app
}
