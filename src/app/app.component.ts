import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Sponser } from './sponser';
import { Sponser_Test } from './sponser_test';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tisa';
  localApiUrl: string = 'http://localhost:8080/api/sponsers';
  SponserList: Sponser_Test[];

  ngOnInit() {
    this.getAllSponser();
  }
  constructor(private  http: HttpClient) {}

  // deleteTodoItem(event) {
  //   console.log(event);
  //   this.TodoItem = event;
  //   this.http.delete(this.apiUrl + '/' + event.id)
  //   .subscribe(res => {
  //     this.getAllTodo();
  //   });
  // }
  // saveNotify(event) {
  //   this.http.put(this.apiUrl, event, {responseType: 'text'})
  //   .subscribe(res => {
  //     this.getAllTodo();
  //   });
  // }
  // updateTodoItem(event) {
  //   this.http.put(this.apiUrl, event, {responseType: 'text'})
  //   .subscribe(res => {
  //     this.getAllTodo();
  //   });
  // }
  // addTodo(event) {
  //   // should call api
  //   console.log(event);
  //   this.items = event;
  //   this.http.post(this.apiUrl, event, {responseType: 'text'})
  //     .subscribe(res => {
  //       this.getAllTodo();
  //     });
  // }
  getAllSponser() {
      this.http.get<Sponser_Test[]>(this.localApiUrl)
      .subscribe(
        response => {
          this.SponserList = response;
          console.log(this.SponserList);
          // this.TodoList.push(
          //   {
          //     id: 1,
          //     setTop: true,
          //     type: '審核',
          //     name: '阿尼',
          //     date: new Date(2017, 12, 23),
          //     notify: true
          //   }
          // );
        }
      );
  }


}
