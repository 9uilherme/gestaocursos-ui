import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { SelectButtonModule } from 'primeng/components/selectbutton/selectbutton';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { ButtonModule } from 'primeng/components/button/button';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';

import { SharedModule } from './../shared/shared.module';
import { AlunosCadastroComponent } from './alunos-cadastro/alunos-cadastro.component';
import { AlunosDataTableComponent } from './alunos-data-table/alunos-data-table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    InputTextareaModule,
    SelectButtonModule,
    DropdownModule,

    SharedModule
  ],
  declarations: [
    AlunosCadastroComponent,
    AlunosDataTableComponent
  ],
  exports: [
    AlunosCadastroComponent,
    AlunosDataTableComponent
  ]
})
export class AlunosModule { }
