import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {PostsService} from "../../services/posts.service";
import {MatSnackBar} from '@angular/material/snack-bar'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  singInData = {
    email: '',
    password: ''
  }
  constructor(private userService: UserService, private postService: PostsService, 
    private router: Router,  private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
 
  onSignIn() {
    this.userService.signIn(this.singInData.email, this.singInData.password)
      .subscribe({
        next: (data) => {
            localStorage.setItem('token', data.token);
            localStorage.setItem('name', data.name);
            localStorage.setItem('email', data.email);
            localStorage.setItem('userId', data.userId.toString());
            this.router.navigateByUrl('/home');
            this.postService.showMessage('Sign In feito com sucesso');
          
      },
      error: (error) => {
        this.postService.showMessage('Email or Password incorrecto!');
      }
        
        
      })
  }

  show(): void
  {
    
  }

}
