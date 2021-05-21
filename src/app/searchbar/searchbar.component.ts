import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListPersonneService } from '../list-personne.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent implements OnInit {
  filtredPerson;
  constructor(private persServ: ListPersonneService, private router: Router) {}

  ngOnInit(): void {}

  searchPerson(subname) {
    this.persServ.getFiltredListePersonnesAPI(subname).subscribe(
      (response) => {
        this.filtredPerson = response['allPersons'];
      },
      (error) => {
        console.log(error);
      }
    );
  }

  goToDetails(p, inp) {
    this.filtredPerson = [];
    inp.value = '';
    this.router.navigate(['cv', p._id]);
  }
}
