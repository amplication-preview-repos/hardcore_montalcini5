/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Wiki as PrismaWiki,
  Repository as PrismaRepository,
} from "@prisma/client";

export class WikiServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.WikiCountArgs, "select">): Promise<number> {
    return this.prisma.wiki.count(args);
  }

  async wikis(args: Prisma.WikiFindManyArgs): Promise<PrismaWiki[]> {
    return this.prisma.wiki.findMany(args);
  }
  async wiki(args: Prisma.WikiFindUniqueArgs): Promise<PrismaWiki | null> {
    return this.prisma.wiki.findUnique(args);
  }
  async createWiki(args: Prisma.WikiCreateArgs): Promise<PrismaWiki> {
    return this.prisma.wiki.create(args);
  }
  async updateWiki(args: Prisma.WikiUpdateArgs): Promise<PrismaWiki> {
    return this.prisma.wiki.update(args);
  }
  async deleteWiki(args: Prisma.WikiDeleteArgs): Promise<PrismaWiki> {
    return this.prisma.wiki.delete(args);
  }

  async getRepository(parentId: string): Promise<PrismaRepository | null> {
    return this.prisma.wiki
      .findUnique({
        where: { id: parentId },
      })
      .repository();
  }
}