import { Module } from "@nestjs/common";
import { BugModuleBase } from "./base/bug.module.base";
import { BugService } from "./bug.service";
import { BugController } from "./bug.controller";
import { BugResolver } from "./bug.resolver";

@Module({
  imports: [BugModuleBase],
  controllers: [BugController],
  providers: [BugService, BugResolver],
  exports: [BugService],
})
export class BugModule {}
