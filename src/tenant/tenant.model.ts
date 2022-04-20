import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TenantDocument = Tenant & Document;

@Schema({ timestamps : true })
export class Tenant{
    @Prop({
        required : [ true, 'El nombre de la empresa es requerido.']
    })
    nombre : string;

    @Prop({
        required : true,
        default : false
    })
    isDeleted : boolean;
}

export const TenantSchema = SchemaFactory.createForClass(Tenant);