import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { TeaComponent } from './tea/tea.component';
import { ContactComponent } from './contact/contact.component';
import { TermComponent } from './term/term.component';
import { CartComponent } from './cart/cart.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AboutProductComponent } from './about-product/about-product.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, title: "Home"},
  {path: 'coffee', component: CoffeeComponent, title: "Shop Coffeee"},
  {path: 'tea', component: TeaComponent, title: "Shop Tea"},
  {path: 'contact', component: ContactComponent, title: "Contact page"},
  {path: 'term', component: TermComponent, title: "Terms and Conditions"},
  {path: 'cart', component: CartComponent, title: "Cart page"},
  {path: 'view-product/:id', component: ProductViewComponent, title: "Product Detains"},
  {path: 'sign-in', component: SignInComponent, title: "Sign In"},
  {path: 'sign-up', component: SignUpComponent, title: "Sign Up"},
  {path: 'search/:id', component: AboutProductComponent, title: "Product view"},
  {path: 'checkout', component: CheckoutComponent, title: "Checkout"},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
