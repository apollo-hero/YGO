
function add_store_card(store_card_data) {
  let content = "";
  content += '<div class="row py-4 store-card-cus">';
  
    content += '<div class="col-md-4 col-lg-4 col-xl-4 pr-3  pb-4  d-flex justify-content-end  store-card-cus-logo">';
      content += '<img src="' + store_card_data.image_url + '" style="width:160px; height:220px;" alt="" />';
    content += '</div>';

    
    content += '<div class="col-md-5 col-lg-6 col-xl-6">';
      content += '<div class="d-flex flex-column h4 font-weight-bolder store-card-fontcolor">';
        content += '<div class="pb-2">' + store_card_data.set_name + '</div>';
        content += '<div>';
          content += '(' + store_card_data.sell_price_cad + '$CAD ' + store_card_data.sell_price_usd + '$USD)';
          content += '<i class="fa fa-heart"></i>';
        content += '</div>';
      content += '</div>';

      content += '<div class="d-flex flex-column h5 store-card-fontcolor">';
        content += '<div class="d-flex pt-3">';
          content += '<span class="set-type" style="flex: 1;">' + store_card_data.set_type + '</span>';
          content += '<span class="set-rarity" style="flex: 1;">' + store_card_data.set_rarity + '</span>';
        content += '</div>';
        content += '<div class="d-flex">';
          content += '<span class="set-code" style="flex: 1;">' + store_card_data.set_code + '</span>';
          content += '<span class="set-edition" style="flex: 1;">' + store_card_data.set_edition + '</span>';
        content += '</div>';
        content += '<div class="mb-3 set-created-at">' + store_card_data.set_created_at + '</div>';
      content += '</div>';

      content += '<div class="row store-card-fontcolor">';
        for (market of store_card_data.markets) {
          content += '<div class="col-6 col-sm-4 col-md-6 col-lg-4 col-xl-4 pb-2 text-center">';
            content += '<div>';
              content += '<span class="cus-h4 font-weight-bolder"><u>' + market.name + '</u></span>'
              if (market.card_dups) {
                content += '<span class="cus-h5 t-sm market-card-dups">(<u>' + market.card_dups + '1</u>)</span>';
              }
            content += '</div>';
            if (market.price_cad) {
              content += '<div><span class="cus-h4 font-weight-bolder t-bg t-thin market-price-cad">' + market.price_cad
                + '$</span><span class="t-thin">CAD</span></div>';
              content += '<div class="t-md market-price-cad-low">LOW ' + market.price_low_cad + '$</div>';
              content += '<div class="t-md market-price-cad-high">HIGH ' + market.price_high_cad +'$</div>';
            } else {
              content += '<div><span class="t-bg t-thin market-price-cad">---</span></div>';
              content += '<div class="t-md market-price-cad-low">LOW -</div>';
              content += '<div class="t-md market-price-cad-high">HIGH -</div>';
            }
            if (market.price_usd) {
              content += '<div><span class="cus-h4 font-weight-bolder t-bg t-thin market-price-usd">' + market.price_usd
                                  + '$</span><span class="t-thin">USD</span></div>';
              content += '<div class="t-md market-price-usd-low">LOW ' + market.price_low_usd + '$</div>';
              content += '<div class="t-md market-price-usd-high">HIGH ' + market.price_high_usd +'$</div>';
            } else {
              content += '<div><span class="t-bg t-thin market-price-usd">---</span></div>';
              content += '<div class="t-md market-price-usd-low">LOW -</div>';
              content += '<div class="t-md market-price-usd-high">HIGH -</div>';
            }
          content += '</div>';
        }
          content += '<div class="col-6 col-sm-4 col-md-6 col-lg-4 col-xl-4 text-center">';
            content += '<div class="cus-h4 font-weight-bolder t-bg-sub"><u>Sell Price</u></div>';
            content += '<div><span class="cus-h4 font-weight-bolder t-bg t-thin sell-price-cad">' + store_card_data.sell_price_cad
                          + '$</span><span class="t-thin">CAD</span></div>';
            content += '<div><span class="cus-h4 font-weight-bolder t-bg t-thin sell-price-usd">' + store_card_data.sell_price_usd
                          + '$</span><span class="t-thin">USD</span></div>';
          content += '</div>';
      content += '</div>';

      content += '<div class="row pl-5 pt-3 pb-4 store-card-cus-select cus-h5 font-weight-bolder">';
        content += '<div style="margin-top: 5px; width: 60%;">';
          content += '<select class="edition">';
            content += '<option>1st Edition</option>';
            content += '<option>Limited</option>';
            content += '<option>Unlimited</option>';
          content += '</select>';
          content += '<select class="condition">';
            content += '<option>Near Mint</option>';
            content += '<option>Slightly Played</option>';
            content += '<option>Moderately Played</option>';
            content += '<option>Heavily Played</option>';
          content += '</select>';
        content += '</div>';
      content += '</div>';
    content += '</div>';

    content += '<div class="col-md-3 col-lg-2 col-xl-2 store-card-cus-cnt">';
      content += '<div class="d-flex flex-column text-center font-weight-bolder">';
        content += '<div class="pb-3"><i class="fa fa-plus control"></i></div>';
        content += '<div class="store-card-fontcolor pb-2  h4 t-bg b-thin"><u>INVENTORY</u></div>';
        content += '<div class="store-card-fontcolor h2 pb-2 t-bg-ex">' + store_card_data.inventory_cnt + '</div>';
        content += '<div><i class="fa fa-minus control"></i></div>';
      content += '</div>';
    content += '</div>';
  content += '</div>';

  if ($("#store-card-group").length) {
    $("#store-card-group").append(content);
  }
}

function add_ebay_range_card(range_card_data) {
  let content = "";
  content += '<div class="row px-5 store-card-cus justify-content-center">';
    // =================================================================
    content += '<div class="col-sm-11 col-md-8 col-lg-9 col-xl-9 py-4">';
      content += '<div class="d-flex flex-column h4 font-weight-bolder store-card-fontcolor">';
        content += '<div class="pb-2">' + range_card_data.set_name + '</div>';
        content += '<div>';
          content += '(' + range_card_data.sell_price_cad + '$CAD ' + range_card_data.sell_price_usd + '$USD)';
          content += '<i class="fa fa-heart"></i>';
        content += '</div>';
      content += '</div>';

      content += '<div class="d-flex flex-column h5 store-card-fontcolor">';
        content += '<div class="d-flex pt-3">';
          content += '<span class="set-type" style="flex: 1;">' + range_card_data.set_type + '</span>';
          content += '<span class="set-rarity" style="flex: 1;">' + range_card_data.set_rarity + '</span>';
        content += '</div>';
        content += '<div class="d-flex">';
          content += '<span class="set-code" style="flex: 1;">' + range_card_data.set_code + '</span>';
          content += '<span class="set-edition" style="flex: 1;">' + range_card_data.set_edition + '</span>';
        content += '</div>';
        content += '<div class="mb-3 set-created-at">' + range_card_data.set_created_at + '</div>';
      content += '</div>';

      content += '<div class="row store-card-fontcolor">';
      for (market of range_card_data.markets) {
        content += '<div class="col-6 col-sm-4 col-md-6 col-lg-4 col-xl-4 pb-2 text-center">';
          content += '<div>';
            content += '<span class="cus-h4 font-weight-bolder"><u>' + market.name + '</u></span>'
            if (market.card_dups) {
              content += '<span class="cus-h5">(<u>' + market.card_dups + '1</u>)</span>';
            }
          content += '</div>';
          if (market.price_cad) {
            content += '<div><span class="cus-h4 font-weight-bolder t-bg t-thin market-price-cad">' + market.price_cad
              + '$</span><span class="t-thin">CAD</span></div>';
            content += '<div class="t-md market-price-cad-low">LOW ' + market.price_low_cad + '$</div>';
            content += '<div class="t-md market-price-cad-high">HIGH ' + market.price_high_cad +'$</div>';
          } else {
            content += '<div><span class="t-bg t-thin market-price-cad">---</span></div>';
            content += '<div class="t-md market-price-cad-low">LOW -</div>';
            content += '<div class="t-md market-price-cad-high">HIGH -</div>';
          }
          if (market.price_usd) {
            content += '<div><span class="cus-h4 font-weight-bolder t-bg t-thin market-price-usd">' + market.price_usd
              + '$</span><span class="t-thin">USD</span></div>';
            content += '<div class="t-md market-price-usd-low">LOW ' + market.price_low_usd + '$</div>';
            content += '<div class="t-md market-price-usd-high">HIGH ' + market.price_high_usd +'$</div>';
          } else {
            content += '<div><span class="t-bg t-thin market-price-usd">---</span></div>';
            content += '<div class="t-md market-price-usd-low">LOW -</div>';
            content += '<div class="t-md market-price-usd-high">HIGH -</div>';
          }
        content += '</div>';
      }
        content += '<div class="col-6 col-sm-4 col-md-6 col-lg-4 col-xl-4 pb-2 text-center">';
          content += '<div class="cus-h4 font-weight-bolder t-bg-sub"><u>Sell Price</u></div>';
          content += '<div><span class="cus-h4 font-weight-bolder t-bg t-thin sell-price-cad">' + range_card_data.sell_price_cad
            + '$</span><span class="t-thin">CAD</span></div>';
          content += '<div><span class="cus-h4 font-weight-bolder t-bg t-thin sell-price-usd">' + range_card_data.sell_price_usd
            + '$</span><span class="t-thin">USD</span></div>';
        content += '</div>';
      content += '</div>';
    content += '</div>';
    // ============================================================
    content += '<div class="col-8 col-sm-5 col-md-4 col-lg-3 col-xl-3 py-4 ebay-range-image store-card-fontcolor">';
      content += '<img src="' + range_card_data.image_url + '" style="width:160px; height:220px;" alt="" />';
      content += '<div class="d-flex mt-3 cus-pl">';
        content += '<div class="pl-1"><input type="radio" id="price-unit" checked /><label for="price-unit">$</label></div>';
        content += '<div class="pl-5"><input type="radio" id="percent-unit" /><label for="percent-unit">%</label></div>';
      content += '</div>';
      content += '<div class="cus-pl"><input type="radio" id="sell-playset" /><label for="sell-playset">Sell as Playset (3x)</label></div>';
      content += '<div class="cus-pl"><input type="radio" id="sell-presale" /><label for="sell-presale">Sell as PreSale</label></div>';
      content += '<div><input type="text" class="pl-2" placeholder="value"/></div>';
      content += '<div class="pt-2"><a href="#" class="btn btn-theme-dark btn-act" role="button" aria-pressed="true">Select Card Image</a></div>';
      content += '<div class="pt-2"><a href="#" class="btn btn-theme-dark btn-act" role="button" aria-pressed="true">Sell on eBay</a></div>';
      content += '<div class="pt-2"><a href="#" class="btn btn-theme-dark btn-act" role="button" aria-pressed="true">Update Price</a></div>';
      content += '<div class="pt-2"><a href="#" class="btn btn-theme-dark btn-act" role="button" aria-pressed="true">Delete from eBay</a></div>';
    content += '</div>';

  content += '</div>';

  if ($("#ebay-range-group").length) {
    $("#ebay-range-group").append(content);
  }
}

function add_binder(all_cards) {
  let content = "";
  let total_sum = 0;

  for (card of all_cards) {
    content += '<span class="d-block">' + card.name + ': $' + card.value + '</span>';
    total_sum += card.value;
  }
  content = '<span class="d-block" style="font-size: 1.5rem; margin-left: -15px; margin-bottom: 10px;">Total Cards: $'
            + total_sum + '</span>' + content;

  if ($("#binder-section").length) {
    $("#binder-section").append(content);
  }
}

function add_inventory(data) {
  let content = '';
  content += '<tr>';
    content += '<td>' + data.set_name + '</td>';
    content += '<td>' + data.set_code + '</td>';
    content += '<td>' + data.set_rarity + '</td>';
    content += '<td>' + data.set_edition + '</td>';
    content += '<td>' + data.set_condition + '</td>';
    content += '<td>' + data.inventory_cnt + '</td>';
  content += '</tr>';
  if ($("#enter-inventory-tbody").length) {
    $("#enter-inventory-tbody").append(content);
  }
}

function add_transaction_log(log_data) {
  let content = '';
  content += '<tr>';
    content += '<td>' + log_data.date + '</td>';
    content += '<td>' + log_data.card + '</td>';
    content += '<td>' + log_data.qty + '</td>';
    content += '<td>' + log_data.unit_cost + '</td>';
    content += '<td>' + log_data.total_cost + '</td>';
    content += '<td>' + log_data.buyer + '</td>';
    content += '<td>' + log_data.buyer_email + '</td>';
    content += '<td>' + log_data.paid_method + '</td>';
    content += '<td>' + log_data.traded_card + '</td>';
    content += '<td>' + log_data.qty + '</td>';
    content += '<td>' + log_data.unit_cost + '</td>';
    content += '<td>' + log_data.total_cost + '</td>';
  content += '</tr>';
  if ($("#transaction-log-tbody").length) {
    $("#transaction-log-tbody").append(content);
  }
}

//  ================= wishlist details ===========================

function show_store_card(store_card_data) {
  let content = "";
  content = '<div>';
  content += '<div id="sec-1" class="sec-1 d-flex pt-3">';
    content += '<div class="sec-1-1 col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 d-flex justify-content-end" >';
      content += '<img src="' + store_card_data.image_url + '" style="width: 230px;"/>';  
    content += '</div>';
    content += '<div class="sec-1-2 col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 pt-4 ml-4 pl-5">';
      content += '<textarea  class="textarea" style="width: 100%; height: 80%;">Are you interest a card game?</textarea>';
    content += '</div>';
  content += '</div>';
      
  content += '<div id="sec-2" class="sec-2 d-flex pt-4">';
    content += '<div id="sec-2-1" class="sec-2-1 col-12 col-sm-10 col-md-6 col-lg-5 col-xl-5">';
    content += '<div class="row d-flex justify-content-end">';
      content += '<div class="col-12 col-sm-10 col-md-11 col-lg-10 col-xl-10 d-inline-flex justify-content-end align-item-center" style="padding-right: 8%;">';
        content += '<div class="col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9">';
          content += '<div class="txtcard_1">';
            content += '<div class="row" style="justify-content:center">';
              content += '<div class="info-line rowow">';
                content += '<strong class="card-symbol card_symbol_2" >' + store_card_data.symbol + '</strong>';
                content += '<small class="card-edition common">' + store_card_data.edition + '</small>';
              content += '</div>';
            content += '</div>';

            content += '<div class="row">';
              content += '<div class="info-line col-3" style="margin-top:4%">';
                content += '<strong class="market-price">$' + store_card_data.tcgplayer_price + '</strong>';
                content += '<div class="d-flex justify-content-center align-items-center" >';
                  content += store_card_data.percent > 100 ? '<img class="img-percent" src="../../ygoself/img/card_price_increase.png" />'
                                : '<img src="../../ygoself/img/card_price_decrease.png" />';
                  content += '<strong class="price-percent" style="color:green">' + store_card_data.percent + '%</strong>';
                content += '</div>';
              content += '</div>';

              content += '<div class="info-line col-6 row">';
                content += '<img class="market-logo label_1" src="../../ygoself/img/card_market_ebay.png" />';
                content += '<img class="market-logo label_2" src="../../ygoself/img/card_market_tcg.png" />';
                content += '<img class="market-logo label_3" src="../../ygoself/img/card_market_toad.png" />';
              content += '</div>';

              content += '<div class="info-line col-3 row">';
                content += '<strong class="market-price">$' + store_card_data.ebay_price + '</strong>';
                content += '<strong class="card-price text-center">$' + store_card_data.common_price + '</strong>';
                content += '<strong class="market-price">$' + store_card_data.trollandtoad_price + '</strong>';
              content += '</div>';

            content += '</div>';
          content += '</div>';
        content += '</div>';
        content += '<div class="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 d-flex justify-content-center align-self-center heart_icon">';
          content += '<img src="../../ygoself/img/icon_image/heart1.png">'; 
        content += '</div>';
      content += '</div>';

      content += '<div class="col-12 col-sm-10 col-md-12 col-lg-12 col-xl-12 pt-3">';
        content += '<div class="d-flex flex-column">';
        for(var i=0;i<3;i++){
            content += '<div class="row pt-2">';
              content += '<button class="btn btn-light btn_radus btn_drop_1 col-12">';
                content += '<div class="d-flex align-items-center">';
                  content += '<div class="mr-auto">';
                    content += '<img class="market-logo" src="../../ygoself/img/card_market_ebay.png" />';
                  content += '</div>';
                  content += '<div style="margin-left: 3%;">';
                    content += '<strong class="market-price" style="font-size:15px;vertical-align: top;">11 Listings</strong>';
                  content += '</div>';
                  content += '<div style="margin-left: 3%;">';
                    content += '<i class="material-icons" style="font-size:26px;line-height: 20px;">file_download</i>';
                    content += '<strong class="market-price" style="font-size:15px;vertical-align: top;">$' + store_card_data.tcgplayer_price + '</strong>';
                  content += '</div>';
                  content += '<div  style="margin-left: 3%;">';
                    content += '<i class="material-icons" style="font-size:26px;line-height: 20px;">file_upload</i>';
                    content += '<strong class="market-price" style="font-size:15px;vertical-align: top;">$' + store_card_data.tcgplayer_price + '</strong>';
                  content += '</div>';
                  content += '<div class="btn_menu'+i+'"  style="padding-left: 5%;">';
                    content += '<i class="fas fa-caret-down fa_1" ></i>';
                  content += '</div>';
                content += '</div>';
              content += '</button>';
            content += '</div>';
            content += '<div class="dropdown-menu'+i+' drop_menu row" style="display:none;background-color:#ffffff">';
              content += '<a href="" class="dropdown-item"style="">Action</a>';
            content += '</div>';
        }
        content += '</div>';
      content += '</div>';
    content += '</div>';
    content += '</div>';
  
    content += '<div id="sec-2-2" class="sec-2-2 col-12 col-sm-12 col-md-6 col-lg-7 col-xl-7 d-flex justify-content-center" style="height: min-content;">';
      content += '<div class="row">';
      for(var j=0;j<6;j++){
        content += '<div class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 py-3">';
        content += '<div class="d-flex flex-column">';
            content += '<div class="row" style="justify-content:center">';
              content += '<div class="info-line rowow">';
                content += '<strong class="card-symbol card_symbol_2" >' + store_card_data.symbol + '</strong>';
                content += '<small class="card-edition common">' + store_card_data.edition + '</small>';
              content += '</div>';
            content += '</div>';
            content += '<div class="row" style="justify-content:center;">';
              content += '<div class="info-line col-3">';
                content += '<strong class="market-price">$' + store_card_data.tcgplayer_price + '</strong>';
                content += '<div class="d-flex justify-content-center align-items-center" >';
                  content += store_card_data.percent > 100 ? '<img class="img-percent" src="../../ygoself/img/card_price_increase.png" />'
                                      : '<img src="../../ygoself/img/card_price_decrease.png" />';
                  content += '<strong class="price-percent" style="color:green">' + store_card_data.percent + '%</strong>';
                content += '</div>';
              content += '</div>';

              content += '<div class="info-line col-6 row">';
                content += '<img class="market-logo label_1" src="../../ygoself/img/card_market_ebay.png" />';
                content += '<img class="market-logo label_2" src="../../ygoself/img/card_market_tcg.png" />';
                content += '<img class="market-logo label_3" src="../../ygoself/img/card_market_toad.png" />';
              content += '</div>';

              content += '<div class="info-line col-3 row">';
                content += '<strong class="market-price">$' + store_card_data.ebay_price + '</strong>';
                content += '<strong class="card-price text-center">$' + store_card_data.common_price + '</strong>';
                content += '<strong class="market-price">$' + store_card_data.trollandtoad_price + '</strong>';
              content += '</div>';
            content += '</div>';
        content += '</div>';
        content += '</div>';
      }
      content += '</div>';
    content += '</div>';
  content += '</div>';
  content += '</div>';
  
  if ($("#store-card-group1").length) {
    $("#store-card-group1").append(content);
  }
}

// ================== settng =================================
function setting(update_date,card_amount,update_version) {
  var content = "";
  content +='<div class="row">';
  content +='<div class="col-6">';
  content += '<div class="game-card" style="margin-top:20px; margin-left:20px;width:200px;height:300px;background-color:#000000">';
  content += '<div class="row"  style="padding-top:30%; justify-content: center;">';
  content += '<strong class="market-price">Top 3 Prices to</strong>';
  content += '</div>';
  content += '<div class="row"  style="justify-content: center;">';
  content += '<strong class="market-price">Display</strong>';
  content += '</div>';
  content += '<div class="row"  style="padding-top:20%;padding-left:15%;">';
  content += '<input type="checkbox" name="chk1" id="eBaycom_chk" checked>';
  content += '<label for="vehicle1"> eBay.com</label>';
  content += '</div>';
  content += '<div class="row" style="padding-left:15%;">';
  content += '<input type="checkbox" name="chk1" id="eBayca_chk" checked>';
  content += '<label for="vehicle2"> eBay.ca</label>';
  content += '</div>';
  content += '<div class="row" style="padding-left:15%;">';
  content += '<input type="checkbox" name="chk1" id="TCGPLAYERcom_chk" checked>';
  content += '<label for="vehicle3"> TCGPLAYER.com</label>';
  content += '</div>';
  content += '<div class="row" style="padding-left:15%;">'
  content += '<input type="checkbox" name="chk1" id="TROLLandToadcom_chk">';
  content += '<label for="vehicle3"> TROLLandToad.com</label>';
  content += '</div>'
  content += '<div class="row" style="padding-left:15%;">'
  content += '<input type="checkbox" name="chk1" id="FaceToFace_chk">';
  content += '<label for="vehicle3"> FaceToFace</label>';
  content += '</div>';
  content += '</div>';

  content += '<div class="game-card" style="margin-top:20px; margin-left:20px;width:200px;height:300px;background-color:#000000">';
  content += '<div class="row"  style="padding-top:30%; justify-content: center;">';
  content += '<strong class="market-price">WebSite Version</strong>';
  content += '</div>';
  content += '<div class="row"  style="justify-content:center;">';
  content += '<strong class="market-price">Last Update:</strong>';
  content += '<strong class="market-price">'+update_date+'</strong>';
  content += '</div>';
  content += '<div class="row" style="padding-top:30%;justify-content:center">';
  content += '<strong class="market-price" style="font-size:25px;">'+update_version+'</strong>';
  content += '</div>';
  content += '</div>';
  content += '</div>';
  content += '</div>';

  content +='<div class="row">';
  content +='<div class="col-6">';
  content += '<div class="game-card" style="margin-top:20px; margin-left:20px;width:200px;height:300px;background-color:#000000">';
  content += '<div class="row"  style="padding-top:30%; justify-content: center;">';
  content += '<strong class="market-price">Currency</strong>';
  content += '</div>';
  content += '<div class="row"  style="padding-top:25%;justify-content:center">';
  content += '<input type="checkbox" name="chk2" id="eBaycom_chk" checked>';
  content += '<label for="vehicle1" style="font-size:25px;margin-left:5px;margin-top:-12px;"> CAD</label>';
  content += '</div>';
  content += '<div class="row" style="justify-content:center;">';
  content += '<input type="checkbox" name="chk2" id="eBayca_chk">';
  content += '<label for="vehicle2" style="font-size:25px;margin-left:5px;margin-top:-12px;"> UAD</label>';
  content += '</div>';
  content += '</div>';

  content += '<div class="game-card" style="margin-top:20px; margin-left:20px;width:200px;height:300px;background-color:#000000">';
  content += '<div class="row"  style="padding-top:30%; justify-content: center;">';
  content += '<strong class="market-price">Cards in Database</strong>';
  content += '</div>';
  content += '<div class="row" style="padding-top:38%;justify-content:center;">';
  content += '<strong class="market-price" style="font-size:25px;">'+card_amount+'</strong>';
  content += '</div>';
  content += '</div>';
  content += '</div>';
  content += '</div>';

  if ($("#card_setting").length) {
    $("#card_setting").append(content);
  }
}