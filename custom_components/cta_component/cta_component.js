// CSS/JS ONLY
(function ($, Drupal, drupalSettings) {
    "use strict";

    Drupal.behaviors.ctaComponent = {
        attach: function (context) {
            $('.cta_component').once().each(function() {
                const content = JSON.parse($(this).attr('data-ssa-custom-component'));

                const template = `
                  <div class="cta-component-container">
                    <div class="col-1-2 col-1-2--intro">
                      <h2>${content.heading}</h2>
                    </div>
                    <div class="col-1-2 col-1-2--action">
                      <p>${content.content}</p>
                      <a href="${content.link_url}" class="btn">${content.link_text}</a>
                    </div>
                  </div>
                `;

                $(this).append(template);

                $(this).find('.cta-component-container ').css({
                  '--introBackgroundColor': content.background_left,
                  '--introColor' : content.color_left,
                  '--actionBackgroundColor' : content.background_right,
                  '--actionColor' : content.color_right
                });
            });
        }
    };
})(jQuery, Drupal, drupalSettings);
