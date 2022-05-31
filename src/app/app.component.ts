import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    { 
      imageUrl: 'assets/tree.jpeg',
      title: 'Neat Tree',
      username: 'nature',
      content: 'I saw this neat tree today'
    },
    { 
      imageUrl: 'assets/mountain.jpeg',
      title: 'Snowy Mountain',
      username: 'mountainlover',
      content: 'Here is a picture of a snowy mountain'
    },
    { 
      imageUrl: 'assets/biking.jpeg',
      title: 'Mountain Biking',
      username: 'biking12222',
      content: 'I did some biking today'
    }
  ];
}
