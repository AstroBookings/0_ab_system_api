import { envFilePath } from '@ab/core/app-bootstrap.util';
import { LogModule } from '@ab/core/log/log.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './api/users/users.module';

const CONFIG_OPTIONS = {
  envFilePath,
  isGlobal: true,
  cache: true,
};

const configModule = ConfigModule.forRoot(CONFIG_OPTIONS);
const coreModules = [LogModule];
const apiModules = [UsersModule];

/**
 * The root module of the application.
 * @description Imports core and API modules.
 */
@Module({
  imports: [configModule, ...coreModules, ...apiModules],
})
export class AppModule {}
