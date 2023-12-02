import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { IProduto, IProdutoCarrinho } from '../produtos';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit{

  itensCarrinho: IProdutoCarrinho[] = [];

  constructor(
    public carrinhoService: CarrinhoService
  ){}

  ngOnInit(): void {
      this.itensCarrinho = this.carrinhoService.obtemCarrinho();
  }

  get totalCarrinho(): number {
    return this.itensCarrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);
  }
}
