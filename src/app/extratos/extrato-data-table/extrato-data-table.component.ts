import { Component, OnInit, ViewChild } from '@angular/core';

import { ToastyService } from 'ng2-toasty';

import { ErrorHandlerService } from './../../core/error-handler.service';
import { ExtratoService } from './../extrato.service';

@Component({
  selector: 'app-extratos-data-table',
  templateUrl: './extrato-data-table.component.html',
  styleUrls: ['./extrato-data-table.component.css']
})
export class ExtratoDataTableComponent implements OnInit {


  filtro = {codigo: null, periodoInicio: null, periodoFim: null, valor: null};

  lancamentos = [];
  @ViewChild('tabela') grid;

  constructor(
    private extratoService: ExtratoService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit() {
  
  }

  filtrar(){
    this.extratoService.filtrar(this.filtro)
      .then(lancamentos => {
        this.lancamentos = lancamentos;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  buscarPorCodigoConta(codigo: number) {
    this.extratoService.buscarPorCodigoConta(codigo)
      .then(lancamentos => {
        this.lancamentos = lancamentos;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }


}
