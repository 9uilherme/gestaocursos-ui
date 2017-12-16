import { Lancamento } from './../core/model';
import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ExtratoService {

  constructor(private http: Http) { }

  extratoUrl = 'http://localhost:5005/lancamento';

    buscarPorCodigoConta(codigo: number): Promise<any> {
      const headers = new Headers();
      headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

      return this.http.get(`${this.extratoUrl}/${codigo}`, { headers })
        .toPromise()
        .then(response =>  response.json());
    }

    filtrar(filtro : Object): Promise<any>{
      const headers = new Headers();
      headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
      headers.append('Content-Type', 'application/json');

      return this.http.post(`${this.extratoUrl}/`, JSON.stringify(filtro), { headers })
        .toPromise()
        .then(response =>  response.json());

    }

    
}
