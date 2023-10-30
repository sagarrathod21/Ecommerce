import { Component} from '@angular/core';
import { ServicesService } from '../services.service';
import { CoreService } from '../core.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent {

  cartItems: any[];

  constructor(private services: ServicesService, private coreServices: CoreService) {
  }
  
  ngOnInit(): void {
    this.getData();
  }
  
  quantity:number = 1;
  
  removeData(id: number){
    const value = confirm("do you really want to delete?")
    if(value){
      this.services.removeCart(id).subscribe({
        next: (res) => {
          this.coreServices.openSnackBar('You product is removed!', 'done')
          this.getData()
        },
        error: console.log
      })
    }
    else{
      this.coreServices.openSnackBar("Ok fine")
    }
  }
  
  getData(){
    this.services.getCartList().subscribe({
      next: (res) => {
        this.cartItems = res;
      },
      error: console.log
    })
  }
}
