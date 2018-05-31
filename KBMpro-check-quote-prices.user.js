// ==UserScript==
// @name         KBMpro Angebot - Preis überprüfen
// @namespace    http://concept-design.de/
// @version      0.1
// @description  Prüft, ob der Verkaufspreis mit dem berechneten Preis übereinstimmt.
// @author       Daniel Mann
// @match        https://cundd.kbmpro.de/kbmpro/index.php?action=angebote*
// @grant        none
// ==/UserScript==

(function() {
    if(jQuery('#ag_posten_summe').length > 0) {
        console.log('Tampermonkey is monitoring prices...');
        jQuery("form :input").change(function() {
            if(parseFloat(jQuery('#ag_posten_summe').text().replace('.','').replace(',','.').replace(' €','')).toFixed(2) !== parseFloat(jQuery('.agcalc_vk_ges_sum_hidden').val().replace(',','.')).toFixed(2)) {
                jQuery('#nepvk').css({'background-color': '#c01e1e','color':'#fff'});
                jQuery('#ag_posten_sum').css({'border-color':'#c01e1e'});
            } else {
                jQuery('#nepvk').css({'background-color': '#fff','color':'#000'});
                jQuery('#ag_posten_sum').css({'border-color':'#e4e4e4'});
            }
        });
    }
})();