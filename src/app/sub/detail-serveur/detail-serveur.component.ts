import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListServService } from '../services/list-serv.service';

@Component({
  selector: 'app-detail-serveur',
  templateUrl: './detail-serveur.component.html',
  styleUrls: ['./detail-serveur.component.css']
})
export class DetailServeurComponent implements OnInit {
  myServeur;
  btnShow : boolean;

  constructor(private activatedRoute : ActivatedRoute,
    private router : Router,
    private servService : ListServService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (p) => {
        this.myServeur = this.servService.getServeurById(p.get('id'))
      }
    );

    this.activatedRoute.queryParamMap.subscribe(
      (q) => {
        this.btnShow = Number(q.get('allowEdit')) == 1 ? false : true   
        //this.btnShow = q.get('allowEdit') == '1' ? false : true   
      }
    )
  }

  goToEdit() {
    this.router.navigate(['/serveur', 'edit', this.myServeur.id])
    //ou bien    this.router.navigate(['/serveur/edit', this.myServeur.id])

  }

}
