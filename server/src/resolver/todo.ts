import { Arg, Ctx, Int, Mutation, Query, Resolver, UseMiddleware } from "type-graphql";
import { Todo } from "../entities/Todo";
import { isAuth } from "../middleware/authMiddleware";
import { MyContext } from "../utils/types";

@Resolver(Todo)
export class TodoResolver{
    @Query(()=> [Todo])
    @UseMiddleware(isAuth)
    async todos(@Ctx() {req}: MyContext,): Promise<Todo[]>{
       const todos = await Todo.find({ where: { userId: req.session.userId }, order: { createdAt: "DESC"}})
       return todos
    }

    @Query(()=> Todo, { nullable: true })
    @UseMiddleware(isAuth)
    async todo(@Arg('id', ()=> Int) id: number, @Ctx() { req }:MyContext): Promise<Todo | null>{
       const todo = await Todo.findOne({ where: { id, userId: req.session.userId }})
       if(!todo) return null
       return todo
    }

    @Mutation(()=> Todo)
    @UseMiddleware(isAuth)
    async createTodo(@Arg('title') title: string, @Ctx() { req }:MyContext): Promise<Todo>{
       const newTodo = Todo.create({ title, userId: req.session.userId })
       await newTodo.save()
       return newTodo
    }

    @Mutation(()=> Boolean)
    @UseMiddleware(isAuth)
    async updateTodo(@Ctx() {req}: MyContext, @Arg("id", ()=> Int) id: number, @Arg("title") title: string): Promise<boolean>{
       const todo = await Todo.findOne({ where: { id, userId: req.session.userId }})
       if(!todo) return false

       await Todo.update({ id}, { title })
       return true
    }

    @Mutation(()=> Boolean)
    @UseMiddleware(isAuth)
    async completeTodo(@Arg("id", ()=> Int) id: number, @Arg("completed") completed: boolean, @Ctx() {req}:MyContext): Promise<boolean>{
       const todo = await Todo.findOne({ where: { id, userId: req.session.userId }})
       if(!todo) return false

       await Todo.update({ id}, { completed })
       return true
    }

    @Mutation(()=> Boolean)
    @UseMiddleware(isAuth)
    async deleteTodo(@Arg("id", ()=> Int) id: number, @Ctx() { req } :MyContext): Promise<boolean>{
       const todo = await Todo.findOne({ where: { id, userId: req.session.userId }})
       if(!todo) return false

       await Todo.delete({ id })
       return true
    }
}