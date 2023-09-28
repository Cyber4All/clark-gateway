import { Router } from 'express';
import { Controller } from '../../interfaces/Controller';
import { AuthController } from './auth-module/AuthController';
import { FrameworkController } from './framework-module/FrameworkController';
import { GuidelineController } from './guideline-module/GuidelineController';
import { SearchController } from './search-module/SearchController';

export class StandardGuidelineServiceController implements Controller {
  buildRouter(): Router {
    const router = Router();

    // Routes go here
    router.use(new AuthController().buildRouter());
    router.use(new FrameworkController().buildRouter());
    router.use(new GuidelineController().buildRouter());
    router.use(new SearchController().buildRouter());

    return router;
  }
}
