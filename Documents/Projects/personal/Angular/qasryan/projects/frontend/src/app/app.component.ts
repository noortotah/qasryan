import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent implements OnInit{
  title = 'frontend';
  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {
    this.httpClient.get('https://studentcenter-php.000webhostapp.com/students/').subscribe(
      result => {
        console.log( result );
      }
    );

    this.httpClient.post('https://studentcenter-php.000webhostapp.com/students/',
                          JSON.stringify( {first_name: 'noor', last_name: 'tota', email: 't@t.t' } )).subscribe(
      result => {
        console.log(result);
      }
    );
  }


  // images: string[] = [];

  // test(value: any): void{
  //   console.log(value);
  // }

  // getImages(): void {
  //   for (let index = 0; index < 10; index++) {
  //     this.images[index] = `https://picsum.photos/id/${index}${index}/200/300`;
  //     console.log(this.images);
  //   }
  // }
}
