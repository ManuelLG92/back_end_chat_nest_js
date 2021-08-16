"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LearningLanguageModule = void 0;
const common_1 = require("@nestjs/common");
const learning_language_service_1 = require("./learning-language.service");
const learning_language_resolver_1 = require("./learning-language.resolver");
const prisma_module_1 = require("../prisma/prisma/prisma.module");
let LearningLanguageModule = class LearningLanguageModule {
};
LearningLanguageModule = __decorate([
    common_1.Module({
        imports: [
            prisma_module_1.PrismaModule
        ],
        providers: [learning_language_resolver_1.LearningLanguageResolver, learning_language_service_1.LearningLanguageService]
    })
], LearningLanguageModule);
exports.LearningLanguageModule = LearningLanguageModule;
//# sourceMappingURL=learning-language.module.js.map