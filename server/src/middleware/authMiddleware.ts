import { MiddlewareFn, NextFn } from "type-graphql";
import { User } from "../entities/User";
import { MyContext } from "../utils/types";


export const isAuth: MiddlewareFn<MyContext>= async ({ context }, next: NextFn) => {
   if(!context.req.session.userId){
     throw new Error('not authenticated')
   }

   const user = await User.findOneBy({ id: context.req.session.userId})
   if(!user){
      throw new Error('not authenticated')
   }
   return next()
}
