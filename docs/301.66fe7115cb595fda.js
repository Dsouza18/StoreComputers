"use strict";(self.webpackChunkPROWAY_COMPUTERS=self.webpackChunkPROWAY_COMPUTERS||[]).push([[301],{4301:(x,u,r)=>{r.r(u),r.d(u,{ProdutosModule:()=>C});var a=r(177),c=r(1738),o=r(4438);const g=[{id:1,descricao:"Mouse gamer",preco:439,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/mouse-3.jpg",quantidadeEstoque:15},{id:2,descricao:"Monitor muito bom",preco:1200.5,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/monitor-1.jpg",quantidadeEstoque:12},{id:3,descricao:"Teclado excelente",preco:749.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/teclado-1.jpg",quantidadeEstoque:10},{id:4,descricao:"Fone para quem joga FPS",preco:599.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/fone-de-ouvido-2.jpg",quantidadeEstoque:10},{id:5,descricao:"Fone de ouvido",preco:299.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/fone-de-ouvido-1.jpg",quantidadeEstoque:10},{id:6,descricao:"Fone de ouvido bom",preco:399.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/fone-de-ouvido-3.jpg",quantidadeEstoque:10},{id:7,descricao:"HD 1TB",preco:499.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/hd.jpg",quantidadeEstoque:10},{id:8,descricao:"Combo de placa de v\xeddeos",preco:18449.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/placa-video.jpg",quantidadeEstoque:10},{id:9,descricao:"Processador Ryzen",preco:1e3,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/processador.jpg",quantidadeEstoque:10},{id:10,descricao:"Notebook bom",preco:2500,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/laptop-1.jpg",quantidadeEstoque:10},{id:11,descricao:"Notebook excelente",preco:4500,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/laptop-2.jpg",quantidadeEstoque:10},{id:12,descricao:"Mouse barato",preco:20,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/mouse-1.png",quantidadeEstoque:10},{id:13,descricao:"Mouse \xf3timo",preco:200,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/mouse-2.jpg",quantidadeEstoque:10},{id:14,descricao:"Mouse pequeno",preco:50,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/mouse-4.jpg",quantidadeEstoque:10},{id:15,descricao:"Teclado bom",preco:159.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/teclado-2.jpg",quantidadeEstoque:10}];let l=(()=>{class t{constructor(){this.produtos=g}getAll(){return this.produtos}getOne(e){return this.produtos.find(n=>n.id===e)}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=o.jDH({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var m=r(537);let h=(()=>{class t{constructor(e){this.snackBar=e}notificar(e){this.snackBar.open(e,"OK",{duration:2e3,verticalPosition:"top",horizontalPosition:"center"})}static{this.\u0275fac=function(n){return new(n||t)(o.KVO(m.UG))}}static{this.\u0275prov=o.jDH({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var P=r(5403),s=r(4341);let f=(()=>{class t{constructor(e,n,i,d){this.produtosService=e,this.route=n,this.notificacaoService=i,this.carrinhoService=d,this.quantidade=1}ngOnInit(){const n=Number(this.route.snapshot.paramMap.get("id"));this.produto=this.produtosService.getOne(n)}adicionarAoCarrinho(){this.notificacaoService.notificar("O produto foi adicionado ao carrinho");const e={...this.produto,quantidade:this.quantidade};this.carrinhoService.adicionarAoCarrinho(e)}static{this.\u0275fac=function(n){return new(n||t)(o.rXU(l),o.rXU(c.nX),o.rXU(h),o.rXU(P.A))}}static{this.\u0275cmp=o.VBU({type:t,selectors:[["app-detalhes-produto"]],decls:19,vars:8,consts:[[1,"product__container"],[1,"product-image__container"],["alt","",3,"src"],[1,"product-description__container"],[1,"product__name"],[1,"product__price"],["type","number","min","1",3,"ngModelChange","ngModel"],[1,"product__avaiability"],[3,"click"]],template:function(n,i){1&n&&(o.j41(0,"section",0)(1,"div",1),o.nrm(2,"img",2),o.k0s(),o.j41(3,"div",3)(4,"h2",4),o.EFF(5),o.k0s(),o.j41(6,"h3",5),o.EFF(7),o.nI1(8,"currency"),o.k0s(),o.j41(9,"p"),o.EFF(10,"Estoque dispon\xedvel: "),o.k0s(),o.j41(11,"label"),o.EFF(12," quantidade: "),o.j41(13,"input",6),o.mxI("ngModelChange",function(p){return o.DH7(i.quantidade,p)||(i.quantidade=p),p}),o.k0s(),o.EFF(14," unidade(s) "),o.k0s(),o.j41(15,"p",7),o.EFF(16),o.k0s(),o.j41(17,"button",8),o.bIt("click",function(){return i.adicionarAoCarrinho()}),o.EFF(18,"Adicionar ao carrinho"),o.k0s()()()),2&n&&(o.R7$(2),o.Y8G("src",null==i.produto?null:i.produto.imagem,o.B4B),o.R7$(3),o.JRh(null==i.produto?null:i.produto.descricao),o.R7$(2),o.SpI("",o.i5U(8,5,null==i.produto?null:i.produto.preco,"BRL")," "),o.R7$(6),o.R50("ngModel",i.quantidade),o.R7$(3),o.SpI(" ",null==i.produto?null:i.produto.quantidadeEstoque," unidade(s) em estoque "))},dependencies:[s.me,s.Q0,s.BC,s.VZ,s.vS,a.oe],styles:[".product__container[_ngcontent-%COMP%]{display:flex;column-gap:20px;margin:20px 0}.product-image__container[_ngcontent-%COMP%]{align-self:center}.product__container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:350px;height:350px}.product__name[_ngcontent-%COMP%]{font-size:36px}.product__price[_ngcontent-%COMP%]{font-size:28px;font-weight:400;margin:20px 0}.product-description__container[_ngcontent-%COMP%]{border:1px solid var(--light-gray);border-radius:8px;padding:15px;flex:1}.product__avaiability[_ngcontent-%COMP%]{font-size:12px}label[_ngcontent-%COMP%]{margin:20px 0;display:block}input[_ngcontent-%COMP%]{width:30px;padding:5px}input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}button[_ngcontent-%COMP%]{background-color:var(--blue);border:none;padding:10px;color:#fff;font-size:24px;transition:.3s all;margin:20px 0;cursor:pointer}button[_ngcontent-%COMP%]:hover{filter:brightness(1.3)}"]})}}return t})();function v(t,M){if(1&t&&(o.j41(0,"div",2)(1,"a",3),o.nrm(2,"img",4),o.j41(3,"h2",5),o.EFF(4),o.k0s(),o.j41(5,"p",6),o.EFF(6),o.nI1(7,"currency"),o.k0s(),o.j41(8,"p",7),o.EFF(9),o.k0s(),o.j41(10,"button",8),o.EFF(11,"Comprar"),o.k0s()()()),2&t){const e=M.$implicit;o.R7$(),o.Mz_("routerLink","/produtos/",e.id,""),o.R7$(),o.Y8G("src",e.imagem,o.B4B),o.R7$(2),o.SpI(" ",e.descricao," "),o.R7$(2),o.SpI(" ",o.i5U(7,6,e.preco,"BRL")," "),o.R7$(3),o.SpI(" ",e.descricaoPreco," ")}}const _=[{path:"",component:(()=>{class t{constructor(e){this.produtosService=e}ngOnInit(){this.produtos=this.produtosService.getAll()}static{this.\u0275fac=function(n){return new(n||t)(o.rXU(l))}}static{this.\u0275cmp=o.VBU({type:t,selectors:[["app-produtos"]],decls:2,vars:1,consts:[[1,"product-list"],["class","product-list__card",4,"ngFor","ngForOf"],[1,"product-list__card"],[1,"product-list__link",3,"routerLink"],[3,"src"],[1,"product-item__name"],[1,"product-item__price"],[1,"product-item__price-description"],["type","button",1,"product-item__buy-button"]],template:function(n,i){1&n&&(o.j41(0,"section",0),o.DNE(1,v,12,9,"div",1),o.k0s()),2&n&&(o.R7$(),o.Y8G("ngForOf",i.produtos))},dependencies:[a.Sq,c.Wk,a.oe],styles:[".product-list[_ngcontent-%COMP%]{padding:40px 0;width:fit-content;display:flex;gap:20px;flex-flow:row wrap;justify-content:space-evenly;align-content:center}.product-list__card[_ngcontent-%COMP%]{box-sizing:border-box;padding:10px;border-radius:4px;flex:0 1 270px;height:450px;background-color:#fff;box-shadow:#63636333 0 2px 8px}.product-list__card[_ngcontent-%COMP%]:hover{outline:1px solid var(--blue);transform:scale(1.1);cursor:pointer}.product-list__link[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;row-gap:10px;text-decoration:none}.product-list__card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:250px;width:250px;display:block;border-radius:4px}.product-item__name[_ngcontent-%COMP%]{font-size:20px;color:var(--blue)}.product-item__price[_ngcontent-%COMP%]{color:var(--orange);font-size:32px;font-weight:700}.product-item__price-deion[_ngcontent-%COMP%]{color:var(--gray);font-size:12px;font-weight:700}.product-item__buy-button[_ngcontent-%COMP%]{background-color:var(--blue);border:none;color:#fff;font-size:20px;padding:6px 10px}.product-item__buy-button[_ngcontent-%COMP%]:hover{filter:brightness(1.1);cursor:pointer}"]})}}return t})()},{path:":id",component:f}];let b=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=o.$C({type:t})}static{this.\u0275inj=o.G2t({imports:[c.iI.forChild(_),c.iI]})}}return t})(),C=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=o.$C({type:t})}static{this.\u0275inj=o.G2t({imports:[a.MD,b,s.YN]})}}return t})()}}]);