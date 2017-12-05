import { RouterModule } from '@angular/router';
import { TurmaService } from './../turmas/turmas.service';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastyModule } from 'ng2-toasty';

import { AuthService } from './../seguranca/auth.service';
import { NavbarComponent } from './navbar/navbar.component';
import { AlunoService } from './../alunos/aluno.service';
import { CursosService } from './../cursos/cursos.service';
import { ErrorHandlerService } from '../core/error-handler.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    ToastyModule.forRoot()
    // colocar aqui o confirm dialog module, caso resolver usar
  ],
  declarations: [NavbarComponent],
  exports: [
    NavbarComponent,
    ToastyModule
  ],
  providers: [
    AlunoService,
    CursosService,
    TurmaService,
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    ErrorHandlerService,
    AuthService
  ]
})
export class CoreModule { }
