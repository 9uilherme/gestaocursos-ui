import { Aluno } from './../core/model';
import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AlunoService {

  constructor(private http: Http) { }

  alunosUrl = 'http://localhost:5005/alunos/';

   listarTodos(): Promise<any> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.alunosUrl}`, { headers })
      .toPromise()
      .then(response =>  response.json());

  }

    excluir(codigo: number): Promise<void> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.delete(`${this.alunosUrl}/${codigo}`, { headers })
      .toPromise()
      .then(() => null);

  }

    adicionar(aluno: Aluno): Promise<Aluno> {
      const headers = new Headers();
      headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
      headers.append('Content-Type', 'application/json');

      return this.http.post(`${this.alunosUrl}`, JSON.stringify(aluno), { headers })
        .toPromise()
        .then( response => response.json() );

    }

    atualizar(aluno: Aluno): Promise<Aluno> {
      const headers = new Headers();
      headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
      headers.append('Content-Type', 'application/json');

      return this.http.put(`${this.alunosUrl}/${aluno.codigo}`,
       JSON.stringify(aluno), { headers })
        .toPromise()
        .then( response =>  response.json());
    }

    buscarPorCodigo(codigo: number): Promise<Aluno> {
      const headers = new Headers();
      headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

      return this.http.get(`${this.alunosUrl}/${codigo}`, { headers })
        .toPromise()
        .then(response =>  response.json());
    }



}
