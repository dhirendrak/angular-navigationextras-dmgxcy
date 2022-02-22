import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productdetails-page',
  templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent implements OnInit {
  currentState$: Observable<any>;
  detailProduct:any;

  constructor(public route: ActivatedRoute,private router: Router) {
     this.detailProduct = this.router.getCurrentNavigation().extras.state;
      console.log(this.detailProduct.productdetails);
  }

  ngOnInit() {
    this.currentState$ = this.route.paramMap.pipe(
      map(() => window.history.state.productdetails.queryParams)
    ); 
   
  }
}
