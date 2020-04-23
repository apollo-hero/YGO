
function make_card_tradecenter_main(image_url, symbol, edition, common_price, percent, ebay_price, tcgplayer_price, trollandtoad_price) {
  var content = "";
  content += '<div class="col-12 col-sm-8 col-md-7 col-lg-4 col-xl-5 message-call">';
    content += '<div class="row pb-4 align-items-center justify-content-center" style="text-align:center;">';
      content += '<div id="message-call" class="col-2 jumbotron-tradecenter-main" style="cursor: pointer; color: green; font-weight: bolder;">TRADE</div>';
      content += "<div class='col-6 col-sm-7 col-md-7 col-lg-8 col-xl-7 game-card'>";
        content += "<div>";
          content += "<a href='' class='contacts__img'>";
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
      content += '<div id="message-call" class="col-2 jumbotron-tradecenter-main" style="cursor: pointer; color: green; font-weight: bolder;">BUY</div>';
    content += '</div>';

    content += '<div class="row pb-4 align-items-center justify-content-center">';
      content += '<div class="col-10 col-sm-11 col-md-12 col-lg-12 col-xl-12">';
        content += '<div class="card card-radius bg-light mb-6 mb-md-0">';
          content += '<div class="card-body  text-dark py-4 y-md-8">';
            content += '<div class="row justify-content-center">';
              content += '<div class="col-12">';
                content += '<div class="text-center mb-4">';
                  content += '<span class="h4 text-dark font-weight-bolder">masterofp Wanted Cards</span>';
                content += '</div>';

                content += '<div class="row align-items-center">';
                for(var i=0;i<5;i++){
                  content += '<div class="col-10 justify-content-start">';
                    content += '<span class="font-weight-bolder  text-dark" style="font-size: 16px;">Dark Grepher-LCYW-EN208 1st Edition<br></span>';
                    content += '<span class="font-weight-bolder text-dark" style="font-size: 16px;">Near Mint</span>';
                    content += '<p>1st Edition-common-NM-bigmax236</p>';
                  content += '</div>';
                  content += '<div class="col-2 d-flex justify-content-end">';
                    content += '<span class="h5 font-weight-bolder text-dark ">$4.59</span>';
                  content += '</div>';
                }
                content += '</div>';
              content += '</div>';
            content += '</div>';
          content += '</div>';
        content += '</div>';
      content += '</div>';  
    content += '</div>';
  content += '</div>';
  if ($("#game-card-group").length) {
    $("#game-card-group").prepend(content);
  }
}