import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-react',
  templateUrl: './add-react.component.html',
  styleUrls: ['./add-react.component.css'],
})
export class AddReactComponent implements OnInit {
  addForm: FormGroup;
  listGenders = ['male', 'female'];
  ForbiddenTab = ['walid', 'yasmine'];
  constructor() {}

  ngOnInit(): void {
    this.addForm = new FormGroup({
      infos: new FormGroup({
        name: new FormControl(null, [
          Validators.required,
          this.forbiddenNames.bind(this),
        ]),
        age: new FormControl(null),
      }),
      'e-address': new FormControl(null, [
        Validators.required,
        Validators.email,
      ]),
      gender: new FormControl('male'),
      skills: new FormArray([]),
    });
  }

  showForm() {
    console.log(this.addForm);
  }

  get FormSkills() {
    return <FormArray>this.addForm.get('skills');
  }

  addSkill() {
    let Ctrl = new FormControl(null, Validators.required);
    this.FormSkills.push(Ctrl);
  }

  forbiddenNames(ctrl: FormControl) {
    if (this.ForbiddenTab.indexOf(ctrl.value) != -1)
      return { nameIsForbidden: true };
    else return null; //{'nameIsForbidden' : false}
  }
}
