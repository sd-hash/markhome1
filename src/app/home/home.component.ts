import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent} from '../housing-location/housing-location';
import { Housinglocation } from '../hd';
import { HousingService } from '../housing.service';
@Component({
  selector: 'app-home',
  standalone: true,

  imports: [CommonModule, HousingLocationComponent],
  template: `
      <section>
    <form>
      <input type="text" placeholder="filter by city">
      <button class="primary" type="button"> Search</button>
    </form>
      </section>
      <section class="results">
      <app-housing-location *ngFor="let housinglocation of hdList" [housinglocation]="housinglocation"></app-housing-location>
      </section>
      `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    hdList: Housinglocation[]=[];
    housingService: HousingService = inject(HousingService);

    constructor() {
      this.hdList = this.housingService.getAllHousingLocations();
    }
      }

