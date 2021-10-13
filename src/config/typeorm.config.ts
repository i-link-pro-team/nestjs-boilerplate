import { ConfigModule, ConfigService } from '@nestjs/config'
import {
    TypeOrmModuleAsyncOptions,
    TypeOrmModuleOptions,
} from '@nestjs/typeorm'

const DEFAULT_PSQL_HOST = 'localhost'
const DEFAULT_PSQL_PORT = 5432

export const typeOrmConfig: TypeOrmModuleAsyncOptions = {
    imports: [ConfigModule],
    useFactory: (configService: ConfigService): TypeOrmModuleOptions => {
        const database = configService.get<string>('PSQL_DATABASE')

        if (database === undefined) {
            throw new Error(
                "Environment variable 'PSQL_DATABASE' cannot be undefined",
            )
        }

        if (configService.get('NO_MIGRATION') != 0) {
            console.log('Project is launched in the no migration mode')
        }

        return {
            type: 'postgres',
            entities: [`${__dirname}/../**/*.entity{.ts,.js}`],
            database,
            host: configService.get('PSQL_HOST') || DEFAULT_PSQL_HOST,
            port: configService.get('PSQL_PORT') || DEFAULT_PSQL_PORT,
            username: configService.get('PSQL_USERNAME'),
            password: configService.get('PSQL_PASSWORD'),
            //autoLoadEntities: true,
            synchronize: configService.get('NO_MIGRATION') != 0,
            dropSchema:
                configService.get('NO_MIGRATION') != 0 &&
                configService.get('DROP_DATABASE') != 0,
        }
    },
    inject: [ConfigService],
}
