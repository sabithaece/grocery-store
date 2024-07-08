import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import {FooterComponent } from './footer/footer.component';
import { HowIsItWorksComponent } from './how-is-it-works/how-is-it-works.component';
import { GroceryCategoriesComponent } from './grocery-categories/grocery-categories.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroComponent,FooterComponent,HowIsItWorksComponent,GroceryCategoriesComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'grocery-store';
}
