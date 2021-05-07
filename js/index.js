/* 
카카오 - 71be89f4c8c605194c1e47132ee7cef3

*/

$(function() {

	/*************** 글로벌 설정 *****************/
	var time;
	var timeDivision;
	var weatherIcon = {
		i01: 'bi-brightness-high',
		i02: 'bi-cloud-sun',
		i03: 'bi-cloud',
		i04: 'bi-clouds',
		i05: 'bi-cloud-rain-heavy',
		i06: 'bi-cloud-drizzle',
		i07: 'bi-cloud-lightning',
		i08: 'bi-cloud-snow',
		i09: 'bi-cloud-haze',
	}

	var $bgWrapper = $('.bg-wrapper');



	/*************** 사용자 함수 *****************/
		initBg();
    initMap();

	function initBg() {
		var d = new Date();
		time = d.getHours();
		timeDivision = 
		(time >= 2 	&& time < 6	) ? 1 : 
		(time >= 6 	&& time < 10) ? 2 :
		(time >= 10 && time < 14) ? 3 :
		(time >= 14 && time < 18) ? 4 :
		(time >= 18 && time < 22) ? 5 : 6;

		for(var i=1; i<=6; i++) $bgWrapper.removeClass('active'+i);
		$bgWrapper.addClass('active'+timeDivision);
	}

  function initMap(){
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(36.192809, 127.559555),
      level: 13,
      draggable: false,
      zoomable: false,
    };

    var map = new kakao.maps.Map(container, options);
    map.addOverlayMapTypeId(kakao.maps.MapTypeId.TERRAIN);
  }


	/*************** 이벤트 등록 *****************/



	/*************** 이벤트 콜백 *****************/


});