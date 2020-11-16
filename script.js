$(".nav-link").click(function(){	
	$(".nav-link").removeClass("active");
	$(this).addClass("active");
});
$("#showamount").click(function(){	
	$(".accountWrap").show();
});
// lose focus on user info div
$(document).mouseup(function (e) { 
	if ($(e.target).closest(".accountWrap").length === 0) { 
		$(".accountWrap").hide(); 
	} 
});
$("input.switch_1").click(function(){
	if($(".switch_1").prop("checked")){
		localStorage.setItem("Incognito", "1");
		$(".amount").html("<span>Incognito</span>");
		
	}else{
		localStorage.removeItem("Incognito");
		$.get("./assets/api.json").
		done(function(response) {
			console.log(response);
			$(".amount").html(response.amount);
		});
		
		
	}
});
// Initialize Data from appi 
$(document).ready(function() {
//	ajax

$.get("./assets/api.json").
	done(function(response) {
		
		$(".notifications").text(response.offers);
		if(localStorage.getItem("Incognito") != 1){
			$(".amount").text(response.amount);
			$(".switch_1").removeAttr("checked");
		}else{
			$(".switch_1").attr("checked","checked")
			$(".amount").html("<span>Incognito</span>");
		}	
		$("#user").html('<b>'+response.account+'</b>');
		$(".withdrawal").html('<b>'+response.availlableToWithdrawal+'</b>');
		$(".tobet").html('<b>'+response.availlableToBet+'</b>');
		$(".openbets").html('<b>'+response.openBets+'</b>');
		$(".loyalty").html('<b>'+response.loyalty+'</b>');
		$(".unlockBonus").html('<b>'+response.bonus.unlockBonus+'</b>');
		
		// calculate Progress Bar //
		var totalProgress = parseFloat(response.bonus.toGetBonus); //The 100% of Progress Bar
		var alreadyBet = parseFloat(response.bonus.played)/(totalProgress/100); //  % value of already bet  
		var haveToBet = parseFloat(response.bonus.expectedMore)/(totalProgress/100); //  % value remaining to the first step
		var remainingtilltheend = 100-(alreadyBet + haveToBet); //% value till the end of progressbar
		$("#bonusAccomplished").css("width",alreadyBet+"%");
		$("#bonusleft").css("width",(alreadyBet+haveToBet)+"%");
		$("#unlocked").css("left",(alreadyBet+haveToBet)+"%");
		$("#bonustilltheend").css("width",(remainingtilltheend)+"%");
		$(".played").html('<b>'+response.bonus.played+'</b>');
		$(".toUnlock").html('<b>'+response.bonus.expectedMore+'</b>');
		$(".unlockWBonus").html('<b>'+response.bonus.toGetBonus+'</b>');
	});
});
$(".refresh").children("img").click(function(){
  $.get("./assets/api.json").
	done(function(response) {
		
		$(".notifications").text(response.offers);
		if(localStorage.getItem("Incognito") != 1){
			$(".amount").text(response.amount);
			$(".switch_1").removeAttr("checked");
		}else{
			$(".switch_1").attr("checked","checked")
			$(".amount").html("<span>Incognito</span>");
		}	
		$("#user").html('<b>'+response.account+'</b>');
		$(".withdrawal").html('<b>'+response.availlableToWithdrawal+'</b>');
		$(".tobet").html('<b>'+response.availlableToBet+'</b>');
		$(".openbets").html('<b>'+response.openBets+'</b>');
		$(".loyalty").html('<b>'+response.loyalty+'</b>');
		$(".unlockBonus").html('<b>'+response.bonus.unlockBonus+'</b>');
		
		// calculate Progress Bar //
		var totalProgress = parseFloat(response.bonus.toGetBonus); //The 100% of Progress Bar
		var alreadyBet = parseFloat(response.bonus.played)/(totalProgress/100); //  % value of already bet  
		var haveToBet = parseFloat(response.bonus.expectedMore)/(totalProgress/100); //  % value remaining to the first step
		var remainingtilltheend = 100-(alreadyBet + haveToBet); //% value till the end of progressbar
		$("#bonusAccomplished").css("width",alreadyBet+"%");
		$("#bonusleft").css("width",(alreadyBet+haveToBet)+"%");
		$("#unlocked").css("left",(alreadyBet+haveToBet)+"%");
		$("#bonustilltheend").css("width",(remainingtilltheend)+"%");
	});

});
