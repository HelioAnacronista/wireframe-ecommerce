export type htmlDTO = {
  title: string;
  description: string;
  img?: string;
};

export type ProductInfosDTO = {
  ProductDescription: string | htmlDTO;
  Characteristics: string | htmlDTO;
  TechnicalSpecifications: string | htmlDTO;
  Dimensions: string | htmlDTO;
  Contact: string | htmlDTO;
};
