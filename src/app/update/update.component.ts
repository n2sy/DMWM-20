import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListPersonneService } from '../list-personne.service';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  p; // : Personne; [facultatif]
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private persServ: ListPersonneService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.persServ.getPersonByIdAPI(param.get('id')).subscribe(
        (response) => {
          console.log(this.p);
          this.p = response;
        },
        (error) => {
          console.log('Problem with getPersonById', error);
        }
      );
    });
  }

  updateThisPerson() {
    this.persServ.updatePersonneAPI(this.p).subscribe(
      (response) => {
        this.router.navigateByUrl('/cv');
      },
      (error) => {
        console.log('Problem with deletePerson', error);
      }
    );
  }
}
