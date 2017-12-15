import { Conta } from './../core/model';
import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ContaService {

  constructor(private http: Http) { }

  contasUrl = 'http://localhost:5005/contas/';

   listarTodos(): Promise<any> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.contasUrl}`, { headers })
      .toPromise()
      .then(response =>  response.json());

  }

    excluir(codigo: number): Promise<void> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.delete(`${this.contasUrl}/${codigo}`, { headers })
      .toPromise()
      .then(() => null);

  }

    adicionar(conta: Conta): Promise<Conta> {
      const headers = new Headers();
      headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
      headers.append('Content-Type', 'application/json');

      return this.http.post(`${this.contasUrl}`, JSON.stringify(conta), { headers })
        .toPromise()
        .then( response => response.json() );

    }

    atualizar(conta: Conta): Promise<Conta> {
      const headers = new Headers();
      headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
      headers.append('Content-Type', 'application/json');

      return this.http.put(`${this.contasUrl}/${conta.codigo}`,
       JSON.stringify(conta), { headers })
        .toPromise()
        .then( response =>  response.json());
    }

    buscarPorCodigo(codigo: number): Promise<Conta> {
      const headers = new Headers();
      headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

      return this.http.get(`${this.contasUrl}/${codigo}`, { headers })
        .toPromise()
        .then(response =>  response.json());
    }



}
