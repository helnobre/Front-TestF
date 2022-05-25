import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPost } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
  @Input()
  post: IPost | any;
  postData = {
    title : '',
    content : '',
    imageUrl : ''
  }

  constructor(private router: Router, private postService: PostsService, private route: ActivatedRoute ) { }
  
  id = Number(this.route.snapshot.paramMap.get('id'));
  
  ngOnInit(): void {
 
    console.log(typeof(this.id));
    this.postService.getPostByID(this.id).subscribe(data => 
     {
       this.postData = data;
       console.log(data);
       
     })
 
  }


  update()
  {
     console.log(this.id);
    this.postService.updatePost(this.id, this.postData.title, 
      this.postData.content, this.postData.imageUrl)
    .subscribe(
      {
        next:() =>
        {
          localStorage.getItem('token');
          alert("Post updated successfully!");
          this.router.navigateByUrl('/home');
        } 
      })
  }
}

