"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const graphql_1 = require("@nestjs/graphql");
const path_1 = require("path");
const app_gateway_module_1 = require("./gateway/app.gateway.module");
const user_module_1 = require("./user/user.module");
const prisma_module_1 = require("./prisma/prisma/prisma.module");
const native_language_module_1 = require("./native-language/native-language.module");
const learning_language_module_1 = require("./learning-language/learning-language.module");
const country_module_1 = require("./country/country.module");
const language_module_1 = require("./language/language.module");
const report_module_1 = require("./report/report.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            graphql_1.GraphQLModule.forRoot({
                introspection: true,
                autoSchemaFile: path_1.join(process.cwd(), 'src/schema.gql'),
            }),
            app_gateway_module_1.AppGatewayModule,
            user_module_1.UserModule,
            prisma_module_1.PrismaModule,
            native_language_module_1.NativeLanguageModule,
            learning_language_module_1.LearningLanguageModule,
            country_module_1.CountryModule,
            language_module_1.LanguageModule,
            report_module_1.ReportModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map