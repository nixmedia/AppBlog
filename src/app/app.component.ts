import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Posts';

  date = new Date();
  loveits = 0;

  posts = [
            {
              title : "Mon premier post",
              content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
              loveIts : this.loveits,
              created_ad : this.date,
            },
            {
              title : "Mon deuxième post",
              content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
              loveIts : this.loveits,
              created_ad : this.date,
            },
            {
              title : "Encore un post",
              content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
              loveIts : this.loveits,
              created_ad : this.date,
            }
 ];
}
