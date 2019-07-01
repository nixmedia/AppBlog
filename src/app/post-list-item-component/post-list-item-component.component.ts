import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() PostTitle: string;

  @Input() Content: string;

  @Input() LoveIts: number;

  @Input() PostDateCreated: Date;

  constructor() { }

  ngOnInit() {
  }

  onLoveit(a){
    if(a==='yes'){
      this.LoveIts++;
    }
    else if(a==='no'){
      this.LoveIts--;
    }
  }

}
