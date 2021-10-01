import { Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'

const logger = new Logger('AppBootstrap')

const DEFAULT_APP_HORT = 'localhost'
const DEFAULT_APP_PORT = 3000

async function bootstrap(): Promise<void> {
    const app = await NestFactory.create(AppModule)

    const configService = app.get(ConfigService)

    const port = configService.get('PORT') || DEFAULT_APP_PORT
    const hostname = configService.get('HOST') || DEFAULT_APP_HORT

    await app.listen(port, hostname, () =>
        logger.log(`Server running at ${hostname}:${port}`),
    )
}
bootstrap()
