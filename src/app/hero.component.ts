import { Component } from '@angular/core';
import {Hero} from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  hero = new Hero (1, 'Capital American');
}
