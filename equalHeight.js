/*
 * jQuery Equal Height Plugin
 *
 * Copyright (c) 2013 Stemerdink IT
 * Dual licensed under the MIT and GPL licenses
 */
(function($) {
    jQuery.fn.equalizeHeight = function(fillElementSelector, heightCalculationSelector) {
        if (typeof heightCalculationSelector == "undefined") {
            heightCalculationSelector = fillElementSelector;
        }
        this.each(function() {
            var container = jQuery(this);

            var highest = 0;
            container.find(heightCalculationSelector).each(function(){
                var height = jQuery(this).height();
                if (height > highest) {
                    highest = height;
                }
            });

            var scalableElements = container.find(fillElementSelector);
            scalableElements.height(highest);
//            I don't remember why I did it this way, so disable it for now.
//            scalableElements.each(function(){
//                var actualElementHeight = scalableElements.height();
//                var heightToAdd = highest - actualElementHeight;
//
//                var newHeight = actualElementHeight + heightToAdd;
//
//                scalableElements.height(newHeight);
//            });
        });
    };
})(jQuery);
