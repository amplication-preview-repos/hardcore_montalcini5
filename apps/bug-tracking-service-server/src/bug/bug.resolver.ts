import * as graphql from "@nestjs/graphql";
import { BugResolverBase } from "./base/bug.resolver.base";
import { Bug } from "./base/Bug";
import { BugService } from "./bug.service";

@graphql.Resolver(() => Bug)
export class BugResolver extends BugResolverBase {
  constructor(protected readonly service: BugService) {
    super(service);
  }
}
