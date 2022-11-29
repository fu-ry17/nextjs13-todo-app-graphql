import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@ObjectType()
@Entity()
export class Todo extends BaseEntity{
   @Field(()=> Int)
   @PrimaryGeneratedColumn()
   id!: number
   
   @Field(()=> String)
   @Column()
   title!: string
   
   @Field(()=> Boolean)
   @Column({ default: false })
   completed!: boolean

   @Field(()=> Int)
   @Column()
   userId!: number
   
   @Field(()=> Date)
   @CreateDateColumn()
   createdAt!: Date
   
   @Field(()=> Date)
   @UpdateDateColumn()
   updatedAt!: Date
}