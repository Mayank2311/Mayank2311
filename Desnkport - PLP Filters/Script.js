(function () {
    function waitUntil(predicate, success, error) {
        var int = setInterval(function () {
            if (predicate()) {
                clearInterval(int);
                int = null;
                success();
            }
        }, 33);

        setTimeout(function () {
            if (int !== null) {
                clearInterval(int);
                if (typeof (error) === 'function') {
                    error();
                }
            }
        }, 10000);
    }

    function Denskportrun() {
        (function (win) {
            'use strict';

            var listeners = [],
                doc = win.document,
                MutationObserver = win.MutationObserver || win.WebKitMutationObserver,
                observer;

            function ready(selector, fn) {
                // Store the selector and callback to be monitored
                listeners.push({
                    selector: selector,
                    fn: fn
                });
                if (!observer) {
                    // Watch for changes in the document
                    observer = new MutationObserver(check);
                    observer.observe(doc.documentElement, {
                        childList: true,
                        subtree: true
                    });
                }
                // Check if the element is currently in the DOM
                check();
            }

            function check() {
                // Check the DOM for elements matching a stored selector
                for (var i = 0, len = listeners.length, listener, elements; i < len; i++) {
                    listener = listeners[i];
                    // Query for elements matching the specified selector
                    elements = doc.querySelectorAll(listener.selector);
                    for (var j = 0, jLen = elements.length, element; j < jLen; j++) {
                        element = elements[j];
                        // Make sure the callback isn't invoked with the
                        // same element more than once
                        if (!element.ready) {
                            element.ready = true;
                            // Invoke the callback with the element
                            listener.fn.call(element, element);
                        }
                    }
                }
            }

            // Expose 'ready'
            win.optiReady = ready;

        })(this);

        var DenskportContainer =
            ` <div class="DenskportV1"> 
      <span class="Denskport_Filter"> FILTERS </span> <span class="Denskport_clear"> <a href="/puzzel">Clear All <img src="https://cdn-3.convertexperiments.com/uf/1002628/10024939/1623665659image+2.png"> </img></a></span>
      </div>`;
        var DenskportContainer2 =
            `<div class="Denskport_Filters"> </div>`;
        var DenskportContainer3 =
            `<div class="Denskport_Title"> Puzzel </div>`;

        window.optiReady('#amasty-shopby-product-list .products > li.item.product.product-item:first-child', function (ele) {
            if (window.innerWidth > 768) {

                jQuery('div#narrow-by-list').prepend(jQuery('div#narrow-by-list .filter-options-item .filter-options-title:contains(Puzzel segment)').closest('.filter-options-item'));
                jQuery('.filter-options .filter-options-item:nth-child(2)').removeClass('active');
                jQuery('.filter-options .filter-options-item:nth-child(1)').addClass('active');
                jQuery('.filter-options .filter-options-item:nth-child(1) .filter-options-content').attr(
                    'style',
                    'display: block;');
                jQuery('.filter-options .filter-options-item:nth-child(2) .filter-options-content').attr(
                    'style', 'display: none;');
                jQuery('.filter-options .filter-options-item:nth-child(1)').before(DenskportContainer);

                var MyContainer = jQuery('.filter-options .filter-options-item .Denskport_Filters').length;

                if (MyContainer == 0) {

                    jQuery('div#narrow-by-list .filter-options-item .filter-options-title').after(DenskportContainer2);

                }
                jQuery('.amshopby-item .amshopby-filter-name').each(function (i, ele) {
                    var FilterName = jQuery(ele).text().trim();
                    var FilterName = jQuery(ele).text().trim();
                    jQuery("div#narrow-by-list .filter-options-item .filter-options-title:contains('" + FilterName + "')").closest('.filter-options-item').find('.Denskport_Filters').append(jQuery(ele).closest('li.item.amshopby-item'));

                });
                jQuery('.filter-options-item .amshopby-item a').text("x");
            } else if (window.innerWidth <= 768) {
                jQuery('.product-items').before(jQuery('.amshopby-filter-current'));
                jQuery('.category-description').before(DenskportContainer3);
                if (jQuery('html[lang="en"]').length > 0) {
                    jQuery('.mobile-filters-proxy-button span font').html("FILTERS");
                } else if (jQuery('html[lang="nl"]').length > 0) {
                    jQuery('.mobile-filters-proxy-button span').html("FILTEREN");
                }
                jQuery('div#narrow-by-list').prepend(jQuery('div#narrow-by-list .filter-options-item .filter-options-title:contains(Puzzel segment)').closest('.filter-options-item'));
                jQuery('.filter-options .filter-options-item:nth-child(2)').removeClass('active');
                jQuery('.filter-options .filter-options-item:nth-child(1)').addClass('active');
                jQuery('.filter-options .filter-options-item:nth-child(1) .filter-options-content').attr(
                    'style',
                    'display: block;');
                jQuery('.filter-options .filter-options-item:nth-child(2) .filter-options-content').attr(
                    'style', 'display: none;');
            }
        })
    }

    waitUntil(function () {
        return typeof jQuery === "function" && jQuery('.products > li.item.product.product-item:first-child').length > 0;
    }, function () {
        Denskportrun();
    });

})();