import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  defaultSection = "dmwm";
  defaultComment = "Rien à signaler..."
  constructor() { }

  ngOnInit(): void {
  }

  showForm(f) {
    console.log(f.value);
  }

  resetForm(f) {
    f.reset();
  }

  generatePwd(f) {
    f.setValue({
      "example": "",
      "login": "",
      "password": "generatedPwd123456",
      "section": "",
      "comment": ""
    })
  }
  generatePwdII(f) {
   f.form.patchValue({
    "password": "generatedPwd456789"
   })
  }

}
