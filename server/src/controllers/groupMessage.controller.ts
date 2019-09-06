import { Body, Get, JsonController, Post, Delete, Param, UseInterceptor } from 'routing-controllers'
import { GroupMessageService } from '../services'
import { GroupMessage } from '../entities'

@JsonController()
export class GroupMessageController {

    constructor(
        private groupMessageService: GroupMessageService,
    ) {
    }

    @Get('/groupMessages')
    async getAll(): Promise<any> {
        const result = await this.groupMessageService.getAll()
        return result
    }

    @Get('/groupMessage/:id')
    async getOne(@Param('id') id: string): Promise<any> {
        const groupMessage = await this.groupMessageService.getOne(id);
        return { groupMessage }
    }
    
    @Delete('/groupMessage/:id')
    async delete(@Param('id') id: string): Promise<any> {
        const deleted = await this.groupMessageService.remove(id);
        return { deleted }
    }

    @Post('/groupMessage')
    async create(@Body() groupMessage: GroupMessage): Promise<any> {
        const newGroupMessage = new GroupMessage();
        newGroupMessage.from_user_id = groupMessage.from_user_id;
        newGroupMessage.group_id = groupMessage.group_id;
        newGroupMessage.message = groupMessage.message;
        newGroupMessage.type = groupMessage.type || 'simple';
        newGroupMessage.status = 1;

        const created = await this.groupMessageService.create(newGroupMessage)
        return { created }
    }

}
