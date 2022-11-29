import { Field, InputType, ObjectType } from "type-graphql";
import { User } from "../entities/User";


@InputType()
export class LoginInput{
    @Field(()=> String)
    username!: string

    @Field(()=> String)
    password!: string
}

@InputType()
export class RegisterInput extends LoginInput{
    @Field(()=> String)
    email!: string
}

@InputType()
export class AvatarUsernameInput{
    @Field(()=> String)
    username!: string

    @Field(()=> String)
    avatar!: string
}

@ObjectType()
export class AuthErrors{
    @Field(()=> String)
    field!: string

    @Field(()=> String)
    message!: string
}

@ObjectType()
export class UserResponse{
    @Field(()=> User, { nullable: true })
    user?: User

    @Field(()=> [AuthErrors], { nullable: true })
    errors?: AuthErrors[]
}