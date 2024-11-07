import { Module } from '@nestjs/common';
import { NotificationModule } from 'src/infrastructure/modules/NotificationModule';

@Module({
  imports: [NotificationModule],
})
export class AppModule {}
