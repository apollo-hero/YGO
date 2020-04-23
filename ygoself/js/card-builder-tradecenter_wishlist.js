
function make_card_tradecenter(count,image_url, symbol, edition, common_price, percent, ebay_price, tcgplayer_price, trollandtoad_price) {
  var content = "";
  content += "<div class='col-xl-2 col-lg-3 col-sm-4 col-6 game-card'>";
    content += "<div>";
      content += "<span style='border: 2px solid red; border-radius: 20px; padding:2px 7px'>"+count+"</span>";
    content += "</div>";
    content += "<div>";
      content += "<div class='contacts__img  container_trade' style='magin-top:5%;'>";
        content += "<img src='" + image_url + "'  class='image-hover' style='width:100%' alt=\"\">";
        content += "<div class='middle-hover'>";
          content += "<div class='card-summary card-margin-top' >";
            content += '<div class="row" style="align-items: center;justify-content: center;">';
              content += '<strong style="font-size:16px">'+ 'Dark Grepher' +'</strong>';
            content += '</div>';
            content += '<div class="row" style="align-items: center;justify-content: center;">';
              content += '<strong class="card-symbol">'+ '1St Edition' +'</strong>';
            content += '</div>';
            content += '<div class="row" style="align-items: center;justify-content: center;">';
              content += '<strong class="card-symbol">'+ 'NM' +'</strong>';
            content += '</div>';
            content += '<div class="row" style="align-items: center;justify-content: center;">';
              content += '<div>';
                content += '<strong class="card-symbol">' + symbol + '</strong><br>';
                content += '<small class="card-edition">' + edition + '</small>';
              content += '</div>';
              content += '<img class="market-logo" src="../../ygoself/img/card_market_ebay.png" style="margin-left: -7%;"/>';
              content += '<strong class="market-price" style="margin-left: -3%;">$' + ebay_price + '</strong>';
            content += '</div>';
            content += '<div class="row" style="align-items: center; justify-content: center;">';
              content += '<strong class="card-price" >$' + common_price + '</strong>';
              content += '<img class="market-logo" src="../../ygoself/img/card_market_tcg.png" />';
              content += '<strong class="market-price">$' + tcgplayer_price + '</strong>';
            content += '</div>';
            content += '<div class="row" style="align-items: center;justify-content: center;">';
              content += '<div class="d-flex justify-content-center align-items-center" >';
                content += percent > 100 ? '<img class="img-percent" src="../../ygoself/img/card_price_increase.png" />'
                            : '<img src="../../ygoself/img/card_price_decrease.png" />';
                content += '<strong class="price-percent">' + percent + '%</strong>';
              content += '</div>';
              content += '<img class="market-logo" src="../../ygoself/img/card_market_toad.png" />';
              content += '<strong class="market-price">$' + trollandtoad_price + '</strong>';
            content += '</div>';
            content += '<div class="row" style="align-items: center;justify-content: center;">';
              content += '<button id="button_minus" class="plusbutton button3" style="amrgin-top:1%;font-size:35px;opacity: 1; background: none !important;">' + '-' + '</button>';
              content += '<strong style="margin-left:7%;font-size:35px;">' + count + '</strong>';
              content += '<button id="button_plus" class="plusbutton button3" style="margin-left: 6%; amrgin-top:1%;font-size:35px;opacity: 1; background: none !important;">' + '+' + '</button>';
            content += '</div>';
          content += '</div>';
        content += '</div>';
      content += "</div>";
      content += "<div class='card-summary'>";
        content += '<div class="info-line">';
          content += '<div class="d-flex flex-column text-center" style="flex: 1;">';
            content += '<strong class="card-symbol">' + symbol + '</strong>';
            content += '<small class="card-edition">' + edition + '</small>';
          content += '</div>';
          content += '<img class="market-logo" src="../../ygoself/img/card_market_ebay.png" />';
          content += '<strong class="market-price">$' + ebay_price + '</strong>';
        content += '</div>';
        content += '<div class="info-line">';
          content += '<strong class="card-price text-center" style="flex: 1;">$' + common_price + '</strong>';
          content += '<img class="market-logo" src="../../ygoself/img/card_market_tcg.png" />';
          content += '<strong class="market-price">$' + tcgplayer_price + '</strong>';
        content += '</div>';
        content += '<div class="info-line">';
          content += '<div class="d-flex justify-content-center align-items-center" style="flex: 1;">';
            content += percent > 100 ? '<img class="img-percent" src="../../ygoself/img/card_price_increase.png" />'
                           : '<img src="../../ygoself/img/card_price_decrease.png" />';
            content += '<strong class="price-percent">' + percent + '%</strong>';
          content += '</div>';
          content += '<img class="market-logo" src="../../ygoself/img/card_market_toad.png" />';
          content += '<strong class="market-price">$' + trollandtoad_price + '</strong>';
        content += '</div>';
      content += '</div>';
    content += '</div>';
  content += '</div>';

  if ($("#game-card-group").length) {
    $("#game-card-group").append(content);
  }
}