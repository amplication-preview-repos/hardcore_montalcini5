import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WikiServiceBase } from "./base/wiki.service.base";

@Injectable()
export class WikiService extends WikiServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
