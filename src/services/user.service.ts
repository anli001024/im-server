import { getMongoRepository, MongoRepository } from 'typeorm'
import { Service } from 'typedi'
import { User } from 'entities'

@Service()
export class UserService {
    repository: MongoRepository<User>

    constructor() {
        this.repository = getMongoRepository(User)
    }

    async create(user: User): Promise<User> {
        return await this.repository.save(user)
    }

    async remove(id: string): Promise<User> {
        let user:User = await this.getOne(id);
        return await this.repository.remove(user);
    }

    async getAll(): Promise<Array<User>> {
        return await this.repository.find()
    }

    async getOne(id: string): Promise<User> {
        return await this.repository.findOne(id)
    }

}
