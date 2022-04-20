import { Request, Response, NextFunction } from 'express';
import { HttpException, HttpStatus, Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common'

const headerTenant = process.env.TENANT_HEADER;

@Injectable() 
export class TenantMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction) {
        const header = req.headers[headerTenant] as String;
        if( !header ){
            throw new HttpException({
                status : HttpStatus.UNAUTHORIZED,
                error : "No existe el tenant en la peticion"
            }, HttpStatus.UNAUTHORIZED);
        }
        next();
    }
}

@Injectable()
export class isTenantRegisterMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction) {
        // TODO - Crear middleware para verificar si el tenant(BD) existe dentro de mongo
        next();
    }

}