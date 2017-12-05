import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

import { ToastyService } from 'ng2-toasty';

import { TurmaService } from './../../turmas/turmas.service';
import { CursosService } from './../../cursos/cursos.service';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { AlunoService } from './../aluno.service';
import { Aluno } from './../../core/model';

@Component({
  selector: 'app-alunos-cadastro',
  templateUrl: './alunos-cadastro.component.html',
  styleUrls: ['./alunos-cadastro.component.css']
})
export class AlunosCadastroComponent implements OnInit {

  alunos = [];
  @ViewChild('tabela') grid;


  constructor(
    private alunoService: AlunoService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService,
    private turmaService: TurmaService,
    private cursosService: CursosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  cursos = [];
  turmas = [];
  aluno = new Aluno();

  ngOnInit() {
    const codigoAluno = this.route.snapshot.params['codigo'];
    if (codigoAluno) {
      this.carregarAluno(codigoAluno);
    }

    this.listarTodos();
    this.carregarTurmas();
  }

  get editando(){
    return Boolean(this.aluno.codigo);
  }

  carregarAluno(codigo: number) {
    this.alunoService.buscarPorCodigo(codigo)
    .then(aluno => {
      this.aluno = aluno;
    })
    .catch(erro => this.errorHandler.handle(erro));
  }

  salvar(form: FormControl) {
    if (this.editando) {
      this.atualizarAluno(form);
    }else {
      this.adicionarAluno(form);
    }
  }


  adicionarAluno(form: FormControl) {
    console.log('Dados obtidos do formulario', this.aluno);
    this.alunoService.adicionar(this.aluno)
    .then(() => {
      this.listarTodos();
      this.toasty.success('Aluno adicionado com sucesso!');

      // form.reset();
      // this.aluno = new Aluno();
      this.router.navigate(['/alunos']);
    })
    .catch(erro => this.errorHandler.handle(erro));
  }

  atualizarAluno(form: FormControl) {
    this.alunoService.atualizar(this.aluno)
    .then(aluno => {
      this.aluno = aluno;

      this.router.navigate(['/alunos']);
      this.toasty.success('Aluno alterado com sucesso!');
    })
    .catch(erro => this.errorHandler.handle(erro));
  }

  carregarTurmas() {
    this.turmaService.listarTodos()
    .then(turmas => {
      this.turmas = turmas.map(t => ({ label: t.curso.nome + ', das ' + t.horaInicio + ':' + t.minutoInicio + ' às ' +
       t.horaFim + ':' + t.minutoFim, value: t.codigo })
    );
    })
    .catch(erro => this.errorHandler.handle(erro));
  }

  carregarCuros() {
    this.cursosService.listarTodos()
    .then(cursos => {
      this.cursos = cursos.map(c => ({ label: c.nome, value: c.codigo })
      );
    })
    .catch(erro => this.errorHandler.handle(erro));
  }


  listarTodos() {
    this.alunoService.listarTodos()
      .then(alunos => {
        this.alunos = alunos;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  novo(form: FormControl) {
     form.reset();

     setTimeout(function(){
      this.aluno = new Aluno();
     }.bind(this), 1 );


     this.router.navigate(['/alunos/novo']);
  }
}
