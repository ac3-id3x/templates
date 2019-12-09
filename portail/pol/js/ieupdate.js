objects = document.getElementsByTagName("object");
for (var i = 0; i < objects.length; i++)
{
    if (objects[i].type != 'application/x-silverlight-2') {
    	objects[i].outerHTML = objects[i].outerHTML;
    }
}

