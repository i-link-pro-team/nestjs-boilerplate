import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { config } from './config/config'

@Module({
    imports: [ConfigModule.forRoot(config)],
})
export class AppModule {}
