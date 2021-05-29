import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'app/shared/messages/notification.service';
import { LoginService } from './login.service';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  navigateTo: string

  constructor(private formBuilder: FormBuilder, 
              private loginService: LoginService, 
              private notificationService: NotificationService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      password: this.formBuilder.control('', [Validators.required])
    })

    //caso ninguém passe uma rota, ele irá para '/'
   this.navigateTo = this.activatedRoute.snapshot.params['to'] || btoa('/')
  }

  login(){
    this.loginService.login(this.loginForm.value.email,
                            this.loginForm.value.password)
      .subscribe(user => this.notificationService.notify(`Welcome, ${user.name}`),
                response => this.notificationService.notify(response.error.message),
                ()=>{
                  //Faz o caminho inverso do btoa
                  this.router.navigate([atob(this.navigateTo)])
                })
  }

}
