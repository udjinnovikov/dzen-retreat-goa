(function(){
  var routes={
    '/':'/en/',
    '/goa-flow-travel/':'/en/goa-flow-travel/',
    '/guide/':'/en/guide/',
    '/team/':'/en/team/',
    '/excursions/':'/en/excursions/',
    '/faq/':'/en/faq/',
    '/practices/':'/en/practices/',
    '/hampi/':'/en/hampi/'
  };
  var reverse={};
  Object.keys(routes).forEach(function(ru){reverse[routes[ru]]=ru;});
  function syncLinks(){
    var en=document.documentElement.lang==='en';
    document.querySelectorAll('a[href]').forEach(function(link){
      var href=link.getAttribute('href');
      if(link.matches('.language'))return;
      if(!href||href.charAt(0)==='#'||/^(?:https?:|mailto:|tel:)/i.test(href))return;
      if(link.hasAttribute('data-goa-travel')){
        link.setAttribute('href',en?'/en/goa-flow-travel/':'/goa-flow-travel/');
        return;
      }
      if(en&&routes[href])link.setAttribute('href',routes[href]);
      if(!en&&reverse[href])link.setAttribute('href',reverse[href]);
    });
  }
  document.addEventListener('DOMContentLoaded',function(){
    syncLinks();
    var language=document.querySelector('.language');
    if(language)language.addEventListener('click',function(){
      var destination=language.getAttribute('href')||'';
      try{window.localStorage.setItem('dzen_language',destination.indexOf('/en/')===0?'en':'ru');}catch(error){}
    });
    if(document.documentElement.lang==='en'){
      try{window.localStorage.setItem('dzen_language','en');}catch(error){}
    }
  });
})();
