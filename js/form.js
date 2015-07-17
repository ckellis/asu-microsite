	  function validateForm()
{	  
var a=document.forms["myForm"]["firstName"].value;
var b=document.forms["myForm"]["lastName"].value;
var c=document.forms["myForm"]["address"].value;
var d=document.forms["myForm"]["city"].value;
var e=document.forms["myForm"]["zip"].value;
var f=document.forms["myForm"]["email"].value;
var atpos=f.indexOf("@");
var dotpos=f.lastIndexOf(".");
var g=document.forms["myForm"]["phone"].value;
var h=document.forms["myForm"]["comment"].value;
var i = document.getElementById('one');
var j = document.getElementById('two');
var k = document.getElementById('three');

if (a==null || a=="")
  {
  $('#fn').show();
} else {
	$('#fn').hide();
}
	
if (b==null || b=="")
  {
  $('#ln').show();
} else {
	$('#ln').hide();
}

if ( (i.checked == false ) && (j.checked == false ) && (k.checked == false ) )
{
$('#pc').show();
} else {
	$('#pc').hide();
}

if (c==null || c=="")
  {
  $('#sa').show();
} else {
	$('#sa').hide();
}

if ((d==null || d=="") || (e==null || e=="") || (document.getElementById('state').value == ''))
  {
  $('#zc').show();
} else {
	$('#zc').hide();
}

if (atpos<1 || dotpos<atpos+2 || dotpos+2>=f.length)
  {
  $('#em').show();
} else {
	$('#em').hide();
}

if (!/^\d+(\.\d{1,2})?$/.test(g))
{
$('#pn').show();
} else {
	$('#pn').hide();
}

if ($(".formSpan:visible").length){
} else
        {
			$('#form2 input').val('');
			$('.rad').removeAttr('checked');
			$('#form2 select').val('');
			$('.comment').val('');
			console.log(a + ' ' + 
			b + '\n' + 
			c + '\n' +
			d + ', ' +
			e + '\n' + 
			f + '\n' + 
			g + '\n' +
			h + '\n' );
			alert("Thank you for showing an interest in ASU!");
}		
  return false;
  }

