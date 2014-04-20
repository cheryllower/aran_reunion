
/*********************************************************************************/
/* Site JS                                                                      */
/*********************************************************************************/
$(document).ready(function() {
	$('#header').backstretch([
		"assets/images/photos/image6.jpg",
		"assets/images/photos/image2.jpg",
		"assets/images/photos/image3.jpg",
    "assets/images/photos/image4.jpg",
    "assets/images/photos/image5.jpg",
    "assets/images/photos/image1.jpg"
		], {
			fade: 750,
			duration: 4000
		});
});



/*********************************************************************************/
/* Disqus JS                                                                     */
/*********************************************************************************/

var disqus_shortname = 'aranreunion'; 
(function() {
var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
})();


/*********************************************************************************/
/* Google Maps                                                                   */
/*********************************************************************************/


var map;
var address = new google.maps.LatLng(28.4066232,-81.58820049999997);

function initialize() {

  var mapOptions = {
    zoom:15,
    center: address,
    mapTypeControlOptions: {
       mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'div']
    }
  };
  
  map = new google.maps.Map(document.getElementById("map_canvas"),
      mapOptions);

  var marker = new google.maps.Marker({
    position: address,
    map: map,
    title:"div",
    zIndex: 3
  });
}