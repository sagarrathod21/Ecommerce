import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-about-product',
  templateUrl: './about-product.component.html',
  styleUrls: ['./about-product.component.less']
})
export class AboutProductComponent {

  quantity:number = 1;

  incValue(){
    this.quantity == this.quantity++;
  }

  decValue(){
    if(this.quantity > 1){
      this.quantity == this.quantity--;
    }
  }

  itemId: number;
  item: any;

  constructor(private route: ActivatedRoute, private productList: HomeComponent) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.itemId = +params['id'];
      this.item = this.productList.getById(this.itemId);
    });
  }
}
