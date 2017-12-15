import { Component, OnInit, ViewChild } from '@angular/core';

import { ToastyService } from 'ng2-toasty';

import { ErrorHandlerService } from './../../core/error-handler.service';
import { ContaService } from './../conta.service';

@Component({
  selector: 'app-conta-data-table',
  templateUrl: './contas-data-table.component.html',
  styleUrls: ['./contas-data-table.component.css']
})
export class ContasDataTableComponent implements OnInit {


  contas = [];
   @ViewChild('tabela') grid;

    constructor(
    private contaService: ContaService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService
    ) {}

  ngOnInit() {
    this.listarTodos();
  }


    listarTodos() {
    this.contaService.listarTodos()
      .then(contas => {
        this.contas = contas;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }


  excluir(conta: any) {
    this.contaService.excluir(conta.codigo)
  .then(() => {
      this.grid.first = 0;
      this.listarTodos();
    this.toasty.success('Conta excluída com sucesso!');
  })
  .catch(erro => this.errorHandler.handle(erro));
}

}
