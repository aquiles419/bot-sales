export interface ICategory {
  name: string;
  trip_id: string;
  created_at: Date;
  updated_at: Date;
}

export default interface ICategoryDTO {
  _id: string;
  name: string;
  trip_id: string;
  created_at: Date;
  updated_at: Date;
}

export interface ICreateCategoryDTO {
  _id: string;
  name: string;
  trip_id: string;
  created_at: Date;
  updated_at: Date;
}

export type IUpdateCategoryDTO = Partial<ICreateCategoryDTO> & { _id: string };

export interface IListCategoryFilters {
  per: number;
  page: number;
}
