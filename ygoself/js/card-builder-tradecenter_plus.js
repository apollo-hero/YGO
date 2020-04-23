
function make_card_tradecenter(count,image_url, symbol, edition, common_price, percent, ebay_price, tcgplayer_price, trollandtoad_price,underscore_price) {
  var content = "";
  content += "<div class='col-xl-2 col-lg-3 col-sm-4 col-6 game-card'>";
    content += "<div>";
      content += "<span style='border: 2px solid red; border-radius: 20px; padding:2px 7px'>"+count+"</span>";
    content += "</div>";
    content += "<div>";
      content += "<div class='contacts__img  container_trade' style='magin-top:5%;'>";
        content += "<img src='" + image_url + "'  class='image-hover' style='width:100%' alt=\"\">";
        content += "<div class='middle-hover'>";
          content += "<div class='card-summary d-flex flex-column card-padding-top px-2'>";
            content += "<div class='d-flex justify-content-center pb-2'>";
              content += '<strong class="" style="font-size:16px">'+ 'Dark Grepher' +'</strong>';
            content += '</div>';
            content += "<div class='d-flex justify-content-center pb-3'>";
              content += '<spin class="card-symbol" style="font-size: 14px;">'+ '1St Edition' +'</spin>';
            content += '</div>';
            content += "<div class='d-flex justify-content-center pb-3'>";
              content += '<spin class="card-symbol" style="font-size: 14px;">'+ 'NM' +'</spin>';
            content += '</div>';
            content += "<div class='d-flex justify-content-center pb-3'>";
              content += '<spin class="card-symbol pr-1" style="font-size: 20px;">' + symbol + '</spin>';
              content += '<small class="card-edition pt-1">' + edition + '</small>';
            content += '</div>';
            content += '<div class="d-flex">';
              content += '<div class="col-4 d-flex flex-column align-self-center">';
                content += '<strong class="card-price" >$' + common_price + '</strong>';
                content += '<div class="d-flex">';  
                  content += percent > 100 ? '<img class="img-percent" src="../../ygoself/img/card_price_increase.png" />'
                                : '<img src="../../ygoself/img/card_price_decrease.png" />';
                  content += '<strong class="price-percent align-self-center" style="font-size: 16px; font-weight: bolder">' + percent + '%</strong>';
                content += '</div>';
              content += '</div>';
              content += '<div class="col-8 d-flex flex-column" style="justify-content: end;">';
                content += '<div class="d-flex justify-content-end">';
                  content += '<img class="market-logo" src="../../ygoself/img/card_market_ebay.png" style="margin-left: -7%;"/>';
                  content += '<strong class="market-price" style="margin-left: -3%; font-size: 16px;">$' + ebay_price + '</strong>';
                content += '</div>';
                content += '<div class="d-flex justify-content-end">';
                  content += '<img class="market-logo" src="../../ygoself/img/card_market_tcg.png" />';
                  content += '<strong class="market-price" style="font-size: 16px;">$' + tcgplayer_price + '</strong>';
                  content += '</div>';
                  content += '<div class="d-flex justify-content-end">';
                    content += '<img class="market-logo" src="../../ygoself/img/card_market_toad.png" />';
                    content += '<strong class="market-price" style="font-size: 16px;">$' + trollandtoad_price + '</strong>';
                  content += '</div>';
              content += '</div>';
            content += '</div>';
            
            content += '<div class="row" style="align-items: center;justify-content: center;">';
              content += '<strong style="font-size: 25px; text-decoration: underline">$' + underscore_price + '</strong>';
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