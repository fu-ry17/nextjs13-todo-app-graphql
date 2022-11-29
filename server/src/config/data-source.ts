import { DataSource } from "typeorm";
import { Todo } from "../entities/Todo";
import { User } from "../entities/User";
import { __isProd___ } from "./constants";

export const AppDataSource = new DataSource({
    type: 'postgres',
    url: 'postgres://fury:kali@localhost:5432/todoapp',
    logging: !__isProd___,
    synchronize: true,
    entities: [User, Todo]
})

