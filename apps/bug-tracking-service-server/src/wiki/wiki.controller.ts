import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WikiService } from "./wiki.service";
import { WikiControllerBase } from "./base/wiki.controller.base";

@swagger.ApiTags("wikis")
@common.Controller("wikis")
export class WikiController extends WikiControllerBase {
  constructor(protected readonly service: WikiService) {
    super(service);
  }
}
