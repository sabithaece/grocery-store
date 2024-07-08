import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  label: any = {
    name1: 'Download Now',
    name2: 'Know More',
  };

  styles: any = {
    backgroundFill: 'bg-secondary text-primary border-none shadow-md',
    noFill: 'bg-primary text-secondary border-primary shadow-md',
  };
}
