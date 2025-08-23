import { PictureDTO } from '@/src/models/picture/PictureDTO';

export type Picture = {
  resource?: {
    image_set: string;
    planet: string;
  };
  title: string;
  date: string;
  url: string;
  hdurl?: string;
  media_type: 'image' | 'video';
  explanation: string;
  thumbnail_url?: string;
  copyright?: string;
};

export const convertPictureDTOToEntity = (dto: PictureDTO): Picture => ({
  ...dto,
  date: new Date(dto.date).toLocaleDateString(),
});
