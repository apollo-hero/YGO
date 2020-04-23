function includeHTML() {
  $("div[w3-include-html]").each(function (index) {
    const page_url = $(this).attr('w3-include-html');
    $(this).load(page_url);
  });
}
