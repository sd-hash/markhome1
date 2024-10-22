import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { Housinglocation } from '../hd';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article>
      <img class="listing-photo" [src]="housingLocation?.photo">
      <section class="listing-description">
        <h2 class="listing-heading">{{housingLocation?.name}}</h2>
        <p class="Listing-location">{{housingLocation?.city}}, {{housingLocation?.state}}
        </section>
        <section class="Listing-features">
          <h2 class="section-heading"> About this housing location</h2>

          <ul>
            <li> Units available: {{housingLocation?.availableUnits}}</li>
            <li> have wifi: {{housingLocation?.wifi}}</li>
            <li> have laundry: {{housingLocation?.laundry}}</li>
            </ul>
          </section>
          <section class="listing-apply">
            <h2 class="section-heading"> apply now to live here </h2>
            <button class="primary" type="button"> Aplly now</button>
            </section>
      </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: Housinglocation | undefined;

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params);
    this.housingLocation = this.housingService.getHoustingLocationById(housingLocationId);
  }

}
