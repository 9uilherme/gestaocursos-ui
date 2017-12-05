import { Turma } from './../core/model';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TurmaService {

  constructor(private http: Http) { }

  turmasUrl = 'http://localhost:5005/turmas/';


    listarTodos(): Promise<any> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.turmasUrl}`, { headers })
      .toPromise()
      .then(response =>  response.json() );

  }

  excluir(codigo: number): Promise<void> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.delete(`${this.turmasUrl}/${codigo}`, { headers })
      .toPromise()
      .then(() => null);

  }


    adicionar(turma: Turma): Promise<Turma> {
      const headers = new Headers();
      headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
      headers.append('Content-Type', 'application/json');

      return this.http.post(`${this.turmasUrl}`, JSON.stringify(turma), { headers })
        .toPromise()
        .then( response => response.json() );

    }

     buscarPorCodigo(codigo: number): Promise<Turma> {
      const headers = new Headers();
      headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

      return this.http.get(`${this.turmasUrl}/${codigo}`, { headers })
        .toPromise()
        .then(response =>  response.json());
    }

    atualizar(turma: Turma): Promise<Turma> {
      const headers = new Headers();
      headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
      headers.append('Content-Type', 'application/json');

      return this.http.put(`${this.turmasUrl}/${turma.codigo}`,
       JSON.stringify(turma), { headers })
        .toPromise()
        .then( response =>  response.json());
    }


}
