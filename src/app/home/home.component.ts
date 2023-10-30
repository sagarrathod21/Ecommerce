import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { Injectable } from '@angular/core';
declare var $: any;

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements AfterViewInit {

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    const sliderElement = $('.main__sliding');
  
      sliderElement.slick({
          autoplay: true,
          autoplaySpeed: 2000,
          dots: true,
          infinite: true,
      });
    }
  

  products = [
    {id: 0,
    img: '../../assets/coffee.jpg', 
    title: 'Barista Blend', select: 'Select Capacity',
    capacity: [{pakage: '250 Kg', pricee: 2500}, {pakage: '500 Kg', pricee: 5000}, {pakage: '750 Kg', pricee: 7500}, {pakage: '1 Kg', pricee: 250}],
    desc: 'Use this paragraph to describe your product. Add information that your users may find interesting. You can edit text on your website by double clicking on it. Try now.',
    price: 2500, disPrice:2100, isStack: true, sale: false, rating: 4.5, date: new Date('2023-01-15')},

    {id: 1,
    img: '../../assets/moka.jpg', 
    title: 'Moka Pot', select: '',
    capacity: 'Moka Pot',
    desc: 'Use this paragraph to describe your product. Add information that your users may find interesting. You can edit text on your website by double clicking on it. Try now.',
    price: 1000, disPrice: 500, isStack: true, sale: true, rating: 3.5, date: new Date('2023-02-15')},

    {id: 2, 
    img: '../../assets/green-tea.jpg', 
    title: 'Moroccan Peppermint', select: 'Select Package Unit',
    capacity: [{pakage: '10 Units', pricee: 150}, {pakage: '20 Units', pricee: 300}, {pakage: '30 Units', pricee: 450}],
    desc: 'Use this paragraph to describe your product. Add information that your users may find interesting. You can edit text on your website by double clicking on it. Try now.',
    price: 150, disPrice: 35, isStack: true, sale: false, rating: 2.5, date: new Date('2023-03-15')},
    
    {id: 3, 
    img: '../../assets/roast.jpg', 
    title: 'Sermon Dark Roast', select: 'Select Pocket Size',
    capacity: [{pakage: '200 G', pricee: 500}, {pakage: '250 G', pricee: 625}, {pakage: '500 G', pricee: 1250}],
    desc:'Use this paragraph to describe your product. Add information that your users may find interesting. You can edit text on your website by double clicking on it. Try now.',
    price: 1250, disPrice:500, isStack: true, sale: false, rating: 4.5, date: new Date('2023-01-15')},

    {id: 4, 
    img: '../../assets/infuser.jpg', 
    title: 'Tea Infuser', select: '',
    capacity: '',
    desc: 'Use this paragraph to describe your product. Add information that your users may find interesting. You can edit text on your website by double clicking on it. Try now.',
    price: 100, disPrice: 82, isStack: false, sale: true, rating: 3.5, date: new Date('2023-02-15')},

    {id: 5, 
    img: '../../assets/koba.jpg', 
    title: 'Yabitu Koba', select: 'Select Capacity',
    capacity: [{pakage: '0.5 Kg', pricee: 250}, {pakage: '1 Kg', pricee: 500}, {pakage: '1.5 Kg', pricee: 750}, {pakage: '2 Kg', pricee: 1000}],
    desc: 'Use this paragraph to describe your product. Add information that your users may find interesting. You can edit text on your website by double clicking on it. Try now.',
    price: 1000, disPrice: 250, isStack: true, sale: false, rating: 2.5, date: new Date('2023-03-15')},
  ]

  getById(id:number){
    return this.products.find(product => (product.id === id));
  }

  getByPrice(pakage: string){
    return this.products.find(pro => (pro.capacity === pakage));
  }

  seller = [
    {img: '../../assets/moka.jpg', 
    title: 'Moka Pot', price: 1000, disPrice: 500, isStack: true, sale: true, rating: 3.5, date: new Date('2023-02-15')},

    {img: '../../assets/infuser.jpg', 
    title: 'Tea Infuser', price: 100, disPrice: 82, isStack: false, sale: true, rating: 3.5, date: new Date('2023-02-15')},

    {img: '../../assets/koba.jpg', 
    title: 'Yabitu Koba', price: 55, disPrice: 35, isStack: true, sale: false, rating: 2.5, date: new Date('2023-03-15')},
  ]

  onView(ele:any)
  {
    //  this.data.ind=ele;
  }
}
