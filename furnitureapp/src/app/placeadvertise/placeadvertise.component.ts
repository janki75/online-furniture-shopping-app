import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-placeadvertise',
  templateUrl: './placeadvertise.component.html',
  styleUrls: ['./placeadvertise.component.css']
})
export class PlaceadvertiseComponent implements OnInit {

  constructor(private _route:Router) { }

  ngOnInit() {
  }

}
