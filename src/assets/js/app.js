import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();
$(document).ready(()=>{
    if (Foundation.MediaQuery.atLeast('medium')) {

        // True if medium or large
        // False if small
    }
});