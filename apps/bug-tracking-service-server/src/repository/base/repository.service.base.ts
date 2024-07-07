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
  Repository as PrismaRepository,
  Bug as PrismaBug,
  File as PrismaFile,
  Wiki as PrismaWiki,
} from "@prisma/client";

export class RepositoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.RepositoryCountArgs, "select">
  ): Promise<number> {
    return this.prisma.repository.count(args);
  }

  async repositories(
    args: Prisma.RepositoryFindManyArgs
  ): Promise<PrismaRepository[]> {
    return this.prisma.repository.findMany(args);
  }
  async repository(
    args: Prisma.RepositoryFindUniqueArgs
  ): Promise<PrismaRepository | null> {
    return this.prisma.repository.findUnique(args);
  }
  async createRepository(
    args: Prisma.RepositoryCreateArgs
  ): Promise<PrismaRepository> {
    return this.prisma.repository.create(args);
  }
  async updateRepository(
    args: Prisma.RepositoryUpdateArgs
  ): Promise<PrismaRepository> {
    return this.prisma.repository.update(args);
  }
  async deleteRepository(
    args: Prisma.RepositoryDeleteArgs
  ): Promise<PrismaRepository> {
    return this.prisma.repository.delete(args);
  }

  async findBugs(
    parentId: string,
    args: Prisma.BugFindManyArgs
  ): Promise<PrismaBug[]> {
    return this.prisma.repository
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .bugs(args);
  }

  async findFiles(
    parentId: string,
    args: Prisma.FileFindManyArgs
  ): Promise<PrismaFile[]> {
    return this.prisma.repository
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .files(args);
  }

  async findWikis(
    parentId: string,
    args: Prisma.WikiFindManyArgs
  ): Promise<PrismaWiki[]> {
    return this.prisma.repository
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .wikis(args);
  }
}