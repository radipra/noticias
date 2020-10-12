import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Welcome} from './modelos/datosRtve';
@Injectable({
  providedIn: 'root'
})
export class NoticiasRTVEService {

  private urlRTVE = 'http://www.rtve.es/api/noticias.json?size=20';

  constructor(private http: HttpClient) { }

  getNoticias() :Observable <Welcome>{
    return this.http.get<Welcome>(this.urlRTVE);
  }
}
