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


  lancamentos = [];
  @ViewChild('tabela') grid;

  constructor(
    private extratoService: ExtratoService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit() {

  }


  buscarPorCodigoConta() {
    this.extratoService.buscarPorCodigoConta(1)
      .then(lancamentos => {
        this.lancamentos = lancamentos;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }


}
