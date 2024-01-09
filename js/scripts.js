$(document).ready(function() {
	
	/* scroll */

	// $("a[href^='#']").click(function(){
	// 	var target = $(this).attr("href");
	// 	var product = $(this).parent().find("h4").text();
	// 	$("#order_form select[name='goodID'] option[value='"+product+"']").prop("selected", true);
	// 	$("html, body").animate({scrollTop: $(target).offset().top+"px"});
	// 	return false;
	// });

			$("a[href^='#']").click(function(){
		var _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		if (_href == "#order_form") {
			var product = $(this).parent().find(".h3.first").text();
      var productPrice = $(this).parent().find(".price_item.new").text();
      var productId = $(this).parent().find(".hidden.ej-id").text();
			$(".order_form select[name='comment'] option[value='"+product+"']").prop("selected", true);
      $(".order_form input[name='product_price']").val(productPrice);
      $(".order_form input[name='product_id']").val(productId);
		}
		return false;
	});

	var $Id_1 = '365';
	var $Id_2 = '355';
	var $Id_3 = '356';
	var $Id_4 = '357';
	var $Id_5 = '358';
	var $Id_6 = '359';
	var $Id_7 = '281';
	var $Id_8 = '282';
	var $Id_9 = '283';
	var $Id_10 = '284';


  var $Price_1 = '899';
  var $Price_2 = '899';
  var $Price_3 = '899';
  var $Price_4 = '1199';
  var $Price_5 = '1199';
  var $Price_6 = '1199';
  var $Price_7 = '1199';
  var $Price_8 = '1199';
  var $Price_9 = '1199';
  var $Price_10 = '1199';




  $('select.select').change(function(e) {
      $( 'select.select option#tovar_1:selected' ).each(function() {
				$(".order_form input[name='product_price']").val($Price_1);
				$(".order_form input[name='product_id']").val($Id_1);
      });
      $( 'select.select option#tovar_2:selected' ).each(function() {
				$(".order_form input[name='product_price']").val($Price_2);
				$(".order_form input[name='product_id']").val($Id_2);
      });
      $( 'select.select option#tovar_3:selected' ).each(function() {
				$(".order_form input[name='product_price']").val($Price_3);
				$(".order_form input[name='product_id']").val($Id_3);
      });
      $( 'select.select option#tovar_4:selected' ).each(function() {
				$(".order_form input[name='product_price']").val($Price_4);
				$(".order_form input[name='product_id']").val($Id_4);
      });
      $( 'select.select option#tovar_5:selected' ).each(function() {
				$(".order_form input[name='product_price']").val($Price_5);
				$(".order_form input[name='product_id']").val($Id_5);
      });
      $( 'select.select option#tovar_6:selected' ).each(function() {
				$(".order_form input[name='product_price']").val($Price_6);
				$(".order_form input[name='product_id']").val($Id_6);
      });
      $( 'select.select option#tovar_7:selected' ).each(function() {
				$(".order_form input[name='product_price']").val($Price_7);
				$(".order_form input[name='product_id']").val($Id_7);
      });
      $( 'select.select option#tovar_8:selected' ).each(function() {
				$(".order_form input[name='product_price']").val($Price_8);
				$(".order_form input[name='product_id']").val($Id_8);
      });
      $( 'select.select option#tovar_9:selected' ).each(function() {
				$(".order_form input[name='product_price']").val($Price_9);
				$(".order_form input[name='product_id']").val($Id_9);
      });
      $( 'select.select option#tovar_10:selected' ).each(function() {
				$(".order_form input[name='product_price']").val($Price_10);
				$(".order_form input[name='product_id']").val($Id_10);
      });
	});

	/* timer */

	function update() {
		var Now = new Date(), Finish = new Date();
		Finish.setHours( 23);
		Finish.setMinutes( 59);
		Finish.setSeconds( 59);
		if( Now.getHours() === 23  &&  Now.getMinutes() === 59  &&  Now.getSeconds === 59) {
			Finish.setDate( Finish.getDate() + 1);
		}
		var sec = Math.floor( ( Finish.getTime() - Now.getTime()) / 1000);
		var hrs = Math.floor( sec / 3600);
		sec -= hrs * 3600;
		var min = Math.floor( sec / 60);
		sec -= min * 60;
		$(".timer .hours").html( pad(hrs));
		$(".timer .minutes").html( pad(min));
		$(".timer .seconds").html( pad(sec));
		setTimeout( update, 200);
	}
	function pad(s) {
		s = ("00"+s).substr(-2);
		return "<span>" + s[0] + "</span><span>" + s[1] + "</span>";
	}
	update();

	


});