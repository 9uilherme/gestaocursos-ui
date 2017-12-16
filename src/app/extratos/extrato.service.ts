import { Lancamento } from './../core/model';
import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ExtratoService {

  constructor(private http: Http) { }

  extratoUrl = 'http://localhost:5005/extrato/';

    buscarPorCodigoConta(codigo: number): Promise<Lancamento> {
      const headers = new Headers();
      headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

      return this.http.get(`${this.extratoUrl}/${codigo}`, { headers })
        .toPromise()
        .then(response =>  response.json());
    }
}
