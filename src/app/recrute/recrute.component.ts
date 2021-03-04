import { Component, OnInit } from '@angular/core';
import { Personne } from '../model/personne';
import { RecrueService } from '../recrue.service';

@Component({
  selector: 'app-recrute',
  templateUrl: './recrute.component.html',
  styleUrls: ['./recrute.component.css']
})
export class RecruteComponent implements OnInit {
  listRecrues : Personne[] = [];
  constructor(private recServ : RecrueService) { }

  ngOnInit(): void {
    this.listRecrues = this.recServ.getListRecrue();
  }

}
