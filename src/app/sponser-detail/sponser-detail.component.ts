import { Component, OnInit, Input } from '@angular/core';
import { Sponser } from '../sponser';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { SponserService }  from '../sponser.service';



@Component({
  selector: 'app-sponser-detail',
  templateUrl: './sponser-detail.component.html',
  styleUrls: ['./sponser-detail.component.scss']
})
export class SponserDetailComponent implements OnInit {

  @Input() sponser : Sponser;
  constructor(
    private route: ActivatedRoute,
    private sponserService: SponserService,
    private location: Location)
    { }

  ngOnInit() {
    this.getSponser();
  }
  getSponser(): any {
    const id = +this.route.snapshot.paramMap.get('id');
    this.sponserService.getSponser(id)
      .subscribe(sponser => this.sponser = sponser);  }

  goBack():void {
    this.location.back();
  }

}
