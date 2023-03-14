import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculadoraService {
  static readonly soma: string = '+';
  static readonly subtracao: string = '-';
  static readonly divisao: string = '/';
  static readonly multiplicacao: string = '*';
  constructor() {}

  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number;
    switch (operacao) {
      case CalculadoraService.soma:
        resultado = num1 + num2;
        break;
      case CalculadoraService.subtracao:
        resultado = num1 - num2;
        break;
      case CalculadoraService.multiplicacao:
        resultado = num1 * num2;
        break;
      case CalculadoraService.divisao:
        resultado = num1 / num2;
        break;
      default:
        resultado = 0;
    }
    return resultado;
  }
}
