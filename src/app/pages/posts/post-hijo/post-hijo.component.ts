import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-hijo',
  templateUrl: './post-hijo.component.html',
  styleUrls: ['./post-hijo.component.css']
})
export class PostHijoComponent implements OnInit {

  @Input() mensaje: any;
  @Output() clickPost = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    // console.log('Haciendo Click!!')
    this.clickPost.emit(this.mensaje.id);
  }

}
