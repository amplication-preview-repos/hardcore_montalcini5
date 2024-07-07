import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BugServiceBase } from "./base/bug.service.base";

@Injectable()
export class BugService extends BugServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
