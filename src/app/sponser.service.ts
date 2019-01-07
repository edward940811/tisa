import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Sponser } from './sponser';
import { SPONSERS } from './mock-sponser';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class SponserService {
  //private sponserUrl =  "/api/sponsers";
  getSponsers(): Observable<Sponser[]> {
    this.messagesService.add('SponserService: fetched sponsers');
    return of(SPONSERS);  //this is RxJS
    //return this.http.get<Sponser[]>(this.sponserUrl); //this is http way
  }
  getSponser(id: number): Observable<Sponser> {
    // TODO: send the message _after_ fetching the hero
    //const url = `${this.sponserUrl}/${id}`;
    this.messagesService.add(`SponserService: fetched sponser id=${id}`);
    return of(SPONSERS.find(sponser => sponser.id === id));

    //return this.http.get<Sponser>(url).pipe();
  }

 
  constructor(private http: HttpClient,private messagesService: MessageService) { 

  }
}
