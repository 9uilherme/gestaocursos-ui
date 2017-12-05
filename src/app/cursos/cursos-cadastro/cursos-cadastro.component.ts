import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ToastyService } from 'ng2-toasty';

import { Curso } from './../../core/model';
import { CursosService } from './../cursos.service';
import { ErrorHandlerService } from './../../core/error-handler.service';

@Component({
  selector: 'app-cursos-cadastro',
  templateUrl: './cursos-cadastro.component.html',
  styleUrls: ['./cursos-cadastro.component.css']
})
export class CursosCadastroComponent implements OnInit {

  constructor(
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService,
    private cursosService: CursosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  curso = new Curso();

  ngOnInit() {
    console.log('Rota chegou em cadastro com id: ', this.route.snapshot.params);
    const codigoCurso = this.route.snapshot.params['codigo'];
    if (codigoCurso) {
      this.carregarCurso(codigoCurso);
    }
  }

  carregarCurso(codigoCurso) {
    this.cursosService.buscarPorCodigo(codigoCurso)
    .then(curso => {
      this.curso = curso;
      console.log('Curso retornado', this.curso);
    })
    .catch(erro => this.errorHandler.handle(erro));
  }

  get editando(){
    return Boolean(this.curso.codigo);
  }

  salvar(form: FormControl) {
    console.log('Curso a ser salvo: ', this.curso, ' e valor editando =', this.editando);

    if (this.editando) {
      this.atualizarCurso(form);
    }else {
      this.adicionarCurso(form);
    }
  }

  atualizarCurso(form: FormControl) {
    this.cursosService.atualizar(this.curso)
    .then(curso => {
      this.curso = curso;

      this.router.navigate(['/cursos']);
      this.toasty.success('Curso alterado com sucesso!');
    })
    .catch(erro => this.errorHandler.handle(erro));
  }

  adicionarCurso(form: FormControl) {
    console.log('Dados obtidos do formulario de cursos', this.curso);
    this.cursosService.adicionar(this.curso)
    .then(() => {
      this.toasty.success('Curso adicionado com sucesso!');

      this.router.navigate(['/cursos']);
    })
    .catch(erro => this.errorHandler.handle(erro));
  }

    novo(form: FormControl) {
     form.reset();

     setTimeout(function(){
      this.curso = new Curso();
     }.bind(this), 1 );

     this.router.navigate(['/cursos/novo']);
  }

}
