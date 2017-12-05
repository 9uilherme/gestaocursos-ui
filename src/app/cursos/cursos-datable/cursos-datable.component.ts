import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';

import { ToastyService } from 'ng2-toasty';

import { ErrorHandlerService } from './../../core/error-handler.service';
import { CursosService } from './../cursos.service';

@Component({
  selector: 'app-cursos-datable',
  templateUrl: './cursos-datable.component.html',
  styleUrls: ['./cursos-datable.component.css']
})
export class CursosDatableComponent implements OnInit {

  constructor(
    private cursoService: CursosService,
    private errorHandler: ErrorHandlerService,
    private toasty: ToastyService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  @ViewChild('tabela') grid;
  cursos = [];

  ngOnInit() {
    console.log('Rota chegou em cadastro com id: ', this.route.snapshot.params);
    this.carregarCursos();
  }

   carregarCursos() {
    this.cursoService.listarTodos()
    .then(cursos => {
      this.cursos = cursos;
              console.log('this.cursos', this.cursos);
    })
    .catch(erro => this.errorHandler.handle(erro));
  }

  excluir(curso: any) {
    this.cursoService.excluir(curso.codigo)
  .then(() => {
      this.grid.first = 0;
      this.carregarCursos();
    this.toasty.success('Curso excluído com sucesso!');
  })
  .catch(erro => this.errorHandler.handle(erro));
}



}
