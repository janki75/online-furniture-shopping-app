import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private _route:Router) { }

  ngOnInit() {
  }
  onaboutus()
  {
    this._route.navigate(['usermenu/aboutus']);
  }
  oncontactus()
  {
    this._route.navigate(['usermenu/contactus']);
  }
  onmyadvertise()
  {
    this._route.navigate(['usermenu/myadvertise']);
  }
  onchangepassword()
  {
    this._route.navigate(['usermenu/changepassword']);
  }
  onviewprofile()
  {
    this._route.navigate(['usermenu/viewprofile']);
  }
  onfaqs()
  {
    this._route.navigate(['usermenu/faq']);
  }
  onterms()
  {
    this._route.navigate(['usermenu/terms']);
  }
  onstorelocator()
  {
    this._route.navigate(['usermenu/storelocator']);
  }
}
