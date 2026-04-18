(function () {
  var nav = document.querySelector('.site-nav');
  var toggle = document.querySelector('.nav-toggle');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        if (window.matchMedia('(max-width: 959px)').matches) {
          nav.classList.remove('is-open');
          toggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  var lb = document.getElementById('lightbox');
  if (lb) {
    var lbImg = lb.querySelector('.lightbox__inner img');
    var lbCap = lb.querySelector('.lightbox__cap');
    var closeBtn = lb.querySelector('.lightbox__close');
    function closeLb() {
      lb.classList.remove('is-active');
      lb.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
    document.querySelectorAll('.gallery-item').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var img = btn.querySelector('img');
        var cap = btn.querySelector('figcaption');
        if (img && lbImg) {
          lbImg.src = img.src;
          lbImg.alt = img.alt || '';
          if (lbCap) lbCap.textContent = cap ? cap.textContent : '';
          lb.classList.add('is-active');
          lb.setAttribute('aria-hidden', 'false');
          document.body.style.overflow = 'hidden';
          closeBtn.focus();
        }
      });
    });
    if (closeBtn) closeBtn.addEventListener('click', closeLb);
    lb.addEventListener('click', function (e) {
      if (e.target === lb) closeLb();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && lb.classList.contains('is-active')) closeLb();
    });
  }

  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.querySelector('[name="name"]');
      var email = form.querySelector('[name="email"]');
      var msg = form.querySelector('[name="message"]');
      var subject = 'Enquiry from giwainvestment.com';
      var body =
        'Name: ' +
        (name && name.value ? name.value : '') +
        '\nEmail: ' +
        (email && email.value ? email.value : '') +
        '\n\n' +
        (msg && msg.value ? msg.value : '');
      window.location.href =
        'mailto:hello@giwainvestment.com?subject=' +
        encodeURIComponent(subject) +
        '&body=' +
        encodeURIComponent(body);
    });
  }
})();
