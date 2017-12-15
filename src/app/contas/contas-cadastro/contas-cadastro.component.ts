import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

import { ToastyService } from 'ng2-toasty';

import { ErrorHandlerService } from './../../core/error-handler.service';
import { ContaService } from './../conta.service';
import { Conta } from './../../core/model';

@Component({
  selector: 'app-conta-cadastro',
  templateUrl: './contas-cadastro.component.html',
  styleUrls: ['./contas-cadastro.component.css']
})
export class ContasCadastroComponent implements OnInit {

  contas = [];
  @ViewChild('tabela') grid;


  constructor(
    private contaService: ContaService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  conta = new Conta();

  ngOnInit() {
    const codigoConta = this.route.snapshot.params['codigo'];
    if (codigoConta) {
      this.carregarConta(codigoConta);
    }

    this.listarTodos();
  }

  get editando(){
    return Boolean(this.conta.codigo);
  }

  carregarConta(codigo: number) {
    this.contaService.buscarPorCodigo(codigo)
    .then(conta => {
      this.conta = conta;
    })
    .catch(erro => this.errorHandler.handle(erro));
  }

  salvar(form: FormControl) {
    if (this.editando) {
      this.atualizarConta(form);
    }else {
      this.adicionarConta(form);
    }
  }


  adicionarConta(form: FormControl) {
    console.log('Dados obtidos do formulario', this.conta);
    this.contaService.adicionar(this.conta)
    .then(() => {
      this.listarTodos();
      this.toasty.success('Conta adicionado com sucesso!');

      this.router.navigate(['/contas']);
    })
    .catch(erro => this.errorHandler.handle(erro));
  }

  atualizarConta(form: FormControl) {
    this.contaService.atualizar(this.conta)
    .then(conta => {
      this.conta = conta;

      this.router.navigate(['/contas']);
      this.toasty.success('Conta alterada com sucesso!');
    })
    .catch(erro => this.errorHandler.handle(erro));
  }

  listarTodos() {
    this.contaService.listarTodos()
      .then(contas => {
        this.contas = contas;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  novo(form: FormControl) {
     form.reset();

     setTimeout(function(){
      this.conta = new Conta();
     }.bind(this), 1 );


     this.router.navigate(['/contas/novo']);
  }
}
