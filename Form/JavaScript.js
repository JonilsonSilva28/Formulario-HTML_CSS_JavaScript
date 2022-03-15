class Produto{

  constructor() {
      this.id = 1;
      this.arrayProdutos = [];
  
  }

  Salvar() {
      let produto = this.lerDados();

      if(this.validaCampos(produto)){
        alert('Salvar')
      }

      console.log(produto);
  }

  lerDados( ){
      let produto = {}

      produto.id = this.id;
      produto.nomeProduto = document.getElementById('produto').value;
      produto.preco = document.getElementById('preco').value;

      return produto;
  }
  
  validaCampos(produto){
      let msg ='';

      if(produto.nomeProduto ==''){
          msg += '- Inoforme o nome do produto \n';
      }

      if(produto.nomeProduto ==''){
        msg += '- Inoforme o Preço do produto \n';
      }

      if(msg != ''){
        alert(msg);
        return false
      }

      return true;
  }

  cancelar(){

  }
}

var produto = new Produto();