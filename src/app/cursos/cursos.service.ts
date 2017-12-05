import { Curso } from './../core/model';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  constructor(private http: Http) { }

  cursosUrl = 'http://localhost:5005/cursos/';

  listarTodos(): Promise<any> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.cursosUrl}`, { headers })
      .toPromise()
      .then(response =>  response.json() );

  }

  excluir(codigo: number): Promise<void> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.delete(`${this.cursosUrl}/${codigo}`, { headers })
      .toPromise()
      .then(() => null);

  }

    adicionar(curso: Curso): Promise<Curso> {
      const headers = new Headers();
      headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
      headers.append('Content-Type', 'application/json');

      return this.http.post(`${this.cursosUrl}`, JSON.stringify(curso), { headers })
        .toPromise()
        .then( response => response.json() );

    }

    buscarPorCodigo(codigo: number): Promise<Curso> {
      const headers = new Headers();
      headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

      return this.http.get(`${this.cursosUrl}/${codigo}`, { headers })
        .toPromise()
        .then(response =>  response.json());
    }


  atualizar(curso: Curso): Promise<Curso> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers.append('Content-Type', 'application/json');

    return this.http.put(`${this.cursosUrl}/${curso.codigo}`,
    JSON.stringify(curso), { headers })
      .toPromise()
      .then(response =>  response.json());
  }

}
