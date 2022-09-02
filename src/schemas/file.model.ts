import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type FileDocument = File & Document;
@Schema({ timestamps: true })
export class File {
  @Prop()
  url: string;

  @Prop()
  key: string;
}

export const FileSchema = SchemaFactory.createForClass(File);
