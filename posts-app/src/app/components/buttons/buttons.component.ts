import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/models/post';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  constructor(public userService: UserService, private iPost: IPost){ }

  ngOnInit(): void {
  }

  /*
  verifyPostOwner(): boolean
  {
    let idP : number | undefined;
    idP = this.iPost.author?.id;
    console.log(idP);

    return true;
  }
*/
}
