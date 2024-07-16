import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/homeComponents/home-page/home-page.component';
import { CartComponent } from './components/homeComponents/cart/cart.component';
import { AboutPageComponent } from './components/aboutComponents/about-page/about-page.component';
import { MenuPageComponent } from './components/menu-page/menu-page.component';
import { ChefsPageComponent } from './components/chefs-page/chefs-page.component';
import { SignupComponent } from './components/signup/signup.component';
import { ChefTableComponent } from './components/chef-table/chef-table.component';
import { ReservationTableComponent } from './components/reservation-table/reservation-table.component';
import { DishesTableComponent } from './components/dishes-table/dishes-table.component';
import { AddDishComponent } from './components/add-dish/add-dish.component';
import { ChefManageComponent } from './components/chef-manage/chef-manage.component';
import { AdminManageComponent } from './components/admin-manage/admin-manage.component';
import { LoginComponent } from './components/login/login.component';
import { EditDishComponent } from './components/edit-dish/edit-dish.component';
import { DisplayDishComponent } from './components/display-dish/display-dish.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'cart', component: CartComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'menu', component: MenuPageComponent },
  { path: 'chefs', component: ChefsPageComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'chefsTable', component: ChefTableComponent },
  { path: 'reservationTable', component: ReservationTableComponent },
  { path: 'dishesTable', component: DishesTableComponent },
  { path: 'addDish', component: AddDishComponent },
  { path: 'chefManage', component: ChefManageComponent },
  { path: 'adminManage', component: AdminManageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'editDish/:id', component: EditDishComponent },
  { path: 'displayDish/:id', component: DisplayDishComponent },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
