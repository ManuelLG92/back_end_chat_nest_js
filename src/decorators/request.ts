import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { IRequestDetail } from '../shared/Util';

export const RequestDetails = createParamDecorator(
  (_data: string, context: ExecutionContext): IRequestDetail => {
    return parseRequestDetails(context.switchToHttp().getRequest());
  },
);

export const parseRequestDetails = (req: any): IRequestDetail => {
  return {
    ip: req.ip,
    originalUrl: req.originalUrl,
    hostname: req.headers.host,
    userAgent: req.headers['user-agent'],
  };
};
