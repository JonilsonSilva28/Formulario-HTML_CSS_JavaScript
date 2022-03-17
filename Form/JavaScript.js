class Produto {

  constructor() {
      this.id = 1;
      this.arrayProdutos = [];
  }

  salvar() {
      let produto = this.lerDados();

      if(this.validaCampos(produto)) {
          this.adicionar(produto);
      }

      this.listaTabela();
      this.cancelar();
  }

  listaTabela(){
      let tbody = document.getElementById('tbody');
      tbody.innerText = '';

      for(let i = 0; i < this.arrayProdutos.length; i++) {
          let tr = tbody.insertRow();

          let td_id = tr.insertCell();
          let td_produto = tr.insertCell();
          let td_valor = tr.insertCell();
          let td_acao = tr.insertCell();

          td_id.innerText = this.arrayProduto[i].id;
          td_produto.innerText = this.arrayProduto[i].nomeProduto;
          td_valor.innerText = this.arrayProduto[i].preco;

          td_id.classList.add('center');

          let imgEdit = document.createElement('img');
          imgEdit.src = 'img/document-editor.png';

          let imgDelete = document.createElement('img');
          imgDelete.src = 'img/delete.png';
          
          td_acao.appendChild(imgEdit);
          td_acao.appendChild(imgDelete);
      }
  }

  adicionar(produto) {
      this.arrayProdutos.push(produto);
      this.id++;
  }

  lerDados(){
      let produto = {}

      produto.id = this.id;
      produto.nomeProduto = document.getElementById('produto').value;
      produto.valor = document.getElementById('valor').value;

      return produto;
  }
  
  validaCampos(produto){
      let msg ='';

      if(produto.nomeProduto =='') {
          msg += '- Informe o Nome do Produto \n';
      }

      if(produto.valor =='') {
          msg += '- Informe o Preço do Produto \n';
      }

      if(msg != '') {
          alert(msg);
          return false
      }

      return true;
  }

  cancelar(){
    document.getElementById('produto').value = '';
    document.getElementById('valor').value = '';
  }
}

var produto = new Produto();