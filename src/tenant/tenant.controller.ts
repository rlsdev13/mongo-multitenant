import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TenantService } from './tenant.service';
import { CreateTenantDto } from './dtos/createTenant.dto';
import { UpdateTenantDto } from './dtos/updateTenant.dto';

@Controller('tenant')
export class TenantController {

    constructor(
        private readonly tenantService : TenantService
    ){}

    @Get()
    getAllTenants(){
        return this.tenantService.getAllTenants();
    }

    @Get('/:id')
    getTenantById(@Param('id') id : string ){
        return this.tenantService.getTenantById( id );
    }

    @Post()
    createTenant(@Body() dataTenant : CreateTenantDto ){
        return this.tenantService.createTenant( dataTenant );
    }

    @Put('/:id')
    updateTenant(@Param('id') id : string, @Body() dataTenant : UpdateTenantDto){
        return this.tenantService.updateTenant(id, dataTenant);
    }

    @Delete('/:id')
    deleteTenant(@Param('id') id : string ){
        return this.tenantService.deleteTenant( id );
    }
    
}
