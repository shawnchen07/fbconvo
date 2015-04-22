function processText() {
	var text = document.getElementById("inputtext").value;
	
	var begin = '<span class="null"><p>';
	var smile = '<span aria-hidden="true" class="emoticon_text">smile emoticon</span><span class="emoticon emoticon_smile" title=":)"></span>';
	var tongue = '<span aria-hidden="true" class="emoticon_text">tongue emoticon</span><span class="emoticon emoticon_tongue" title=":P"></span>';
	var grin = '<span aria-hidden="true" class="emoticon_text">grin emoticon</span><span class="emoticon emoticon_grin" title=":D"></span>';
	var gasp = '<span aria-hidden="true" class="emoticon_text">gasp emoticon</span><span class="emoticon emoticon_gasp" title=":O"></span>';
	var frown = '<span aria-hidden="true" class="emoticon_text">frown emoticon</span><span class="emoticon emoticon_frown" title=":("></span>';
	var wink = '<span aria-hidden="true" class="emoticon_text">wink emoticon</span><span class="emoticon emoticon_wink" title=";)"></span>';
	var like = '<span aria-hidden="true" class="emoticon_text">like emoticon</span><span class="emoticon emoticon_like" title="(y)"></span>';
	var end = '</p></span>';
	
	text = replaceAll(smile, '<span aria-hidden="true" class="emoticon_text">:)</span><span class="emoticon emoticon_smile" title=":)"></span>', text);
	text = replaceAll(tongue, '<span aria-hidden="true" class="emoticon_text">:P</span><span class="emoticon emoticon_tongue" title=":P"></span>', text);
	text = replaceAll(grin, '<span aria-hidden="true" class="emoticon_text">:D</span><span class="emoticon emoticon_grin" title=":D"></span>', text);
	text = replaceAll(gasp, '<span aria-hidden="true" class="emoticon_text">:O</span><span class="emoticon emoticon_gasp" title=":O"></span>', text);
	text = replaceAll(frown, '<span aria-hidden="true" class="emoticon_text">:(</span><span class="emoticon emoticon_frown" title=":("></span>', text);
	text = replaceAll(wink, '<span aria-hidden="true" class="emoticon_text">;)</span><span class="emoticon emoticon_wink" title=";)"></span>', text);
	text = replaceAll(like, '<img src="https://fbstatic-a.akamaihd.net/rsrc.php/v2/yi/r/Akq5NzBQWUE.png" aria-hidden="true" title="(y)"></img>', text);
	
	document.getElementById("test").innerHTML = text;
}

function processText2() {
	var text = document.getElementById("inputtext").value;
	
	var begin = '<span class="null"><p>';
	var smile = '<span aria-hidden="true" class="emoticon_text">smile emoticon</span><span class="emoticon emoticon_smile" title=":)"></span>';
	var paragraph = '</p><p>';
	var tongue = '<span aria-hidden="true" class="emoticon_text">tongue emoticon</span><span class="emoticon emoticon_tongue" title=":P"></span>';
	var grin = '<span aria-hidden="true" class="emoticon_text">grin emoticon</span><span class="emoticon emoticon_grin" title=":D"></span>';
	var gasp = '<span aria-hidden="true" class="emoticon_text">gasp emoticon</span><span class="emoticon emoticon_gasp" title=":O"></span>';
	var frown = '<span aria-hidden="true" class="emoticon_text">frown emoticon</span><span class="emoticon emoticon_frown" title=":("></span>';
	var wink = '<span aria-hidden="true" class="emoticon_text">wink emoticon</span><span class="emoticon emoticon_wink" title=";)"></span>';
	var like = '<span aria-hidden="true" class="emoticon_text">like emoticon</span><span class="emoticon emoticon_like" title="(y)"></span>';
	var end = '</p></span>';
	
	text = replaceAll(begin, '', text);
	text = replaceAll(smile, ':)', text);
	text = replaceAll(paragraph, '\n\n', text);
	text = replaceAll(tongue, ':P', text);
	text = replaceAll(grin, ':D', text);
	text = replaceAll(gasp, ':O', text);
	text = replaceAll(frown, ':(', text);
	text = replaceAll(wink, ';)', text);
	text = replaceAll(like, '(y)', text);
	text = replaceAll(end, '', text);
	
	document.getElementById("test2").innerHTML = text;
}

function replaceAll(find, replace, str) {
	return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

function escapeRegExp(string) {
    return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}