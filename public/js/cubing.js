var gPageHeader="&nbsp;";

function setTitle(title) {
	gPageHeader = title;
}

function changeHeader(text) {
	if (text != gPageHeader)
		document.getElementById("title").innerHTML="&gt;"+text+"&lt;";
	else
		document.getElementById("title").innerHTML=text;
}

function revertHeader() {
	document.getElementById("title").innerHTML=gPageHeader;
}

function changeFooter(text) {
	if (text != gPageHeader)
		document.getElementById("copyright").innerHTML="&gt;"+text+"&lt;";
	else
		document.getElementById("copyright").innerHTML=text;
}

function revertFooter() {
	document.getElementById("copyright").innerHTML="&copy; 2012 Michael Rose";
}

function goToMerch() {
	document.location="merch.htm";
}

function drawHeaderMenu() {
	document.write(	"<ul>" +
						"<li><a href='index.htm' id='home' onmouseover='changeHeader(this.innerHTML);' onmouseout='revertHeader();'>Home</a></li>" +
						"<li><a href='info.htm' id='info' onmouseover='changeHeader(this.innerHTML);' onmouseout='revertHeader();'>Information</a></li>" +
						"<li><a href='results.htm' id='results' onmouseover='changeHeader(this.innerHTML);' onmouseout='revertHeader();'>Results</a></li>" +
						"<li><a href='links.htm' id='links' onmouseover='changeHeader(this.innerHTML);' onmouseout='revertHeader();'>Links</a></li>" + 
						"<li><a href='merch.htm' id='merch' onmouseover='changeHeader(this.innerHTML);' onmouseout='revertHeader();'>Merchandise</a></li>" + 
						"<li><a href='contact.htm' id='contact' onmouseover='changeHeader(this.innerHTML);' onmouseout='revertHeader();'>Contact Us</a></li>" +
					"</ul>");
}

function drawFooterMenu() {
	document.write(	"<ul>" +
						"<li><a href='index.htm' id='home' onmouseover='changeFooter(this.innerHTML);' onmouseout='revertFooter();'>Home</a></li>" +
						"<li><a href='info.htm' id='info' onmouseover='changeFooter(this.innerHTML);' onmouseout='revertFooter();'>Information</a></li>" +
						"<li><a href='results.htm' id='results' onmouseover='changeFooter(this.innerHTML);' onmouseout='revertFooter();'>Results</a></li>" +
						"<li><a href='links.htm' id='links' onmouseover='changeFooter(this.innerHTML);' onmouseout='revertFooter();'>Links</a></li>" + 
						"<li><a href='merch.htm' id='merch' onmouseover='changeFooter(this.innerHTML);' onmouseout='revertFooter();'>Merchandise</a></li>" + 
						"<li><a href='contact.htm' id='contact' onmouseover='changeFooter(this.innerHTML);' onmouseout='revertFooter();'>Contact Us</a></li>" +
					"</ul>");
}

function drawBackToTop(id) {
	document.write("<a href='#" + id + "' class='back_to_top'>Back To Top</a>");
}

function drawRight() {
	document.write("<h3>Merchandise is Now Available!</h3>" +
					"<img src='typeav3.png' alt='Type-A V 3x3' />" +
					"<a href='merch.htm#typeav3'>Type-A V: $12</a>" +
					"<img src='lanlan2.png' alt='LanLan 2x2' />" +
					"<a href='merch.htm#lanlan2'>LanLan 2x2: $10</a>" +
					"<br />" +
					"<input type='button' value='Order Today!' class='button' onclick='goToMerch();' />");
}

function validateQuestion() {
	var name = document.forms["frmQuestion"]["Name"].value;
	var email = document.forms["frmQuestion"]["Email"].value;
	var question = document.forms["frmQuestion"]["Question"].value;
	if (name == null || name == "" || name == "Name" 
		|| email == null || email == "" || email == "Email" 
		|| question == null || question == "" || question == "Question"  )
		{
		alert("Please fill in all fields to submit your question.");
		return false;
		}
	return true;
}

function validateOrder() {
	var name = document.forms["frmOrder"]["Name"].value;
	var email = document.forms["frmOrder"]["Email"].value;
	var order = document.forms["frmOrder"]["Order"].value;
	if (name == null || name == "" || name == "Name" 
		|| email == null || email == "" || email == "Email" 
		|| order == null || order == "")
		{
		alert("Please fill in all fields and select your items to submit your order.");
		return false;
		}
	return true;
}

function validateRegistration() {
	var name = document.forms["frmRegister"]["Name"].value;
	var email = document.forms["frmRegister"]["Email"].value;
	var event1 = document.forms["frmRegister"]["2x2x2"].checked;
	var event2 = document.forms["frmRegister"]["3x3x3"].checked;
	var event3 = document.forms["frmRegister"]["3x3x3OH"].checked;
	var event4 = document.forms["frmRegister"]["3x3x3BLD"].checked;
	var event5 = document.forms["frmRegister"]["4x4x4"].checked;
	var event6 = document.forms["frmRegister"]["5x5x5"].checked;
	var event7 = document.forms["frmRegister"]["Magic"].checked;
	if (name == null || name == "" || name == "Name" 
		|| email == null || email == "" || email == "Email" 
		|| (!event2 
		&& !event1
		&& !event3
		&& !event4
		&& !event5
		&& !event6
		&& !event7
		))
		{
		alert("Please fill in all fields and select your events to register.");
		return false;
		}
	return true;
}