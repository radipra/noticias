import { Component, OnInit } from '@angular/core';
import { Noticia } from '../modelos/datosRtve';
import { NoticiasRTVEService } from '../noticias-rtve.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.less']
})
export class NoticiasComponent implements OnInit {

  noticias: Noticia[];

  constructor(private noticiasRTVEService: NoticiasRTVEService) { }

  ngOnInit(): void {
    this.getNoticias();
  }

  getNoticias(): void {
    this.noticiasRTVEService.getNoticias().subscribe(resp => this.noticias = resp.page.items);
  }
//prueba de comentario desde ide en web de gitub
}
