
jQuery(document).ready(function(){
  jQuery('li.page-item-21 li a').each(function(atag){
    atag = jQuery(this);
    deptName = atag.text().toLowerCase().replace(/[^a-z]/gi,'');
    atag.attr('href','#' + deptName);
  }).click(function(event){
    jQuery(jQuery(this).attr('href')).first()[0].scrollIntoView();
    window.scrollBy(0,-50);
    event.preventDefault();
  });
});

jQuery(document).ready(function(){
  jQuery('li.page-item-1443 li a').each(function(atag){
    atag = jQuery(this);
    deptName = atag.text().toLowerCase().replace(/[^a-z]/gi,'');
    atag.attr('href','#' + deptName);
  }).click(function(event){
    jQuery(jQuery(this).attr('href')).first()[0].scrollIntoView();
    window.scrollBy(0,-50);
    event.preventDefault();
  });
});

/* Page NOT anchor*/
jQuery(document).ready(function(){
  jQuery('li.page-item-1443 li').not('.page-item-3856, .page-item-3852').each(function(){
    atag = jQuery(this).find('a').first();
    deptName = atag.text().toLowerCase().replace(/[^a-z]/gi,'');
    atag.attr('href','/corporate/safety/#' + deptName);
  });
});
/* sidebar menu link contains NOT anchor*/
if(window.location.hash) {
      setTimeout(function(){
        window.scrollBy(0,-50);
      },1);
}
jQuery(document).ready(function(){
  jQuery('li.page-item-1443 li').not('.page-item-3856, .page-item-3852').each(function(){
    atag = jQuery(this).find('a').first();
    deptName = atag.text().toLowerCase().replace(/[^a-z]/gi,'');
    atag.attr('href','#' + deptName);
    atag.click(function(event){
      jQuery(jQuery(this).attr('href')).first()[0].scrollIntoView();
      window.scrollBy(0,-50);
      event.preventDefault();
    });
  });
});


