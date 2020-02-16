var cnt = 2;
function AddRule()
{
	var DivIns =
		'<div class="card bm m-2" id="card'+String(cnt)+'">'+
			'<div class="card-body">'+
				'<div class="card-header row mb-2">'+
					'<h5 class="col fh">Rule '+String(cnt)+'</h5>'+
					'<h6 class="mr-3 mb-3 fh" data-toggle="collapse" data-target="#cardform'+String(cnt)+'" style="cursor: pointer;">—</h6>'+
				'</div>'+
				'<form id="cardform'+String(cnt)+'" class="collapse show">'+
					'<div class="form-group row">'+
						'<label for="cmds" class="col-form-label col-sm-1 fh"><center>Perform</center></label>'+
						'<input type="text" id="cmds" class="form-control border-secondary col mr-4 bm" placeholder="commands">'+
					'</div>'+
					'<div class="form-group row">'+
						'<label for="Targets" class="col-form-label col-sm-1 fh"><center>on</center></label>'+
						'<input type="text" id="targets" class="form-control border-secondary col bm" placeholder="target files">'+
						'<label for="dpends" class="col-form-label col-sm-2 fh"><center>if there are changes in</center></label>'+
						'<input type="text" id="dpends" class="form-control border-secondary col mr-4 bm" placeholder="dependencies">'+
					'</div>'+
				'</form>'+
			'</div>'+
		'</div>';
	$("#card"+String(cnt-1)).after(DivIns);
	cnt++;
	document.getElementById("Rulebtn").setAttribute("data-target","#card"+String(cnt-1));
}

function ShowClean()
{
	document.getElementById("cleanrule").style.display = "block";
	document.getElementById("Cleanbtn").style.display = "none";
}

function TogglePhony(i)
{
	var btnid = '#phonybtn'+String(i);
	if($(btnid).hasClass('btn-outline-secondary'))
	{	
		$(btnid).removeClass('btn-outline-secondary');
		$(btnid).addClass('btn-secondary')
	}
	else
	{
		$(btnid).removeClass('btn-secondary');
		$(btnid).addClass('btn-outline-secondary')
	}
}

function ShowOverlay()
{
	document.getElementById("overlay").style.display = "block";
}
function HideOverlay()
{
	document.getElementById("overlay").style.display = "none";
}