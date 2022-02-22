import { Component, VERSION } from '@angular/core';
import { ActivatedRoute, NavigationStart, NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  appstate$: Observable<object>;

  constructor(public router: Router, public route: ActivatedRoute) {}

  ngOnInit() {
    this.appstate$ = this.router.events.pipe(
      filter(e => e instanceof NavigationStart),
      map(() => {
        const currentState = this.router.getCurrentNavigation();
        return currentState.extras.state;
      })
    );
  }

  productDetails() {

    let objToSend: NavigationExtras = {
            queryParams: {
            id: 1,
            productName: 'Netgear Cable Modem',
            productCode: 'CM700',
            description: 'Netgear Cable Modem compatible with all cables',
            prodRating: 4.9
            },
            skipLocationChange: false,
            fragment: 'top' 
        };


    this.router.navigate(['/productdetails'], { 
      state: { productdetails: objToSend }
    });
  }
}
