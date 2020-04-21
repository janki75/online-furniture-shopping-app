import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private _route:Router,private _acroute:ActivatedRoute) { }
orderId:number;
owner:string;
cvv:number;
cardNumber:number;
  ngOnInit() {
    this.orderId=this._acroute.snapshot.params['orderId'];
  }

   onclick()
  {
    alert('Your order is successfully placed');
this._route.navigate(['usermenu/ordersummary',this.orderId]);
  }
}
