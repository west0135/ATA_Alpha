$(document).ready(function(){
	
	//var qs = new Querystring();
	//var v1 = qs.get("id");
	//	alert(v1);
 	var Id = getParameterByName('id');
	//alert(Id);	
	
	
	switch(Id){
	case "summerCamp":
        
		$("#collapseTwo").slideDown().addClass("in");		
        break;
    case "juniorProgram":
         
		$("#collapseOne").slideDown().addClass("in");		
        break;
    case "cardioTennis":
		$("#collapseThree").slideDown().addClass("in");		
        
        break;
    case "teenTennis":
        
		$("#collapseFour").slideDown().addClass("in");	
        break;
    case "10AndUnder":
		$("#collapseFive").slideDown().addClass("in");	
        
        break;
    case "funDay":
		$("#collapseSix").slideDown().addClass("in");	
       
        break;
	}
	
});

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
