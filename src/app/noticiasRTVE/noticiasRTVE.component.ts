import { Component, OnInit } from '@angular/core';
import { Noticia } from '../modelos/modeloDatosRtve';
import { NoticiasRTVEService } from '../noticias-rtve.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticiasRTVE.component.html',
  styleUrls: ['./noticiasRTVE.component.less']
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

}
