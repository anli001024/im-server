import { getMongoRepository, MongoRepository } from 'typeorm'
import { Service } from 'typedi'
import { GroupMessage } from 'entities'

@Service()
export class GroupMessageService {
    repository: MongoRepository<GroupMessage>

    constructor() {
        this.repository = getMongoRepository(GroupMessage)
    }

    async create(item: GroupMessage): Promise<GroupMessage> {
        return await this.repository.save(item)
    }

    async remove(id: string): Promise<GroupMessage> {
        let item: GroupMessage = await this.getOne(id);
        return await this.repository.remove(item);
    }

    async getAll(): Promise<Array<GroupMessage>> {
        return await this.repository.find()
    }

    async getOne(id: string): Promise<GroupMessage> {
        return await this.repository.findOne(id)
    }
}
