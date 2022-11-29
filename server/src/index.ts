import { ApolloServerPluginLandingPageLocalDefault, ApolloServerPluginLandingPageProductionDefault } from "apollo-server-core"
import { ApolloServer } from "apollo-server-express"
import connectRedis from "connect-redis"
import cors from "cors"
import dotenv from "dotenv"
import express from "express"
import session from "express-session"
import Redis from "ioredis"
import "reflect-metadata"
import { buildSchema } from "type-graphql"
import { COOKIE_NAME, __isProd___ } from "./config/constants"
import { AppDataSource } from "./config/data-source"
import { AuthResolver } from "./resolver/auth"
import { TodoResolver } from "./resolver/todo"
dotenv.config()

const main = async() => {
    // connect to database
    const conn = await AppDataSource.initialize()
    await conn.runMigrations()
     
    // redis server
    const redis = new Redis()
    const redisClient = connectRedis(session)

    // express server
    const app = express()
    // middleware
    // app.set('trust proxy', 1)
    app.use(cors({
        credentials: true,
        origin: "http://localhost:3000"
    }))
    app.use(session({
        secret: "uaidhiaousodp[-aiosiuoIUOIUiaosudjoisudaoiuIOu",
        name: COOKIE_NAME,
        store: new redisClient({ client: redis, disableTouch: false }),
        resave: false,
        saveUninitialized: false,
        cookie: {
          httpOnly: true,
          secure: __isProd___ ? true : false,
          maxAge: 1000*60*60*24*7, // 7 days
          sameSite: 'lax' // optional
        }
    }))

    // apolloserver
    const apolloSever = new ApolloServer({
        schema: await buildSchema({
            resolvers: [ AuthResolver, TodoResolver],
            validate: false
        }),
        context: ({ req, res }) => ({ req, res, redis, conn }),
        cache: "bounded",
        plugins: [
           __isProd___ ? ApolloServerPluginLandingPageProductionDefault() :
           ApolloServerPluginLandingPageLocalDefault({ embed: true, includeCookies: true })
        ]
    })

    await apolloSever.start()
    apolloSever.applyMiddleware({ app, cors: false })

    // port
    const PORT = process.env.PORT || 4000
    app.listen(PORT, ()=> {
        console.log(`Server is running on port ${PORT}...`)
    })

}

main().catch((err: any) => {
    console.log(err.message)
})