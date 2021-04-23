import { getCustomRepository } from "typeorm"
import { UserRepository } from "../repositories/UsersRepository"


class UsersService{
    async create(email:string){
        const usersRepository = getCustomRepository(UserRepository);

        const userAlreadyExists = await usersRepository.findOne({email});

        if(userAlreadyExists){
            return userAlreadyExists;
        }

        const user = usersRepository.create({
            email
        });

        await usersRepository.save(user);

        return user;
    }
}

export { UsersService }