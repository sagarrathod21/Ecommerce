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
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.less']
})
export class CoffeeComponent {

  products: Products[] = [
    {img: '../../assets/coffee.jpg', 
    title: 'Barista Blend', price: 25, disPrice: 15., isStack: true, sale: false, rating: 4.5, date: new Date('2023-01-15')},

    {img: '../../assets/moka.jpg', 
    title: 'Moka Pot', price: 100, disPrice: 82, isStack: true, sale: true, rating: 3.5, date: new Date('2023-02-15')},

    {img: '../../assets/roast.jpg', 
    title: 'Sermon Dark Roast', price: 55, disPrice: 35, isStack: true, sale: false, rating: 2.5, date: new Date('2023-03-15')},

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
