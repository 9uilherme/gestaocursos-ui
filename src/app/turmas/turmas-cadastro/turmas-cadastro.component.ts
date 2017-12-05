import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CursosService } from './../../cursos/cursos.service';
import { TurmaService } from './../../turmas/turmas.service';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { ToastyService } from 'ng2-toasty';
import { Turma } from './../../core/model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-turmas-cadastro',
  templateUrl: './turmas-cadastro.component.html',
  styleUrls: ['./turmas-cadastro.component.css']
})
export class TurmasCadastroComponent implements OnInit {


  cursos = [];
  turma = new Turma();

  constructor(
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService,
    private turmaService: TurmaService,
    private cursosService: CursosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const codigoTurma = this.route.snapshot.params['codigo'];
    if (codigoTurma) {
      console.log('codigo da turma', this.route.snapshot.params);
      this.carregarTurma(codigoTurma);
    }
    this.carregarCursos();
  }

  salvar(form: FormControl) {
    if (this.editando) {
      this.atualizarTurma(form);
    }else {
      this.adicionarTruma(form);
    }
  }

  atualizarTurma(form: FormControl) {
    this.turmaService.atualizar(this.turma)
    .then(turma => {
      this.turma = turma;

      this.router.navigate(['/turmas']);
      this.toasty.success('Turma alterada com sucesso!');
    })
    .catch(erro => this.errorHandler.handle(erro));
  }

    get editando(){
    return Boolean(this.turma.codigo);
  }

   carregarTurma(codigo: number) {
    this.turmaService.buscarPorCodigo(codigo)
    .then(turma => {
      this.turma = turma;
    })
    .catch(erro => this.errorHandler.handle(erro));
  }

  carregarCursos() {
    this.cursosService.listarTodos()
    .then(cursos => {
      console.log('cursos', cursos);
      this.cursos = cursos.map(c => ({label: c.nome, value: c.codigo}));
        console.log('this.cursos', this.cursos);

    })
    .catch(erro => this.errorHandler.handle(erro));
  }

  adicionarTruma(form: FormControl) {
    console.log('Dados obtidos do formulario de turmas', this.turma);
    this.turmaService.adicionar(this.turma)
    .then(() => {
      this.toasty.success('Turma adicionada com sucesso!');

      // form.reset();
      // this.aluno = new Aluno();
      this.router.navigate(['/turmas']);
    })
    .catch(erro => this.errorHandler.handle(erro));
  }

  novo(form: FormControl) {
     form.reset();

     setTimeout(function(){
      this.aluno = new Turma();
     }.bind(this), 1 );

     this.router.navigate(['/turmas/novo']);
  }

}
