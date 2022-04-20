import { IsString, IsBoolean, IsOptional } from 'class-validator';

export class UpdateTenantDto{
    @IsString()
    @IsOptional()
    nombre : string;

    @IsBoolean()
    @IsOptional()
    isDeleted : boolean;
}