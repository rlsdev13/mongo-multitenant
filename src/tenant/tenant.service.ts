import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tenant } from './tenant.model';
import { CreateTenantDto } from './dtos/createTenant.dto';
import { UpdateTenantDto } from './dtos/updateTenant.dto';

@Injectable()
export class TenantService {

    constructor(
        @InjectModel(Tenant.name) private modelTenant : Model<Tenant>
    ){}

    async getAllTenants() : Promise<Tenant[]>{
        const query = {
            isDeleted : false
        }
        try {
            return await this.modelTenant.find( query );
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }

    async getTenantById( id : string ) : Promise<Tenant>{
        try {
            return await this.modelTenant.findById( id );
        } catch (error) {
            throw new BadRequestException(error);
        }
    }

    async createTenant( dataTenant : CreateTenantDto ) : Promise<Tenant>{
        try {
            const tenant = await this.modelTenant.create(dataTenant);
            await tenant.save();
            return tenant;
        } catch (error) {
            throw new BadRequestException(error);
        }
    }

    async deleteTenant( idTenant : string ) : Promise<Tenant>{
        const queryDelete = {
            isDeleted : true
        }
        try {
            return await this.modelTenant.findByIdAndUpdate( idTenant, queryDelete );
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }

    async updateTenant( idTenant : string, dataTenant : Partial<UpdateTenantDto> ) : Promise<Tenant>{
        try {
            return await this.modelTenant.findByIdAndUpdate( idTenant, dataTenant, { new : true } );
        } catch (error) {
            throw new BadRequestException(error);
        }
    }
    
}