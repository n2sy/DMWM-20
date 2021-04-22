import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListServService } from '../services/list-serv.service';

@Component({
  selector: 'app-edit-serveur',
  templateUrl: './edit-serveur.component.html',
  styleUrls: ['./edit-serveur.component.css']
})
export class EditServeurComponent implements OnInit {
  selectedServeur;
  constructor(private activatedRoute : ActivatedRoute,
    private router : Router,
    private servService : ListServService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (p) => {
        this.selectedServeur = this.servService.getServeurById(p.get('id'))
      }
    );
 }

  valider() {
    //this.router.navigateByUrl('/serveur');
    this.router.navigate(['/serveur', this.selectedServeur.id], {queryParams : {allowEdit : 1}});

  }

}
