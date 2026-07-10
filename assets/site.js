/* Artistique Carte — interacciones */
(function(){
  // Reveal on scroll
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
  },{threshold:0.12});
  document.querySelectorAll('.rv').forEach(function(el){ io.observe(el); });

  // Envío de formularios a Web3Forms (sin recargar la página)
  document.querySelectorAll('form[data-ac-form]').forEach(function(form){
    var status = form.querySelector('.form-status');
    form.addEventListener('submit', function(ev){
      ev.preventDefault();
      var btn = form.querySelector('[type="submit"]');
      var original = btn ? btn.textContent : '';
      if(btn){ btn.disabled = true; btn.textContent = 'Enviando...'; }
      if(status){ status.className = 'form-status'; status.textContent = ''; }
      var data = new FormData(form);
      fetch('https://api.web3forms.com/submit', {
        method:'POST',
        headers:{ 'Accept':'application/json' },
        body:data
      }).then(function(r){ return r.json(); }).then(function(json){
        if(json.success){
          form.reset();
          if(status){ status.className = 'form-status ok'; status.textContent = '¡Listo! Recibimos tu mensaje. Te respondemos muy pronto.'; }
        } else {
          if(status){ status.className = 'form-status err'; status.textContent = 'Hubo un problema. Escríbenos por WhatsApp o inténtalo de nuevo.'; }
        }
      }).catch(function(){
        if(status){ status.className = 'form-status err'; status.textContent = 'Hubo un problema de conexión. Escríbenos por WhatsApp o inténtalo de nuevo.'; }
      }).finally(function(){
        if(btn){ btn.disabled = false; btn.textContent = original; }
      });
    });
  });
})();

