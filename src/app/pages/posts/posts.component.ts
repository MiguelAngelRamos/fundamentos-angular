import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  mensajes: any [] =[];

  constructor(private dataService: DataService) { }


  ngOnInit(): void {
    this.dataService.getPosts().subscribe((posts: any[]) => {
      this.mensajes = posts;
      console.log(this.mensajes);
    })
  }

  recibiendoId(id: number) {
    console.log('El id recibido es: ' + id);
  }

}
