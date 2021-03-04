import { Component, Input, OnInit } from '@angular/core';
import { Personne } from '../model/personne';
import { RecrueService } from '../recrue.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() persSelected : Personne;
  constructor(private recService : RecrueService) { }

  ngOnInit(): void {
  }

  ajouterRecrue() {
    this.recService.addRecrue(this.persSelected);
  }

}
