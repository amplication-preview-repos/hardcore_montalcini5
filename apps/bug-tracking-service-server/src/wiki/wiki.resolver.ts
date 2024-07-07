import * as graphql from "@nestjs/graphql";
import { WikiResolverBase } from "./base/wiki.resolver.base";
import { Wiki } from "./base/Wiki";
import { WikiService } from "./wiki.service";

@graphql.Resolver(() => Wiki)
export class WikiResolver extends WikiResolverBase {
  constructor(protected readonly service: WikiService) {
    super(service);
  }
}
