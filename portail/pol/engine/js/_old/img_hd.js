function findPosX(obj)
{
  var curleft = 0;
  if(obj.offsetParent)
      while(1) 
      {
        curleft += obj.offsetLeft;
        if(!obj.offsetParent)
          break;
        obj = obj.offsetParent;
      }
  else if(obj.x)
      curleft += obj.x;
  return curleft;
}

function findPosY(obj)
  {
    var curtop = 0;
    if(obj.offsetParent)
        while(1)
        {
          curtop += obj.offsetTop;
          if(!obj.offsetParent)
            break;
          obj = obj.offsetParent;
        }
    else if(obj.y)
        curtop += obj.y;
    return curtop;
}
	
function doDetail(i,surl) {
	
	var layerwidth=400;
	o = document.getElementById("layerDetail");
		if (o) {
			o.style.width=400;
			o.innerHTML='<img src="'+surl+'" id=detailpic_'+i+'>';

			o.style.display='inline';

			oimg =document.getElementById("detailpic_"+i);
			
			layerwidth = oimg.width;
			o.style.width=(layerwidth<100)?400:layerwidth+10;
			
			odiv = document.getElementById("gad_"+i);

			odivx= findPosX(odiv);
			
			if (odivx<(layerwidth+60))
			{
				o.style.left=odivx+200;
			}else{
				o.style.left=odivx-layerwidth-60;
			}
			xtop = (findPosY(odiv)+(120/2))-(oimg.height/2);
			
			divh = o.clientHeight;
			st =document.body.scrollTop;
			ch = document.body.clientHeight;
			divh=(st+ch)-divh;
			if (xtop>divh) xtop=divh-5;
			o.style.top=xtop;
		}
}

function clearDetail() {
	o = document.getElementById("layerDetail");
	if (o) o.style.display='none';
}