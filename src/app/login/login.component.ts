import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  defaultSection = 'dmwm';
  defaultComment = 'Rien à signaler...';

  show = false;
  constructor(private authServ: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login(f) {
    this.authServ.seConnecter(f.value).subscribe(
      (response) => {
        console.log(response);
        this.show = false;
        localStorage.setItem('mytoken', response['token']);
        this.router.navigateByUrl('/cv');
      },
      (error) => {
        this.show = true;
        console.log(error);
      }
    );
  }

  // showForm(f) {
  //   console.log(f.value);
  // }

  // resetForm(f) {
  //   f.reset();
  // }

  // generatePwd(f) {
  //   f.setValue({
  //     "example": "",
  //     "login": "",
  //     "password": "generatedPwd123456",
  //     "section": "",
  //     "comment": ""
  //   })
  // }
  // generatePwdII(f) {
  //  f.form.patchValue({
  //   "password": "generatedPwd456789"
  //  })
  // }
}
