import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPost } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  @Input()
  post: IPost | any;
  //postId = 0;

  constructor(public userService: UserService, public postService: PostsService,
     private router: Router){ }

  ngOnInit(): void {}

  
  verifyPostOwner(): boolean
  {
    let idP : number | undefined;
    idP = this.post?.author?.id;
    console.log(idP);

    return true;
  }

  removePost() 
  {
    console.log(this.post.id);
    this.postService.deletePost(parseInt(this.post?.id)).subscribe(
      () => {
      })
      this.router.navigateByUrl('/');
    

  }
   
  changeRoute(id: number)
  {
    console.log(typeof(id));
    
    this.router.navigateByUrl(`update-post/${id}`);
  }
 
}
