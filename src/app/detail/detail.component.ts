import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from '../model/personne';
import { RecrueService } from '../recrue.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() persSelected : Personne;
  constructor(private recService : RecrueService,
    private router : Router) { }

  ngOnInit(): void {
  }

  ajouterRecrue() {
    this.recService.addRecrue(this.persSelected);
  }

  goDetails() {
    this.router.navigate(['cv', this.persSelected.id ]);
  }

}
