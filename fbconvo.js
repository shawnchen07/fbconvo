function processText() {
	//document.getElementById("test").innerHTML = document.getElementById("inputtext").value;
	var text = document.getElementById("inputtext").value;
	
	var begin = '<span class="null"><p>';
	var smile = '<span aria-hidden="true" class="emoticon_text">smile emoticon</span><span class="emoticon emoticon_smile" title=":)"></span>';
	//var paragraph = '</p><p>';
	var tongue = '<span aria-hidden="true" class="emoticon_text">tongue emoticon</span><span class="emoticon emoticon_tongue" title=":P"></span>';
	var grin = '<span aria-hidden="true" class="emoticon_text">grin emoticon</span><span class="emoticon emoticon_grin" title=":D"></span>';
	var gasp = '<span aria-hidden="true" class="emoticon_text">gasp emoticon</span><span class="emoticon emoticon_gasp" title=":O"></span>';
	var end = '</p></span>';
	
	text = replaceAll(begin, '', text);
	console.log(text);
	text = replaceAll(smile, ':)', text);
	//text = text.replace(paragraph, "\n\n");
	text = replaceAll(tongue, ':P', text);
	text = replaceAll(grin, ':D', text);
	text = replaceAll(gasp, ':O', text);
	text = replaceAll(end, '', text);
	
	document.getElementById("test").innerHTML = text;
}

function replaceAll(find, replace, str) {
	return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

function escapeRegExp(string) {
    return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}