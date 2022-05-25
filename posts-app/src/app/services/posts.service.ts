import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {API_URL} from "../../environments/environment";
import {IPost} from "../models/post";
import {MatSnackBar} from '@angular/material/snack-bar'



@Injectable()
export class PostsService {

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }
 
  getAllPosts() {
    const token = localStorage.getItem('token');
    const options = {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)
    };
    return this.http.get<IPost[]>(`${API_URL}/posts`);
  }

  getPostByID(id :  any)
  {
    const token = localStorage.getItem('token');
    const options = {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)
    };
    return this.http.get<IPost>(`${API_URL}/posts/${id}`, options);
  }

  createPost(title: string, content: string, imageUrl: string)
  {
    const token = localStorage.getItem('token');
    const options = {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)
    }
    return this.http.post<IPost>(`${API_URL}/posts`, {title, content, imageUrl}, options);
  }

  deletePost(id: number)
  {
    const token = localStorage.getItem('token');
    
    
    const options = {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)
    }
    return this.http.delete<IPost>(`${API_URL}/posts/${id}`, options)
  }

  updatePost(id: number, title: string, content: string, imageUrl: string)
  {
    const token = localStorage.getItem('token');

    const options = {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)
  
    }
    return this.http.put<IPost>(`${API_URL}/posts/${id}`, {title, content, imageUrl}, options)
  }

  postOwner(authorId: number | undefined): boolean {
    const userId = parseInt (localStorage.getItem('userId')+ '') ;
   
    if (authorId == userId){
      return true;
    }
    return false;
  }


  showMessage(msg: string)
  {
    this.snackBar.open(msg,'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }



}
