import { Module } from "@nestjs/common";
import { WikiModuleBase } from "./base/wiki.module.base";
import { WikiService } from "./wiki.service";
import { WikiController } from "./wiki.controller";
import { WikiResolver } from "./wiki.resolver";

@Module({
  imports: [WikiModuleBase],
  controllers: [WikiController],
  providers: [WikiService, WikiResolver],
  exports: [WikiService],
})
export class WikiModule {}
