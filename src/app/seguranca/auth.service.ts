import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  authUrl = 'http:/localhost:5005/auth';

  constructor(private http: Http) { }

  /*
  login(usuario: string, senha: string): Promise<void> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    const bory = `username=${usuario}&password=${senha}`;

    this.http.post()
  }
*/
}
