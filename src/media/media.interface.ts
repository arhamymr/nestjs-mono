export interface IUpload {
  buffer: Buffer;
  output: 'webp' | 'jpeg';
  quality?: number;
}

export interface IQueryUpload {
  dir: string;
  convert: 'webp';
}

export interface IConverter {
  file: Express.Multer.File;
  dir: string;
  output: 'webp';
}
