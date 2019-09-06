import { Body, Get, JsonController, Post, Delete, QueryParam, Param, UseInterceptor } from 'routing-controllers'
import { UserService } from '../services'
import { User } from '../entities'

@JsonController()
export class UserController {

    constructor(
        private userService: UserService,
    ) {
    }

    @Get('/users')
    async getUsers(): Promise<any> {
        const result = await this.userService.getAll()
        return result
    }

    @Get('/user/:id')
    async getUser(@Param('id') id: string): Promise<any> {
        const user = await this.userService.getOne(id);
        return { user }
    }
    
    @Delete('/user/:id')
    async deleteUser(@Param('id') id: string): Promise<any> {
        const deleted = await this.userService.remove(id);
        return { deleted }
    }

    @Post('/user')
    async create(@Body() user: User): Promise<any> {
        const newUser = new User();
        newUser.username = user.username;
        newUser.password = user.password;

        const created = await this.userService.create(newUser)
        return { created }
    }

}
