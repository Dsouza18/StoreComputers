import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos';


@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: IProdutoCarrinho[] = [];

  constructor() { }

  obtemCarrinho(): IProdutoCarrinho[] {
    const carrinhoString = localStorage.getItem("carrinho") || "";
    try {
      this.itens = JSON.parse(carrinhoString) || [];
    } catch (error) {
      console.error("Erro ao analisar o carrinho do localStorage:", error);
      this.itens = [];
    }
    return this.itens;
  }

  adicionarAoCarrinho(produto: IProdutoCarrinho) {
    this.itens.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

  removerProdutoCarrinho(produtoId: number){
    this.itens = this.itens.filter(item => item.id !== produtoId);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
    location.reload();
  }

  limparCarrinho(){
    this.itens = [];
    localStorage.removeItem("carrinho");
  }
}
