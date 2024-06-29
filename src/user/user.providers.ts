import { User } from "src/db/entity/user.entity";
import { DataSource } from "typeorm";



export const userProviders = [
    {
        provide: "USER_REPOSITORY",
        useFactory: (dataSource : DataSource) => dataSource.getRepository(User),
        inject: ["DATA_SOURCE"]
    }
]