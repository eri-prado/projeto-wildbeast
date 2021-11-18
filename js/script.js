  const animal = document.querySelector('.sidenav li')
  const content = document.querySelector('.content')
  
  function cervo() {
    content.innerHTML = `
    <div class="title">
      <h1>Cervo</h1>
      <span>da família Cervidae</span>
    </div>

    <div class="characteristics">
      <div>
        <span class="number">72</span>
        <span class="type">kg</span>
      </div>
      <div>
        <span class="number">13</span>
        <span class="type">idade</span>
      </div>
    </div>

    <p class="col-wide">É um sobrevivente da Era do Gelo, originário do Pleistoceno Superior, cerca de 300 mil anos atrás.[2] O sequenciamento de DNA e estudos genéticos reafirmam que o lobo cinzento é ancestral do cão doméstico</p>

    <img class="image-1" src="img/wolf1.jpg" alt="Lobo 1">

    <p class="emphasis">É um sobrevivente da Era do Gelo, originário do Pleistoceno Superior, cerca de 300 mil anos atrás.[2] O sequenciamento de DNA e estudos.</p>

    <img class="image-2" src="img/wolf2.jpg" alt="Lobo 2">

    <p>O peso e tamanho dos lobos variam muito em todo o mundo, tendendo a aumentar proporcionalmente com a latitude, como previsto pela teoria de Christian Bergmann. Em geral, a altura, medida a partir dos ombros, varia de 60 a 95 centímetros.</p>

    <p>O peso varia geograficamente. Em média, os lobos europeus pesam 38,5 kg; os lobos da América do Norte, 36 kg; os lobos indianos e árabes, 25 kg.[7] Embora raros, lobos com mais de 77 kg foram encontrados no Alasca, Canadá,[8] e na antiga União Soviética.</p>

    <blockquote class="quote col-wide">
      <p>“Há algo no uivar do lobo que tira um homem do aqui e agora e o transporta para uma floresta da mente.”</p>
    </blockquote>

    <ul class="atributes">
      <li>Surgiu: 12.000 anos</li>
      <li>Tipo: Mamífero</li>
      <li>Idade Média: 13 anos</li>
      <li>Macho adulto: 80kg</li>
      <li>Fêmea adulta: 55kg</li>
      <li>Família: Lupus</li>
    </ul>

    <div class="information">
      <p>É um sobrevivente da Era do Gelo, originário do Pleistoceno Superior, cerca de 300 mil anos atrás.[2] O sequenciamento de DNA e estudos genéticos reafirmam que o lobo cinzento é ancestral do cão doméstico.</p>
      <p>É um sobrevivente da Era do Gelo, originário do Pleistoceno Superior, cerca de 300 mil anos atrás.[2] O sequenciamento de DNA e estudos genéticos reafirmam que o lobo cinzento é ancestral do cão doméstico.</p>
    </div>

    <img class="col-wide" src="img/wolf3.jpg" alt="Lobo 3">

    `
  }

  animal.addEventListener('click', cervo)

  new SimpleAnime()