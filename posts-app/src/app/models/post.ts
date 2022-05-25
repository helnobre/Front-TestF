import {IUser} from "./user";

export interface IPost {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  dateCreated: Date;
  author?: IUser;

}
