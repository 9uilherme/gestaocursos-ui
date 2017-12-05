import { Component, OnInit, ViewChild } from '@angular/core';

import { ToastyService } from 'ng2-toasty';

import { ErrorHandlerService } from './../../core/error-handler.service';
import { AlunoService } from './../aluno.service';

@Component({
  selector: 'app-alunos-data-table',
  templateUrl: './alunos-data-table.component.html',
  styleUrls: ['./alunos-data-table.component.css']
})
export class AlunosDataTableComponent implements OnInit {


   alunos = [];
   @ViewChild('tabela') grid;

    constructor(
    private alunoService: AlunoService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService
    ) {}

  ngOnInit() {
    this.listarTodos();
  }


    listarTodos() {
    this.alunoService.listarTodos()
      .then(alunos => {
        this.alunos = alunos;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }


  excluir(aluno: any) {
    this.alunoService.excluir(aluno.codigo)
  .then(() => {
      this.grid.first = 0;
      this.listarTodos();
    this.toasty.success('Aluno(a) excluído com sucesso!');
  })
  .catch(erro => this.errorHandler.handle(erro));
}

}
