import { Component } from '@angular/core';

interface Products{
  img: string;
  title: string;
  price: number;
  disPrice: number;
  isStack: boolean;
  sale: boolean;
  rating: number;
  date: Date;
}

@Component({
  selector: 'app-tea',
  templateUrl: './tea.component.html',
  styleUrls: ['../coffee/coffee.component.less']
})
export class TeaComponent {

  products: Products[] = [
    {img: '../../assets/green-tea.jpg', 
    title: 'Moroccan Peppermint', price: 250, disPrice: 150., isStack: true, sale: false, rating: 4.5, date: new Date('2023-01-15')},

    {img: '../../assets/koba.jpg', 
    title: 'Yabitu Koba', price: 9.99, disPrice: 12.99, isStack: true, sale: false, rating: 3.5, date: new Date('2023-03-15')},

    {img: '../../assets/infuser.jpg', 
    title: 'Tea Infuser', price: 10.99, disPrice: 15.99, isStack: false, sale: true, rating: 2.5, date: new Date('2023-02-15')},
  ]

  currentSortOption = 'MostPopular';

  sortAtoZ() {
    this.products.sort((a, b) => a.title.localeCompare(b.title));
    this.currentSortOption = 'AtoZ';
  }

  sortZtoA() {
    this.products.sort((a, b) => b.title.localeCompare(a.title));
    this.currentSortOption = 'ZtoA';
  }

  sortIncPrice() {
    this.products.sort((a, b) => a.price - b.price);
    this.currentSortOption = 'IncPrice';
  }

  sortDecPrice() {
    this.products.sort((a, b) => b.price - a.price);
    this.currentSortOption = 'DecPrice';
  }

  sortMostPopular() {
    this.products.sort((a, b) => b.rating - a.rating);
    this.currentSortOption = 'MostPopular';
  }

  sortMostRecent() {
    this.products.sort((a, b) => b.date.getTime() -a.date.getTime());
    this.currentSortOption = 'MostRecent';
  }

}
