function loaded()
{
	var lang = getParameterValue("lang");
	if (lang != "") String.locale = lang;

	document.title = _(document.title);

	var tags = ['menu1', 'menu2', 'menu3', 'menu4', 'menu5', 'menu1', 
	'menu2', 'menu3', 'menu4', 'menu5', 'mainH', 'mainP', 'presale', 
	'button_p', 'featuredH', 'featuredH', 'forbes', 'strategy', 
	'stratCard1H', 'stratCard1P', 'stratCard2H', 'stratCard2P', 
	'stratCard3H', 'stratCard3P', 'strat_4', 'stratCard4H', 'stratCard4P', 
	'roadmap', 'roadmapH', 'Q1h', 'Q11', 'Q12', 'Q13', 'Q14', 'Q15', 'Q16', 
	'Q17', 'Q18', 'Q2h', 'Q21', 'Q22', 'Q23', 'Q24', 'Q25', 'tokenomics', 
	'tokenH', 'tokenTexth', 'tokenTextp', 'images_card1p', 'images_card2p', 
	'images_card3p', 'images_cardp', 'token_dist_h', 'token_dist_p', 'centerp', 
	'centerh', 'chart1h', 'chart1p', 'chart2h', 'chart2p', 'chart3h', 'chart3p', 
	'chart4h', 'chart4p', 'chart5h', 'chart5p', 'chart6h', 'chart6p', 'chart7h',
	 'chart7p', 'chart8h', 'chart8p', 'faq', 'quetion1', 'answer1', 'quetion2',
	  'answer2', 'quetion3', 'answer3', 'quetion4', 'answer4', 'footer_p']

	  for(var i = 0; i < tags.length; i++){
		localizeHTMLTag(tags[i])
	  }
	  


/* Some helper functions: */

var _ = function (string) {
	return string.toLocaleString();
};

function localizeHTMLTag(tagId)
{
	tag = document.getElementById(tagId);
	tag.innerHTML = _(tag.innerHTML);
}

function getParameterValue(parameter)
{
	parameter = parameter.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
	var regexS = "[\\?&]" + parameter + "=([^&#]*)";
	var regex = new RegExp(regexS);
	var results = regex.exec(window.location.href);
	if(results == null)
		return "";
	else
		console.log(results[1])
		return results[1];
}