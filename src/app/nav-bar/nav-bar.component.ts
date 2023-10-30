import { Component } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.less']
})
export class NavBarComponent {
  
  cartItemCount: number;

  constructor( private services: ServicesService) {
    // this.cartItemCount = cart.cartCount();
    // this.getData();
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.services.getCartList().subscribe({
      next: (res) => {
        this.cartItemCount = res.length;
      },
      error: console.log
    })
  }

  
}
