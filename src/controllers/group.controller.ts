import { Body, Get, JsonController, Post, Delete, Param, UseInterceptor } from 'routing-controllers'
import { Environment } from '../../configs/environments'
import { GroupService } from '../services'
import { Group } from '../entities'

@JsonController()
export class GroupController {

    constructor(
        private groupService: GroupService,
    ) {
    }

    @Get('/groups')
    async getAll(): Promise<any> {
        const result = await this.groupService.getAll()
        return result
    }

    @Get('/group/:id')
    async getOne(@Param('id') id: string): Promise<any> {
        const group = await this.groupService.getOne(id);
        return { group }
    }
    
    @Delete('/group/:id')
    async delete(@Param('id') id: string): Promise<any> {
        const deleted = await this.groupService.remove(id);
        return { deleted }
    }

    @Post('/group')
    async create(@Body() group: Group): Promise<any> {
        const newGroup = new Group();
        newGroup.name = group.name;
        newGroup.type = group.type || 'simple';
        newGroup.status = group.status || 1;

        const created = await this.groupService.create(newGroup)
        return { created }
    }

}
