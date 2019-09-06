import { MinLength, IsNotEmpty } from 'class-validator'
import {
  Entity, BaseEntity, ObjectIdColumn, CreateDateColumn, UpdateDateColumn, Column
} from 'typeorm'

@Entity('group')
export class Group extends BaseEntity {
  
  @ObjectIdColumn()
  id: string
  
  @MinLength(2, { message: 'group too short' })
  @IsNotEmpty({ message: 'must include group' })
  @Column()
  name: string

  @Column()
  type: string
  
  @Column()
  status: number
  
  @CreateDateColumn()
  createdAt: Date
  
  @UpdateDateColumn()
  updatedAt: Date
}
