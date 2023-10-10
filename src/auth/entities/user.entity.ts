import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User {
  // _id: string // Mongo lo crea automaticamente

  _id?: string;

  @Prop({ required: true })
  name: string;

  @Prop({ unique: true, required: true })
  email: string;

  @Prop({ minlength: 6, required: true})
  password?: string;

  @Prop({ default: true }) // Opcion por defecto
  isActive: boolean;

  @Prop({ type: [String], default: ['user']}) // El type con String en mayuscula es para decirle a la base de datos el tipo
  roles: string[];
}


export const UserSchema = SchemaFactory.createForClass( User ); // Creamos el esquema usando la clase
