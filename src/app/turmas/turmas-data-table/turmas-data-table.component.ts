import { ActivatedRoute, Router } from '@angular/router';
import { ToastyService } from 'ng2-toasty';
import { TurmaService } from './../../turmas/turmas.service';
import { Component, OnInit, ViewChild } from '@angular/core';

import { ErrorHandlerService } from './../../core/error-handler.service';

@Component({
  selector: 'app-turmas-data-table',
  templateUrl: './turmas-data-table.component.html',
  styleUrls: ['./turmas-data-table.component.css']
})
export class TurmasDataTableComponent implements OnInit {

  constructor(
    private turmaService: TurmaService,
    private errorHandler: ErrorHandlerService,
    private toasty: ToastyService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

@ViewChild('tabela') grid;
  turmas = [];
  ngOnInit() {
    this.carregarTurmas();
  }

 carregarTurmas() {
    this.turmaService.listarTodos()
    .then(turmas => {
      this.turmas = turmas;
              console.log('this.turmas', this.turmas);
    })
    .catch(erro => this.errorHandler.handle(erro));
  }

    excluir(turma: any) {
    this.turmaService.excluir(turma.codigo)
  .then(() => {
      this.grid.first = 0;
      this.carregarTurmas();
    this.toasty.success('Aluno(a) excluído com sucesso!');
  })
  .catch(erro => this.errorHandler.handle(erro));
}

}
