import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  postData = {
    title : '',
    content : '',
    imageUrl : ''
  }
  

  constructor(private postService: PostsService, private router : Router) {
  
  }


  ngOnInit(): void {
  }

  create()
  {
    this.postService.createPost(this.postData.title, this.postData.content, this.postData.imageUrl)
    .subscribe( 
    {
      next: (response) => {
        localStorage.getItem('token');
        alert('Post Added Successfully')
        this.router.navigateByUrl('/home');
      },
      error : () => {
        alert('Faile Adding Post')
      }

    }
     )
    


  }


}
