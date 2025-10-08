(function ($) {
  'use strict';

  const $document = $(document);
  const $navbarCollapse = $('#primaryNav');
  const $contactForm = $('#contactForm');
  const $alert = $('#formAlert');
  const $backToTop = $('#backToTop');

  function smoothScroll(target) {
    const $target = $(target);
    if ($target.length) {
      const offset = $target.offset().top - 72;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  }

  $document.on('click', 'a.nav-link[href^="#"]', function (event) {
    const hash = this.getAttribute('href');
    if (hash.length > 1) {
      event.preventDefault();
      smoothScroll(hash);
      if ($navbarCollapse.hasClass('show')) {
        const collapse = bootstrap.Collapse.getOrCreateInstance($navbarCollapse[0]);
        collapse.hide();
      }
    }
  });

  $backToTop.on('click', function (event) {
    event.preventDefault();
    smoothScroll('#top');
  });

  const carouselElement = document.querySelector('#showcaseCarousel');
  if (carouselElement) {
    new bootstrap.Carousel(carouselElement, {
      interval: 5000,
      ride: 'carousel',
      pause: 'hover',
    });
  }

  function markInvalid($field, message) {
    $field.addClass('is-invalid');
    $field.siblings('.invalid-feedback').text(message);
  }

  function clearInvalid($field) {
    $field.removeClass('is-invalid');
  }

  function validateEmail(value) {
    return /^[\w-.]+@[\w-]+\.[a-z]{2,}$/i.test(value.trim());
  }

  $contactForm.on('submit', function (event) {
    event.preventDefault();

    const $name = $('#name');
    const $email = $('#email');
    const $message = $('#message');
    const $consent = $('#consent');

    let isValid = true;

    if (!$name.val().trim()) {
      isValid = false;
      markInvalid($name, '请填写姓名。');
    } else {
      clearInvalid($name);
    }

    if (!validateEmail($email.val())) {
      isValid = false;
      markInvalid($email, '请输入有效邮箱地址。');
    } else {
      clearInvalid($email);
    }

    if (!$message.val().trim()) {
      isValid = false;
      markInvalid($message, '请填写留言内容。');
    } else {
      clearInvalid($message);
    }

    if (!$consent.is(':checked')) {
      isValid = false;
      $consent.addClass('is-invalid');
    } else {
      $consent.removeClass('is-invalid');
    }

    if (!isValid) {
      $alert.addClass('d-none');
      return;
    }

    $alert.removeClass('d-none').attr('aria-live', 'polite');
    $contactForm.trigger('reset');
    $contactForm.find('.is-invalid').removeClass('is-invalid');
  });

  $('#currentYear').text(new Date().getFullYear());
})(jQuery);
