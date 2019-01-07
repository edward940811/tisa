import { Component, OnInit } from '@angular/core';
import { Sponser } from '../sponser';
import { SponserService } from '../sponser.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  sponsers : Sponser[] = [];
  constructor(private sponserService: SponserService) { }

  ngOnInit() {
    this.getSponsers();
  }
  getSponsers(): void {
    this.sponserService.getSponsers()
    .subscribe(sponsers => this.sponsers = sponsers.slice(1, 5));
  }

}
