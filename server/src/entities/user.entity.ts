import { MinLength, IsNotEmpty } from 'class-validator'
import {
  Entity, BaseEntity, ObjectIdColumn, CreateDateColumn, UpdateDateColumn, Column
} from 'typeorm'

@Entity('user')
export class User extends BaseEntity {
  
  @ObjectIdColumn()
  id: string
  
  @MinLength(4, { message: 'username too short' })
  @IsNotEmpty({ message: 'must include username' })
  @Column()
  username: string

  @IsNotEmpty({ message: 'must include password' })
  @Column()
  password: string
  
  @Column()
  status: number
  
  @CreateDateColumn()
  createdAt: Date
  
  @UpdateDateColumn()
  updatedAt: Date
}
