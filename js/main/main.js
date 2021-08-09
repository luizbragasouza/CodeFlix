import { getJsData } from "../api/api.js";

const Load = async () => {
  await getData("descobertas");

  $("#playMain").click(() => {
    $("#modal-video").modal();
  });

  $("#descobertas").click(async () => {
    await getData("descobertas");
  });
  $("#html").click(async () => {
    await getData("html");
  });
  $("#css").click(() => {
    getData("css");
  });
  $("#javascript").click(() => {
    getData("javascript");
  });
  $("#react").click(() => {
    getData("react");
  });
  $("#flutter").click(() => {
    getData("flutter");
  });
};

$(Load);

const getData = async (filter) => {
  const data = await getJsData(filter);
  $("#playMain").click(() => {
    $("#modal-video").modal();
  });
  $(".filme-principal").html("");
  $(".filme-principal").html(data.htmlMainVideo);
  $(".modal-title").html(data.mainVideo.nome);
  $("#mainMovie").attr("src", `${data.mainVideo.url}`);
  $(".filme-principal").css({
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) 100%), url('${data.mainVideo.image}')`,
    "background-size": "cover",
  });
  $(".owl-carousel").trigger("destroy.owl.carousel");
  $(".owl-carousel").html(data.htmlCarrosel);
  $(".item").click((item) => {
    debugger;
    $(".modal-title").html("");
    $("#mainMovie").attr("src", "");
    $(".modal-title").html(`${item.currentTarget.getAttribute("nome")}`);
    $("#mainMovie").attr("src", `${item.currentTarget.getAttribute("url")}`);
    $("#modal-video").modal();
  });
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
};
