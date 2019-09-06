import { getMongoRepository, MongoRepository } from 'typeorm'
import { Service } from 'typedi'
import { Group } from 'entities'

@Service()
export class GroupService {
    repository: MongoRepository<Group>

    constructor() {
        this.repository = getMongoRepository(Group)
    }

    async create(group: Group): Promise<Group> {
        return await this.repository.save(group)
    }

    async remove(id: string): Promise<Group> {
        let group: Group = await this.getOne(id);
        return await this.repository.remove(group);
    }

    async getAll(): Promise<Array<Group>> {
        return await this.repository.find()
    }

    async getOne(id: string): Promise<Group> {
        return await this.repository.findOne(id)
    }
}
