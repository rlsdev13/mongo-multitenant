import { IsString } from 'class-validator';

export class CreateTenantDto{
    @IsString()
    nombre : string;
}