import { Request, Response } from "express"
import { Session } from "express-session"
import { Redis } from "ioredis"
import { DataSource } from "typeorm"

export type MyContext = {
   req: Request & { session: Session & { userId: number }}
   res: Response
   redis: Redis
   conn: DataSource
}