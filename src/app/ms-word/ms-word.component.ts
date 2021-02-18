import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ms-word',
  templateUrl: './ms-word.component.html',
  styleUrls: ['./ms-word.component.css']
})
export class MsWordComponent implements OnInit {
  listeFonts = ['', 'Impact', 'Garamond', 'Phosphate'];
  bgColor : string;
  color;
  size;
  font;
  constructor() { }

  ngOnInit(): void {
  }

}
