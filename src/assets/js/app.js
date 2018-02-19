import $ from 'jquery';
import whatInput from 'what-input';
window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

// The .foundation() function on the jQuery object will kick off every Foundation plugin at once.
$(document).foundation();

// my scribble below...
// and this works, not sure about in a build, but I would rather have it separate
$(function() {
     $("p").css("border", "3px solid red");
});
