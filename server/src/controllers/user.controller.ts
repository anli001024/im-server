import { Body, Get, JsonController, Post, QueryParam, Param, UseInterceptor } from 'routing-controllers'
import { Environment } from '../../configs/environments'



@JsonController()
export class UserController {
  
  constructor(
    
  ) {
  }
  
  @Get('/userList')
  async getUserList(): Promise<any> {
    
    return `getUserList`
  }

  @Get('/user/:id')
  async getUser(@Param('id') id: string): Promise<any> {
    
    return `hello on ${id}.`
  }

}
