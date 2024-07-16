import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/homeComponents/banner/banner.component';
import { BlogComponent } from './components/homeComponents/blog/blog.component';
import { CartComponent } from './components/homeComponents/cart/cart.component';
import { FooterComponent } from './components/homeComponents/footer/footer.component';
import { HeaderComponent } from './components/homeComponents/header/header.component';
import { HomePageComponent } from './components/homeComponents/home-page/home-page.component';
import { IntroVideoComponent } from './components/homeComponents/intro-video/intro-video.component';
import { PopularDishesComponent } from './components/homeComponents/popular-dishes/popular-dishes.component';
import { PopularMenuComponent } from './components/homeComponents/popular-menu/popular-menu.component';
import { ReservationPartComponent } from './components/homeComponents/reservation-part/reservation-part.component';
import { ReviewPartComponent } from './components/homeComponents/review-part/review-part.component';
import { AboutPageComponent } from './components/aboutComponents/about-page/about-page.component';
import { ChefsPartComponent } from './components/homeComponents/chefs-part/chefs-part.component';
import { MenuPageComponent } from './components/menu-page/menu-page.component';
import { ChefsPageComponent } from './components/chefs-page/chefs-page.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminManageComponent } from './components/admin-manage/admin-manage.component';
import { ChefManageComponent } from './components/chef-manage/chef-manage.component';
import { ChefTableComponent } from './components/chef-table/chef-table.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { DishesTableComponent } from './components/dishes-table/dishes-table.component';
import { ReservationTableComponent } from './components/reservation-table/reservation-table.component';
import { AddDishComponent } from './components/add-dish/add-dish.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';
import { EditDishComponent } from './components/edit-dish/edit-dish.component';
import { DisplayDishComponent } from './components/display-dish/display-dish.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    BlogComponent,
    CartComponent,
    FooterComponent,
    HeaderComponent,
    HomePageComponent,
    IntroVideoComponent,
    PopularDishesComponent,
    PopularMenuComponent,
    ReservationPartComponent,
    ReviewPartComponent,
    AboutPageComponent,
    ChefsPartComponent,
    MenuPageComponent,
    ChefsPageComponent,
    SignupComponent,
    AdminManageComponent,
    ChefManageComponent,
    ChefTableComponent,
    UsersTableComponent,
    DishesTableComponent,
    ReservationTableComponent,
    AddDishComponent,
    LoginComponent,
    FilterPipe,
    EditDishComponent,
    DisplayDishComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
