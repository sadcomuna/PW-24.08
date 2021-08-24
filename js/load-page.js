
$(document).ready(function(){ 

  $('.btn-veja').click(function(e){
    e.preventDefault()

    let pagina = $(this).attr('href')

    $('.modal-title').empty() 
    $('.modal-body').empty() 

    switch(pagina){
      case 'pdt-hortifruti': 
        $('.modal-title').append('Hortifruti') 
        $('.modal-body').append(`
          <div class="container">
          <div class="row">
          <div class="col-4">
          <div class="list-group" id="list-tab" role="tablist">
           <a class="list-group-item list-group-item-action list-group-item-action-danger active list-group-item-success" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Verduras</a>

           <a class="list-group-item list-group-item-action list-group-item-success" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Legumes</a>

           <a class="list-group-item list-group-item-action list-group-item-success" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Frutas</a>
          </div>
          </div>

          <div class="col-8">
          <div class="tab-content" id="nav-tabContent">
          <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
          <ul>
          <li> Tomates - 0,50kg </li>
          <li> Cenoura - 0,50kg </li>
          <li> Cenoura - 0,50kg </li>
          <li> Cenoura - 0,50kg </li>
          </ul>
          </div>

          <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
          <ul>
          <li> Couve-flor - 0,50kg </li>
          <li> Brocólis - 0,50kg </li>
          <li> Aboborá - 0,50kg </li>
          <li> Cenoura - 0,50kg </li>
          </ul>
          </div>

          <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
          <ul>
          <li> Maças - 0,50kg </li>
          <li> Laranjas - 0,50kg </li>
          <li> Limões - 0,50kg </li>
          <li> Uvas - 0,50kg </li>
          </ul>
          </div>
          </div>
          </div>
          </div>
        `) 
        break
      case 'pdt-frios':
        $('.modal-title').append('Frios') 
        $('.modal-body').append(`
          <div class="container">
          <div class="row">
          <div class="col-4">
          <div class="list-group" id="list-tab" role="tablist">
           <a class="list-group-item list-group-item-action list-group-item-action-danger active list-group-item-success" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Queijos</a>

           <a class="list-group-item list-group-item-action list-group-item-success" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Congelados Prontos</a>

           <a class="list-group-item list-group-item-action list-group-item-success" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Outros</a>
          </div>
          </div>

          <div class="col-8">
          <div class="tab-content" id="nav-tabContent">
          <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
          <ul>
          <li> Gorgonzola - 0,50kg </li>
          <li> Mussarela 'Sádia'- 0,50kg </li>
          <li> Cheddar- 0,50kg </li>
          </ul>
          </div>

          <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
          <ul>
          <li> Pizza congelada - 0,50kg </li>
          <li> Batatas Fritas 'UAI!' - 0,50kg </li>
          <li> Lasanha 'Sádia' - 0,50kg </li>
          <li> Petit Gateu - 0,50kg </li>
          </ul>
          </div>

          <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
          <ul>
          <li> Presunto 'Perdigão' - 0,50kg </li>
          <li> Salsicha - 0,50kg </li>
          <li> Peito de peru - 0,50kg </li>
          </ul>
          </div>
          </div>
          </div>
          </div>
        `) 
        break
      case 'pdt-limpeza':
        $('.modal-title').append('Limpeza') 
        $('.modal-body').append(`
          <div class="container">
          <div class="row">
          <div class="col-4">
          <div class="list-group" id="list-tab" role="tablist">
           <a class="list-group-item list-group-item-action list-group-item-action-danger active list-group-item-success" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Casa</a>

           <a class="list-group-item list-group-item-action list-group-item-success" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Lavanderia</a>

           <a class="list-group-item list-group-item-action list-group-item-success" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Veículos</a>
          </div>
          </div>

          <div class="col-8">
          <div class="tab-content" id="nav-tabContent">
          <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
          <ul>
          <li> Desinfetante 'Veja' - 0,50 </li>
          <li> Água Sanitária 'Kboa' - 0,50 </li>
          <li> Ilustra panelas - 0,50 </li>
          <li> Esponja mágica - 0,50 </li>
          </ul>
          </div>

          <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
          <ul>
          <li> Sabão em pó 'Brilhate' - 0,50 </li>
          <li> Amaciante de roupas  - 0,50 </li>
          </ul>
          </div>

          <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
          <ul>
          <li> Solupan - 0,50 </li>
          <li> Cheiro para interiores - 0,50 </li>
          <li> Limpa pneus - 0,50 </li>
          </ul>
          </div>
          </div>
          </div>
          </div>
          `) 
        break

        
      case 'pdt-bebidas':
        $('.modal-title').append('Bebidas') 
        $('.modal-body').append(`
          <div class="container">
          <div class="row">
          <div class="col-4">
          <div class="list-group" id="list-tab" role="tablist">
           <a class="list-group-item list-group-item-action list-group-item-action-danger active list-group-item-success" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Alcoólicas</a>

           <a class="list-group-item list-group-item-action list-group-item-success" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Refrigerantes</a>

           <a class="list-group-item list-group-item-action list-group-item-success" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Sucos e outros</a>
          </div>
          </div>

          <div class="col-8">
          <div class="tab-content" id="nav-tabContent">
          <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
          <ul>
          <li> Cerveja 'Skol' - 0,50 </li>
          <li> Pinga - 0,50 </li>
          <li> Vodka - 0,50 </li>
          <li> Cachaça - 0,50 </li>
          </ul>
          </div>

          <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
          <ul>
          <li> Pepsi - 0,50 </li>
          <li> Coca-cola  - 0,50 </li>
          <li> Guaraná - 0,50 </li>
          </ul>
          </div>

          <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
          <ul>
          <li> Suco em pó 'Tang' - 0,50 </li>
          <li> Chá gelado  - 0,50 </li>
          <li> Energético 'Monster' - 0,50 </li>
          </ul>
          </div>
          </div>
          </div>
          </div>
          `) 
        break
      case 'pdt-carnes':
        $('.modal-title').append('Carnes') 
        $('.modal-body').append(`
          <div class="container">
          <div class="row">
          <div class="col-4">
          <div class="list-group" id="list-tab" role="tablist">
           <a class="list-group-item list-group-item-action list-group-item-action-danger active list-group-item-success" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Bovina</a>

           <a class="list-group-item list-group-item-action list-group-item-success" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Suina</a>

           <a class="list-group-item list-group-item-action list-group-item-success" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Aves</a>
          </div>
          </div>

          <div class="col-8">
          <div class="tab-content" id="nav-tabContent">
          <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
          <ul>
          <li> Costela - 0,50kg </li>
          <li> Acem - 0,50kg </li>
          <li> Paleta - 0,50kg </li>
          <li> Picanha - 0,50kg </li>
          </ul>
          </div>

          <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
          <ul>
          <li> Pernil - 0,50kg </li>
          <li> Acém - 0,50kg </li>
          <li> Costela - 0,50kg </li>
          <li> Lombo - 0,50kg </li>
          </ul>
          </div>

          <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
          <ul>
          <li> Filé de peito - 0,50kg </li>
          <li> Coxa - 0,50kg </li>
          <li> Sobrecoxa - 0,50kg </li>
          <li> Perna inteira - 0,50kg </li>
          </ul>
          </div>
          </div>
          </div>
          </div>
        `) 
        break
      case 'pdt-padaria':
        $('.modal-title').append('Padaria') 
        $('.modal-body').append(`
          <div class="container">
          <div class="row">
          <div class="col-4">
          <div class="list-group" id="list-tab" role="tablist">
           <a class="list-group-item list-group-item-action list-group-item-action-danger active list-group-item-success" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Salgados</a>

           <a class="list-group-item list-group-item-action list-group-item-success" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Doces</a>

           <a class="list-group-item list-group-item-action list-group-item-success" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Cafés</a>
          </div>
          </div>

          <div class="col-8">
          <div class="tab-content" id="nav-tabContent">
          <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
          <ul>
          <li> Pão Francês - 0,50 </li>
          <li> Salgado de presunto - 0,50 </li>
          <li> Pão de queijo- 0,50 </li>
          <li> Quindin - 0,50 </li>
          </ul>
          </div>

          <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
          <ul>
          <li> Brigadeiro - 0,50 </li>
          <li> Bomba de chocolate - 0,50 </li>
          <li> Pudim - 0,50 </li>
          <li> Pé de moleque - 0,50 </li>
          </ul>
          </div>

          <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
          <ul>
          <li> Cappuccino - 0,50 </li>
          <li> Café - 0,50 </li>
          <li> Café com leite - 0,50 </li>
          </ul>
          </div>
          </div>
          </div>
          </div>
        `) 
        break

      case 'pdt-doces':
        $('.modal-title').append('Doces') 
        $('.modal-body').append(`
          <div class="container">
          <div class="row">
          <div class="col-4">
          <div class="list-group" id="list-tab" role="tablist">
           <a class="list-group-item list-group-item-action list-group-item-action-danger active list-group-item-success" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Balas e outros</a>

           <a class="list-group-item list-group-item-action list-group-item-success" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Bolos</a>

           <a class="list-group-item list-group-item-action list-group-item-success" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Chocolates</a>
          </div>
          </div>

          <div class="col-8">
          <div class="tab-content" id="nav-tabContent">
          <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
          <ul>
          <li> Pirulito - 0,50 </li>
          <li> Chiclete - 0,50 </li>
          <li> Azedinho - 0,50 </li>
          <li> Bala - 0,50 </li>
          </ul>
          </div>

          <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
          <ul>
          <li> Torta de limão - 0,50 </li>
          <li> Bolo de chocolate - 0,50 </li>
          <li> Bolo formigueiro - 0,50 </li>
          <li> Bolo para festa - 0,50 </li>
          </ul>
          </div>

          <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
          <ul>
          <li> Barra de chocolate 'Lacta' - 0,50 </li>
          <li> Bolinhas de futebol  - 0,50 </li>
          <li> Biscoito de chocolate - 0,50 </li>
          </ul>
          </div>
          </div>
          </div>
          </div>
        `) 
        break
      case 'pdt-pets':
        $('.modal-title').append('Produtos para Pets') 
        $('.modal-body').append(`
          <div class="container">
          <div class="row">
          <div class="col-4">
          <div class="list-group" id="list-tab" role="tablist">
           <a class="list-group-item list-group-item-action list-group-item-action-danger active list-group-item-success" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Ração</a>

           <a class="list-group-item list-group-item-action list-group-item-success" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Petiscos</a>

           <a class="list-group-item list-group-item-action list-group-item-success" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Acessórios</a>
          </div>
          </div>

          <div class="col-8">
          <div class="tab-content" id="nav-tabContent">
          <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
          <ul>
          <li> Ração para cachorro - 0,50 </li>
          <li> Ração para gato - 0,50 </li>
          <li> Ração para coelho - 0,50 </li>
          <li> Ração para peixes - 0,50 </li>
          </ul>
          </div>

          <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
          <ul>
          <li> Petiscos para gato - 0,50 </li>
          <li> Petiscos para cachorro - 0,50 </li>
          <li> Petiscos para coelhos - 0,50 </li>
          </ul>
          </div>

          <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
          <ul>
          <li> Caminhas - 0,50 </li>
          <li> Potinhos - 0,50 </li>
          <li> Roupas - 0,50 </li>
          <li> Brinquedos - 0,50 </li>
          </ul>
          </div>
          </div>
          </div>
          </div>
        `) 
        break
      case 'pdt-produtos':
        $('.modal-title').append('Produtos de Beleza') 
        $('.modal-body').append(`
          <div class="container">
          <div class="row">
          <div class="col-4">
          <div class="list-group" id="list-tab" role="tablist">
           <a class="list-group-item list-group-item-action list-group-item-action-danger active list-group-item-success" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Skincare</a>

           <a class="list-group-item list-group-item-action list-group-item-success" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Maquiagens</a>
          </div>
          </div>

          <div class="col-8">
          <div class="tab-content" id="nav-tabContent">
          <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
          <ul>
          <li> Sabonete facial - 0,50 </li>
          <li> Manteiga de cacau- 0,50 </li>
          <li> Hidratante 'Nívea' - 0,50 </li>
          <li> Esfoliante facial - 0,50 </li>
          </ul>
          </div>

          <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
          <ul>
          <li> Delineador 'Avon' - 0,50 </li>
          <li> Batom  'Boca Rosa' - 0,50 </li>
          <li> Base 'Vogue' - 0,50 </li>
          <li> Sombra 'MariMaria'- 0,50 </li>
          </ul>
          </div>
          </div>
          </div>
          </div>
        `) 
        break
      default: alert('Página não encontrada')
    }

    $('#modal-info').modal('show')

  })
})

$(document).ready(function(){
$('.tema-escuro').click(function(e){
e.preventDefault()

$('body').removeClass('original')
$('body').addClass('secondary')
$('p').addClass('text-dark')
$('p').removeClass('text-white')
$('h3').addClass('text-dark')
$('h3').removeClass('text-white')
$('nav').addClass('secondary-nav')
$('nav').removeClass('bg-principal')
$('.card-body').addClass('secondary-nav')
$('.card-body').removeClass('bg-principal')
$('footer').addClass('secondary-nav')
$('footer').removeClass('bg-principal')
$('button').addClass('secondary-btn')
$('button').removeClass('bg-secundary-principal')
})

$('.tema-original').click(function(e){
e.preventDefault()

$('body').removeClass('secondary')
$('body').addClass('original')
$('p').removeClass('text-dark')
$('p').addClass('text-white')
$('h3').removeClass('text-dark')
$('h3').addClass('text-white')
$('nav').addClass('bg-principal')
$('nav').removeClass('secondary-nav')
$('.card-body').addClass('bg-principal')
$('.card-body').removeClass('secondary-nav')
$('.footer').addClass('bg-principal')
$('.footer').removeClass('secondary-nav')

})
})