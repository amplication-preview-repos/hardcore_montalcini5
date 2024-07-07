import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BugService } from "./bug.service";
import { BugControllerBase } from "./base/bug.controller.base";

@swagger.ApiTags("bugs")
@common.Controller("bugs")
export class BugController extends BugControllerBase {
  constructor(protected readonly service: BugService) {
    super(service);
  }
}
