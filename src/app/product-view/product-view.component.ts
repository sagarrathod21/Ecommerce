import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute,ParamMap ,Params} from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CoreService } from '../core.service';
import { HttpClient } from '@angular/common/http';
import { ServicesService } from '../services.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.less']
})
export class ProductViewComponent implements OnInit {

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

  form: FormGroup

  constructor(
    private route: ActivatedRoute, 
    private productList: HomeComponent,
    private coreServices: CoreService,
    private http: HttpClient,
    private services: ServicesService,
    private fb: FormBuilder, 
    ) {
      this.form = this.fb.group({
        quantity: [''],
        title: ['']
      })
    }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.itemId = +params['id'];
      this.item = this.productList.getById(this.itemId);
    });
  }

  onSubmit(id: number){
    if(true){
      this.http.get<any>('http://localhost:3000/cartList')
    .subscribe( res => {
      const user = res.find((a: any) => {
        return a.title === this.item.title;
      });

      if(user){
        this.coreServices.openSnackBar('Product already exists!')
      }
      else{
        const product = {
          img: this.item.img,
          title: this.item.title,
          price: this.item.price,
          quantity : this.form.value.quantity
        }
        
        this.services.addCart(product).subscribe({
          next: (val: any) =>{
            this.coreServices.openSnackBar('Product added Successfully!')
            // this.router.navigate(['/sign-in']);
          },
          error: (err: any) =>{
            console.error(err);
          }
        })
      }
    });
    }
  }
}
