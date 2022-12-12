import { IUser } from './user';

export interface IFondation {
  _id: string
  title: string;
  description: string;
  location: string;
  img: string;
  _ownerId: IUser;
  created_at: string;
  updated_at: string;
}
