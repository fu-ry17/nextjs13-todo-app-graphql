import argon2 from "argon2";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { COOKIE_NAME } from "../config/constants";
import { User } from "../entities/User";
import { LoginInput, RegisterInput, UserResponse } from "../schema/user-schema";
import { MyContext } from "../utils/types";
import { validLogin, validRegister } from "../utils/valid";

@Resolver(User)
export class AuthResolver{
   @Query(()=> User, { nullable: true})
   async me(@Ctx() {req}: MyContext): Promise<User | null>{
     console.log(req.headers.cookie)
     if(!req.session.userId){
        return null
     }

     const user = await User.findOneBy({ id: req.session.userId })
     if(!user) return null
      
     return user
   }

   @Mutation(()=> UserResponse)
   async register(@Arg("inputs") inputs: RegisterInput, @Ctx() { req, redis }: MyContext): Promise<UserResponse>{
      const errors = validRegister(inputs)
      if(errors) return { errors }

      const check1 = await User.findOneBy({ username: inputs.username })
      if(check1){
          return {
             errors: [{
                field: "username",
                message: "username is already in use"
             }]
          }
      }

      const check2 = await User.findOneBy({ email: inputs.email })
      if(check2){
          return {
             errors: [{
                field: "email",
                message: "account is already in use"
             }]
          }
      }

      // hash password
      const passHash = await argon2.hash(inputs.password)

      const user = User.create({ ...inputs, password: passHash })
      await user.save()

      req.session.userId = user.id
      return { user }
   }

   @Mutation(()=> UserResponse)
   async login(@Arg("inputs") inputs: LoginInput, @Ctx() { req }: MyContext): Promise<UserResponse>{
      const errors = validLogin(inputs)
      if(errors) return { errors }

      const user = await User.findOneBy({ username: inputs.username })
      if(!user){
          return {
             errors: [{
                field: "username",
                message: "no account was found!"
             }]
          }
      }

      //check password
      const passCheck = await argon2.verify(user.password, inputs.password)
      if(!passCheck){
          return {
            errors: [{
                field: "password",
                message: "wrong password, please try again"
            }]
          }
      }

      req.session.userId = user.id
      console.log(req.session)
      return { user }
   }

   @Mutation(()=> Boolean)
   async logout(@Ctx() { req, res }: MyContext): Promise<Boolean>{
      return new Promise(resp => req.session.destroy(err => {
         res.clearCookie(COOKIE_NAME)
         if(err){
            return resp(false)
         }
         return resp(true)
      }))
   }
 
}