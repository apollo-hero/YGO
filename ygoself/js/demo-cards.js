
$(document).ready(function() {
  if (typeof make_card === "function") {
    // safe to use the function
    for (var i = 0; i < 8; i++) {
      make_card("https://www.ygolegacystore.com/static/img_ygo/igas-en073_common_1st_edition.jpg",
          "LCYW-EN017", "common", 5.20, 153, 5.63, 6.53, 4.59);
    }
    for (var i = 0; i < 8; i++) {
      make_card("https://www.ygolegacystore.com/static/img_ygo/igas-en073_common_1st_edition.jpg",
          "LCYW-EN017", "common", 6.20, 83, 4.63, 7.53, 5.59);
    }
    for (var i = 0; i < 8; i++) {
      make_card("https://www.ygolegacystore.com/static/img_ygo/igas-en073_common_1st_edition.jpg",
          "LCYW-EN017", "common", 7.20, 112, 6.63, 8.53, 7.59);
    }
  }

  if (typeof add_store_card === "function") {
    for (var i = 0; i < 10; i++) {
      add_store_card({
        image_url: 'https://www.ygolegacystore.com/static/img_ygo/igas-en073_common_1st_edition.jpg',
        set_name: 'A Deal with Dark Ruler',
        sell_price_cad: 0.25,
        sell_price_usd: 0.25,
        set_type: 'Dark Crisis',
        set_rarity: 'Common',
        set_code: 'DCR-030',
        set_edition: '1st Edition',
        set_created_at: '2020-01-20 18:55:23',
        markets: [
          {
            name: 'EBAY.CA',
            card_dups: 0,
          },
          {
            name: 'EBAY.COM',
            card_dups: 0,
          },
          {
            name: 'TCGPLAYER',
            card_dups: 10,
            price_cad: 0.26,
            price_low_cad: 0.20,
            price_high_cad: 0.20,
            price_usd: 0.20,
            price_low_usd: 0.15,
            price_high_usd: 0.15,
          },
          {
            name: 'TrollnToad',
            card_dups: 0,
          },
          {
            name: 'FacetoFace',
            card_dups: 1,
            price_cad: 0.37,
            price_low_cad: 0.37,
            price_high_cad: 0.37,
            price_usd: 0.49,
            price_low_usd: 0.49,
            price_high_usd: 0.49,
          }
        ],
        inventory_cnt: 3
      });
    }
  }

  if (typeof add_ebay_range_card === "function") {
    for (var i = 0; i < 10; i++) {
      add_ebay_range_card({
        image_url: 'https://www.ygolegacystore.com/static/img_ygo/igas-en073_common_1st_edition.jpg',
        set_name: 'A Deal with Dark Ruler',
        sell_price_cad: 0.25,
        sell_price_usd: 0.25,
        set_type: 'Dark Crisis',
        set_rarity: 'Common',
        set_code: 'DCR-030',
        set_edition: '1st Edition',
        set_created_at: '2020-01-20 18:55:23',
        markets: [
          {
            name: 'EBAY.CA',
            card_dups: 0,
          },
          {
            name: 'EBAY.COM',
            card_dups: 0,
          },
          {
            name: 'TCGPLAYER',
            card_dups: 10,
            price_cad: 0.26,
            price_low_cad: 0.20,
            price_high_cad: 0.20,
            price_usd: 0.20,
            price_low_usd: 0.15,
            price_high_usd: 0.15,
          },
          {
            name: 'TrollnToad',
            card_dups: 0,
          },
          {
            name: 'FacetoFace',
            card_dups: 1,
            price_cad: 0.37,
            price_low_cad: 0.37,
            price_high_cad: 0.37,
            price_usd: 0.49,
            price_low_usd: 0.49,
            price_high_usd: 0.49,
          }
        ],
        inventory_cnt: 3
      });
    }
  }

  if (typeof add_binder === "function") {
    add_binder([
      { name: 'Prismatic Secret Rare', value: 167 },
      { name: 'Secret Rare', value: 9186 },
      { name: 'Ultra Rare', value: 5118 },
      { name: 'Ultimate Rare', value: 1287 },
      { name: 'Ghost Rare', value: 117 },
      { name: 'Gold Rare', value: 443 },
      { name: 'Platinum Rare', value: 50 },
      { name: 'Prismatic Secret Rare', value: 167 },
      { name: 'Secret Rare', value: 9186 },
      { name: 'Ultra Rare', value: 5118 },
      { name: 'Ultimate Rare', value: 1287 },
      { name: 'Ghost Rare', value: 117 },
      { name: 'Gold Rare', value: 443 },
      { name: 'Platinum Rare', value: 50 },
      { name: 'Prismatic Secret Rare', value: 167 },
      { name: 'Secret Rare', value: 9186 },
      { name: 'Ultra Rare', value: 5118 },
      { name: 'Ultimate Rare', value: 1287 },
      { name: 'Ghost Rare', value: 117 },
      { name: 'Gold Rare', value: 443 },
      { name: 'Platinum Rare', value: 50 },
      { name: 'Prismatic Secret Rare', value: 167 },
      { name: 'Secret Rare', value: 9186 },
      { name: 'Ultra Rare', value: 5118 },
      { name: 'Ultimate Rare', value: 1287 },
      { name: 'Ghost Rare', value: 117 },
      { name: 'Gold Rare', value: 443 },
      { name: 'Platinum Rare', value: 50 },
      { name: 'Prismatic Secret Rare', value: 167 },
      { name: 'Secret Rare', value: 9186 },
      { name: 'Ultra Rare', value: 5118 },
      { name: 'Ultimate Rare', value: 1287 },
      { name: 'Ghost Rare', value: 117 },
      { name: 'Gold Rare', value: 443 },
      { name: 'Platinum Rare', value: 50 },
      { name: 'Prismatic Secret Rare', value: 167 },
      { name: 'Secret Rare', value: 9186 },
      { name: 'Ultra Rare', value: 5118 },
      { name: 'Ultimate Rare', value: 1287 },
      { name: 'Ghost Rare', value: 117 },
      { name: 'Gold Rare', value: 443 },
      { name: 'Platinum Rare', value: 50 },
    ])
  }
// ======================= tradecenter_main ==========================
  if (typeof make_card_tradecenter_main === "function") {
    // safe to use the function
    for (var i = 0; i < 1; i++) {
      make_card_tradecenter_main("https://www.ygolegacystore.com/static/img_ygo/igas-en073_common_1st_edition.jpg",
          "LCYW-EN017", "common", 5.20, 153, 5.63, 6.53, 4.59);
    }
  }
  // ==================== wishlist details ===========================
  if (typeof show_store_card === "function") {
    show_store_card({
      image_url: 'https://www.ygolegacystore.com/static/img_ygo/igas-en073_common_1st_edition.jpg',
      symbol: 'LCYW-EN208',
      edition: 'common',
      ebay_price: 7.20,
      common_price:1.12,
      tcgplayer_price: 5.20,
      percent: 6,
      trollandtoad_price: 7.59,
    });
  }
  // ==================== setting =============================
  if (typeof setting === "function") {
    setting("04/10/2020",12340,"1.0");
  }
  // ================ tradecenter(plus, binder, wantlist) ==============
  if (typeof make_card_tradecenter === "function") {
    // safe to use the function
    for (var i = 0; i < 8; i++) {
      make_card_tradecenter(0,"https://www.ygolegacystore.com/static/img_ygo/igas-en073_common_1st_edition.jpg",
          "LCYW-EN017", "Common", 5.20, 153, 5.63, 6.53, 4.59, 5.78);
    }
    for (var i = 0; i < 8; i++) {
      make_card_tradecenter(0,"https://www.ygolegacystore.com/static/img_ygo/igas-en073_common_1st_edition.jpg",
          "LCYW-EN017", "Common", 6.20, 83, 4.63, 7.53, 5.59, 5.78);
    }
    for (var i = 0; i < 8; i++) {
      make_card_tradecenter(0,"https://www.ygolegacystore.com/static/img_ygo/igas-en073_common_1st_edition.jpg",
          "LCYW-EN017", "Common", 7.20, 112, 6.63, 8.53, 7.59, 5.78);
    }
  }

});
