$(document).ready(function() {
  $('.about-button').click(function() {
    showProfile();
  });

  $('img.close').click(function() {
    hideProfile();
  });

  function showProfile() {
    $('.toggled-body').animate({
      left: '-150%',
    }, 800);
    setTimeout(function() {
      $('.overlay').css({
        "background": "rgba(0, 0, 0, 0.8)"
      })
      $('#profile').animate({
        right: '0',
      }, 500);
    });
  }

  function hideProfile() {
    $('#profile').animate({
      height: '1px',
    }, 500);
    setTimeout(function() {
      $('#profile').fadeOut(80);
    });
    setTimeout(function() {
      $('.overlay').css({
        "background": "rgba(0, 0, 0, 0.6)"
      })
      $('.toggled-body').animate({
        left: '0'
      }, 500)
    })
    setTimeout(function() {
      location.reload();
    }, 560)
  }

});

