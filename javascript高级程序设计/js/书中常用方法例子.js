
//给定字符串转义
function htmlEscape(text){
	return text.replace(/[<>"&]/g, function(match, pos, originalText){
		switch(match){
			case "<":
			return "&lt;";
			case ">":
			return "&gt;";
			case "&":
			return "&amp;";
			case "\"":
			return "&quot;";
		}
	});
}
alert(htmlEscape("<p class=\"greeting\">Hello world!</p>"));
//&lt;p class=&quot;greeting&quot;&gt;Hello world!&lt;/p&gt;


