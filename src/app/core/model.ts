export class Curso {
  codigo: number;
  nome: string;
}

export class Turma {
  codigo: number;
  horaInicio: number;
  minutoInicio: number;
  horaFim: number;
  minutoFim: number;
  curso = new Curso();
}

export class Aluno {
  codigo: number;
  nome: string;
  nota1: number;
  nota2: number;
  nota3: number;
  turma = new Turma();
}

export class Lancamento {
  codigo : number; 
  conta : Conta;
  operacao : string;
  valor : number;
  data : string;
}

export class Conta {
  codigo : number;
  nome : string;
  valor : number;
}

