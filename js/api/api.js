export const getJsData = async (filter) => {
  let htmlMainVideo = "";
  let htmlCarrosel = "";
  let mainVideo;
  let verMaisVideos =
    filter === "descobertas"
      ? "descobertas+de+progamação"
      : `programação+${filter}`;
  const loadPage = (data) => {
    mainVideo = data.videos[0];
    htmlMainVideo = `<div class="container">
    <h3>${mainVideo.nome}</h3>
    <p class="descricao">
      ${mainVideo.description}
    </p>
  </div>
  <div class="botoes">
    <button id="playMain" role="button" class="botao">
      <i class="fas fa-play"></i>ASSISTIR AGORA
    </button>
    <button role="button" class="botao" onClick=(window.open('https://www.youtube.com/results?search_query=${verMaisVideos}'))>
      <i class="fas fa-plus-circle"></i>VER MAIS VÍDEOS
    </button>
  </div>`;

    for (let item of data.videos) {
      htmlCarrosel += `<div class="item" nome="${item.nome}" url="${item.url}">
    <img class="box-filme" src="${item.imagemini}" alt=""/>
  </div>`;
    }
  };

  if (filter === "descobertas") {
    const newMovies = $.ajax({
      async: false,
      global: false,
      url: "../../data/descobertas.json",
      dataType: "json",
      success: function (data) {
        loadPage(data);
      },
    });
  }

  if (filter === "html") {
    const html = $.ajax({
      async: false,
      global: false,
      url: "../../data/html.json",
      dataType: "json",
      success: function (data) {
        loadPage(data);
      },
    });
  }

  if (filter === "javascript") {
    const js = $.ajax({
      async: false,
      global: false,
      url: "../../data/javascript.json",
      dataType: "json",
      success: function (data) {
        loadPage(data);
      },
    });
  }

  if (filter === "css") {
    const css = $.ajax({
      async: false,
      global: false,
      url: "../../data/javascript.json",
      dataType: "json",
      success: function (data) {
        loadPage(data);
      },
    });
  }

  return { mainVideo, htmlMainVideo, htmlCarrosel };
};
