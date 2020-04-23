
function make_card(image_url, symbol, edition, common_price, percent, ebay_price, tcgplayer_price, trollandtoad_price) {
  var content = "";
  content += "<div class='col-xl-2 col-lg-3 col-sm-4 col-6 game-card'>";
    content += "<div>";
      content += "<a href='' class='contacts__img' id='details'>";
        content += "<img src='" + image_url + "' alt=\"\">";
      content += "</a>";
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