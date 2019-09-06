import { MinLength, IsNotEmpty } from 'class-validator'
import {
  Entity, BaseEntity, ObjectIdColumn, CreateDateColumn, UpdateDateColumn, Column
} from 'typeorm'

@Entity('group_message')
export class GroupMessage extends BaseEntity {
  
  @ObjectIdColumn()
  id: string

  @Column()
  type: string
  
  @IsNotEmpty({ message: 'must include from_user_id' })
  @Column()
  from_user_id: number

  @IsNotEmpty({ message: 'must include to_user_id' })
  @Column()
  to_user_id: number

  @IsNotEmpty({ message: 'must include message' })
  @Column()
  message: string
  
  @Column()
  sended_at: Date

  @Column()
  status: number
  
  @CreateDateColumn()
  createdAt: Date
  
  @UpdateDateColumn()
  updatedAt: Date
}
