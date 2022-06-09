import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-hijo',
  templateUrl: './post-hijo.component.html',
  styleUrls: ['./post-hijo.component.css']
})
export class PostHijoComponent implements OnInit {

  @Input() mensaje: any;
  constructor() { }

  ngOnInit(): void {
  }

}
