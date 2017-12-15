import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlunosCadastroComponent } from './alunos/alunos-cadastro/alunos-cadastro.component';
import { AlunosDataTableComponent } from './alunos/alunos-data-table/alunos-data-table.component';

import { CursosCadastroComponent } from './cursos/cursos-cadastro/cursos-cadastro.component';
import { CursosDatableComponent } from './cursos/cursos-datable/cursos-datable.component';

import { TurmasDataTableComponent } from './turmas/turmas-data-table/turmas-data-table.component';
import { TurmasCadastroComponent } from './turmas/turmas-cadastro/turmas-cadastro.component';

import { ContasCadastroComponent } from './contas/contas-cadastro/contas-cadastro.component';
import { ContasDataTableComponent } from './contas/contas-data-table/contas-data-table.component';


const routes: Routes = [
  { path: '', redirectTo: 'alunos', pathMatch: 'full' },
  { path: 'alunos', component: AlunosDataTableComponent },
  { path: 'alunos/novo', component: AlunosCadastroComponent },
  { path: 'alunos/:codigo', component: AlunosCadastroComponent },
  { path: 'cursos', component: CursosDatableComponent },
  { path: 'cursos/novo', component: CursosCadastroComponent },
  { path: 'cursos/:codigo', component: CursosCadastroComponent },
  { path: 'turmas', component: TurmasDataTableComponent },
  { path: 'turmas/novo', component: TurmasCadastroComponent },
  { path: 'turmas/:codigo', component: TurmasCadastroComponent },
  { path: 'contas', component: ContasDataTableComponent },
  { path: 'contas/novo', component: ContasCadastroComponent },
  { path: 'contas/:codigo', component: ContasCadastroComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
