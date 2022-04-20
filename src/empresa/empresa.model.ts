import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Tenant } from '../tenant/tenant.model';

export type EmpresaDocument = Empresa & Document;

@Schema({ timestamps : true })
export class Empresa {

    @Prop({
        required : [ true, 'El nombre de la empresa es requerido.']
    })
    nombre : string;

    @Prop({
        required : [ true, 'El id del tenant es requerido.'],
        type : mongoose.Schema.Types.ObjectId,
        ref : 'tenant'
    })
    tenant : Tenant;

}

export const EmpresaSchema = SchemaFactory.createForClass(Empresa);