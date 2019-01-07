import { Component, OnInit } from '@angular/core';
import { Sponser } from '../sponser';
import {SponserService} from '../sponser.service'


@Component({
  selector: 'app-sponsers',
  templateUrl: './sponsers.component.html',
  styleUrls: ['./sponsers.component.scss']
})
export class SponsersComponent implements OnInit {

  sponsers : Sponser [];

  // sponser : Sponser = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  selectedSponser: Sponser;

  getSponsers(): void {
    this.sponserService.getSponsers().subscribe(sponsers => this.sponsers = sponsers);
  }

  onSelect(sponser: Sponser): void {
  this.selectedSponser = sponser;
  }

  constructor(private sponserService: SponserService) { 
  }

  ngOnInit() {
    this.getSponsers();
  }

}
