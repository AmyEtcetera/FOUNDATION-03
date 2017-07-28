import $ from 'jquery';
import whatInput from 'what-input';
window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

$(document).foundation();


    // my stuff
// console.log('say why');

  // okay you can put the jquery right here, nbd
 //$("#powerbutton").click(function(){
//     $("p").toggle();
 //});


    // move this somewhere else if it works
// $.getJSON('data.json', function(info){
//     var output='';
//     for (var i = 0; i <= info.links.length-1; i++) {
//       for (key in info.links[i]) {
//         if (info.links[i].hasOwnProperty(key)) {
//           output += '<li>' +
//           '<a href = "' + info.links[i][key] +
//           '">' + key + '</a>';
//           '</li>';
//         }
//       }
//     }
//     var update = document.getElementById('links');
//     update.innerHTML = output;
// }); //getJSON
