import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SiteModule } from './site/site.module';
import { IntranetModule } from './intranet/intranet.module';

@Module({
  imports: [SiteModule, IntranetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
