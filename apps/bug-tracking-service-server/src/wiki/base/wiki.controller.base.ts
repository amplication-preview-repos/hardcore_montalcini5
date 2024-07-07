/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { WikiService } from "../wiki.service";
import { WikiCreateInput } from "./WikiCreateInput";
import { Wiki } from "./Wiki";
import { WikiFindManyArgs } from "./WikiFindManyArgs";
import { WikiWhereUniqueInput } from "./WikiWhereUniqueInput";
import { WikiUpdateInput } from "./WikiUpdateInput";

export class WikiControllerBase {
  constructor(protected readonly service: WikiService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Wiki })
  async createWiki(@common.Body() data: WikiCreateInput): Promise<Wiki> {
    return await this.service.createWiki({
      data: {
        ...data,

        repository: data.repository
          ? {
              connect: data.repository,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        content: true,

        repository: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Wiki] })
  @ApiNestedQuery(WikiFindManyArgs)
  async wikis(@common.Req() request: Request): Promise<Wiki[]> {
    const args = plainToClass(WikiFindManyArgs, request.query);
    return this.service.wikis({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        content: true,

        repository: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Wiki })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async wiki(
    @common.Param() params: WikiWhereUniqueInput
  ): Promise<Wiki | null> {
    const result = await this.service.wiki({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        content: true,

        repository: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Wiki })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateWiki(
    @common.Param() params: WikiWhereUniqueInput,
    @common.Body() data: WikiUpdateInput
  ): Promise<Wiki | null> {
    try {
      return await this.service.updateWiki({
        where: params,
        data: {
          ...data,

          repository: data.repository
            ? {
                connect: data.repository,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          content: true,

          repository: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Wiki })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteWiki(
    @common.Param() params: WikiWhereUniqueInput
  ): Promise<Wiki | null> {
    try {
      return await this.service.deleteWiki({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          content: true,

          repository: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
