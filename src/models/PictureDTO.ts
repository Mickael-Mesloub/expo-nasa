export type PictureDTO = {
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
