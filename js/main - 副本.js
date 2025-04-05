var message = 50;
document.documentElement.style.setProperty("--message",message + "%");
var Animation = 150;
document.documentElement.style.setProperty("--Animation",Animation + "%");
var reset = 0;

function handIn(){
	polo_animeName=document.getElementById('polo_animeName');
	if(reset == 0){
		polo_totalFrame=document.getElementById('polo_totalFrame');
		polo_headHeight=document.getElementById('polo_headHeight');
	}
	polo_app_totalframe=document.getElementById('polo_app_totalframe');
	polo_looptime=document.getElementById('polo_looptime');
	preview_polo_texture=document.getElementById('preview_polo_texture');
	if(polo_animeName.value==""){
		alert("The 'AnimeName' hasn't been filled in yet");
	};
	if(reset == 0){
		if(polo_totalFrame.value==""){
			alert("The 'TotalFrame' hasn't been filled in yet");
		};
		if(polo_headHeight.value==""){
			alert("The 'HeadHeight' hasn't been filled in yet");
		};
	}
	//if(polo_app_totalframe.value==""){
	//	alert("The 'polo_app_totalframe' hasn't been filled in yet");
	//}
	//if(polo_looptime.value==""){
	//	alert("The 'polo_looptime' hasn't been filled in yet");
	//};
	if(preview_polo_texture.value==""){
		alert("The 'Texture' hasn't been filled in yet");
	};
	if(polo_animeName.value!==""&&polo_totalFrame.value!==""&&polo_headHeight.value!==""&&preview_polo_texture.value!==""&&reset==0){
		message=150;
		document.documentElement.style.setProperty("--message",message+"%");
		document.documentElement.style.setProperty("--polo_width",164+"px");
		document.documentElement.style.setProperty("--polo_height",380+"px");
		document.documentElement.style.setProperty("--polo_headHeight",polo_headHeight.value+"px");
		document.documentElement.style.setProperty("--polo_body","-"+164+"px");
		document.documentElement.style.setProperty("--polo_head",380-polo_headHeight.value+"px");
		x1=0;
		y1=380;
		x2=0;
		y2=0;
		document.documentElement.style.setProperty("--x1","-"+x1+"px");
		document.documentElement.style.setProperty("--y1","-"+y1+"px");
		document.documentElement.style.setProperty("--x2",x2+"px");
		document.documentElement.style.setProperty("--y2",y2+"px");
		document.documentElement.style.setProperty("--x1_outline",x1+"px");
		document.documentElement.style.setProperty("--y1_outline",y1+"px");
		currentFrame=1;
		allList=[];
		for(var i=0;i<polo_totalFrame.value;i++){
			allList.push([Number(x1),Number(y1),Number(x2),Number(y2)]);
		}
		//console.log(allList)
		refreshList();
		refreshFrame();
		document.getElementById('reset').innerHTML="";
		reset = 1;
	}
	if(polo_animeName.value!==""&&preview_polo_texture.value!==""){
		message=150;
		document.documentElement.style.setProperty("--message",message+"%");
		document.documentElement.style.setProperty("--polo_width",164+"px");
		document.documentElement.style.setProperty("--polo_height",380+"px");
		document.documentElement.style.setProperty("--polo_headHeight",polo_headHeight.value+"px");
		document.documentElement.style.setProperty("--polo_body","-"+164+"px");
		document.documentElement.style.setProperty("--polo_head",380-polo_headHeight.value+"px");
		
		document.documentElement.style.setProperty("--x1","-"+x1+"px");
		document.documentElement.style.setProperty("--y1","-"+y1+"px");
		document.documentElement.style.setProperty("--x2",x2+"px");
		document.documentElement.style.setProperty("--y2",y2+"px");
		document.documentElement.style.setProperty("--x1_outline",x1+"px");
		document.documentElement.style.setProperty("--y1_outline",y1+"px");
		//currentFrame=1;
		//console.log(allList)
		refreshList();
		refreshFrame();
	};
	//console.log(preview_polo_texture.value);
}
function previewFile() {
    const preview1 = document.querySelector('#polo_img1');
    const preview2 = document.querySelector('#polo_img2');
    const preview3 = document.querySelector('#polo_img3');
    const preview4 = document.querySelector('#polo_img4');
	const preview5 = document.querySelector('#polo_img5');
	const preview6 = document.querySelector('#polo_img6');
    const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();

    reader.addEventListener("load", function() {
        // 设置所有预览图的src
        preview1.src = reader.result;
        preview2.src = reader.result;
        preview3.src = reader.result;
        preview4.src = reader.result;
		preview5.src = reader.result;
		preview6.src = reader.result;
        
        // 创建临时图片元素获取原始尺寸
        const tempImg = new Image();
        tempImg.onload = function() {
            // 将所有预览图的显示尺寸缩小一半
            const newWidth = this.width / 2;
            const newHeight = this.height / 2;
            
            //preview1.style.width = newWidth + 'px';
            //preview1.style.height = newHeight + 'px';
            preview2.style.width = newWidth + 'px';
            preview2.style.height = newHeight + 'px';
            preview3.style.width = newWidth + 'px';
            preview3.style.height = newHeight + 'px';
            preview4.style.width = newWidth + 'px';
            preview4.style.height = newHeight + 'px';
			preview5.style.width = newWidth + 'px';
			preview5.style.height = newHeight + 'px';
			preview6.style.width = newWidth + 'px';
			preview6.style.height = newHeight + 'px';
            
            // 或者使用CSS变量（如果你确实需要）
            document.documentElement.style.setProperty("--polo_img_width", newWidth + "px");
            document.documentElement.style.setProperty("--polo_img_height", newHeight + "px");
        };
        tempImg.src = reader.result;
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }
}

//var i=1;
//function jia1(){
//	i++;
//	document.documentElement.style.setProperty("--Y",i+"%");
//}

var polo=0,texture=100;
document.documentElement.style.setProperty("--polo",polo+"%");
document.documentElement.style.setProperty("--texture",texture+"%");

function choose_polo(){
	polo=0;
	texture=100;
	document.documentElement.style.setProperty("--polo",polo+"%");
	document.documentElement.style.setProperty("--texture",texture+"%");
}
function choose_texture(){
	polo=100;
	texture=0;
	document.documentElement.style.setProperty("--polo",polo+"%");
	document.documentElement.style.setProperty("--texture",texture+"%");
}

var x1,y1,x2,y2;

function up(){
	if(polo==0){
		y2--;
		document.documentElement.style.setProperty("--y2",y2+"px");
	}
	else{
		y1-=polo_headHeight.value;
		document.documentElement.style.setProperty("--y1","-"+y1+"px");
		document.documentElement.style.setProperty("--y1_outline",y1+"px");
	}
	refreshList();
}
function left(){
	if(polo==0){
		x2=x2-1;
		document.documentElement.style.setProperty("--x2",x2+"px");
	}
	else{
		x1-=164;
		document.documentElement.style.setProperty("--x1","-"+x1+"px");
		document.documentElement.style.setProperty("--x1_outline",x1+"px");
	}
	refreshList();
}
function down(){
	if(polo==0){
		y2++;
		document.documentElement.style.setProperty("--y2",y2+"px");
	}
	else{
		y1=Number(y1)+Number(polo_headHeight.value);
		document.documentElement.style.setProperty("--y1","-"+y1+"px");
		document.documentElement.style.setProperty("--y1_outline",+y1+"px");
	}
	refreshList();
}
function right(){
	if(polo==0){
		x2++;
		document.documentElement.style.setProperty("--x2",x2+"px");
	}
	else{
		x1=Number(x1)+Number(164);
		document.documentElement.style.setProperty("--x1","-"+x1+"px");
		document.documentElement.style.setProperty("--x1_outline",x1+"px");
	}
	refreshList();
}

function lastFrame(){
	if(currentFrame>1){
		currentFrame=currentFrame-1;
		refreshFrame();
	}
}
function nextFrame(){
	if(currentFrame<polo_totalFrame.value){
		currentFrame++;
		refreshFrame();
	}
}

function getList(a,b,c,d){
	list='{"prop":"'+a+","+b+","+c+","+d+'"}';
	//console.log(list);
	return(list);
}
function getFrame(a,b){
	frame=a+"/"+b;
	return(frame);
}
function refreshList(){
	document.getElementById('csurrentList').innerHTML=getList(x1,y1,x2,y2);
	//console.log(get_list());
	allList.splice(currentFrame-1,1,[Number(x1),Number(y1),Number(x2),Number(y2)]);
	//console.log(allList[0]);
}
function refreshFrame(){
	x1=allList[currentFrame-1][0];
	y1=allList[currentFrame-1][1];
	x2=allList[currentFrame-1][2];
	y2=allList[currentFrame-1][3];
	document.documentElement.style.setProperty("--x1","-"+x1+"px");
	document.documentElement.style.setProperty("--y1","-"+y1+"px");
	document.documentElement.style.setProperty("--x2",x2+"px");
	document.documentElement.style.setProperty("--y2",y2+"px");
	document.documentElement.style.setProperty("--x1_outline",x1+"px");
	document.documentElement.style.setProperty("--y1_outline",y1+"px");
	document.getElementById('csurrentList').innerHTML=getList(x1,y1,x2,y2);
	//console.log(get_list());
	document.getElementById('currentFrame').innerHTML=getFrame(currentFrame,polo_totalFrame.value);
}

function download(filename, text) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);
    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    } else {
        pom.click();
    }
}
const copyToClipboard = (text) => {
  // 创建一个文本域 
  const textArea = document.createElement('textarea')
  // 隐藏掉这个文本域，使其在页面上不显示	
  textArea.style.position = 'fixed'
  textArea.style.visibility = '-10000px'
  // 将需要复制的内容赋值给文本域
  textArea.value = text
  // 将这个文本域添加到页面上
  document.body.appendChild(textArea)
  // 添加聚焦事件，写了可以鼠标选取要复制的内容
  textArea.focus()
  // 选取文本域内容
  textArea.select()

  if (!document.execCommand('copy')) { // 检测浏览器是否支持这个方法
    console.warn('浏览器不支持 document.execCommand("copy")')
    // 复制失败将构造的标签 移除
    document.body.removeChild(textArea)
    return false
  } else {
  	console.log("复制成功")
  	// 复制成功后再将构造的标签 移除
    document.body.removeChild(textArea)
    return true
  }
}

var deriveJSON_Y=105;
document.documentElement.style.setProperty("--deriveJSON",deriveJSON_Y+"%");

function deriveJSON(){
	deriveJSON_Y=5;
	document.documentElement.style.setProperty("--deriveJSON",deriveJSON_Y+"%");
}
function deriveJSON_close(){
	deriveJSON_Y=105;
	document.documentElement.style.setProperty("--deriveJSON",deriveJSON_Y+"%");
}


//导出
function downloadJSON(){
	var arrayFrame="";
	for(var i=0;i<polo_totalFrame.value;i++){
		if(i!==polo_totalFrame.value-1){
			l=getList(allList[i][0],allList[i][1],allList[i][2],allList[i][3]);
			arrayFrame=arrayFrame+l+",\n\t\t";
		}
		else{
			l=getList(allList[i][0],allList[i][1],allList[i][2],allList[i][3]);
			arrayFrame=arrayFrame+l;
		}
	}
	//console.log(arrayFrame);
	fileJSON='{\n\t"animeName":"'+polo_animeName.value+'",\n\t"percentageMax":"'+0.2+'",\n\t"totalFrame":"'+polo_totalFrame.value+'",\n\t"width":"'+164+'",\n\t"height":"'+380+'",\n\t"headHeight":"'+polo_headHeight.value+'",\n\t"arrayFrame":[\n\t\t'+arrayFrame+'\n\t]\n}';
	download(polo_animeName.value+".json",fileJSON);
}
function copyJSON(){
	var arrayFrame="";
	for(var i=0;i<polo_totalFrame.value;i++){
		if(i!==polo_totalFrame.value-1){
			l=getList(allList[i][0],allList[i][1],allList[i][2],allList[i][3]);
			arrayFrame=arrayFrame+l+",\n\t\t";
		}
		else{
			l=getList(allList[i][0],allList[i][1],allList[i][2],allList[i][3]);
			arrayFrame=arrayFrame+l;
		}
	}
	//console.log(arrayFrame);
	fileJSON='{\n\t"animeName":"'+polo_animeName.value+'",\n\t"percentageMax":"'+0.2+'",\n\t"totalFrame":"'+polo_totalFrame.value+'",\n\t"width":"'+164+'",\n\t"height":"'+380+'",\n\t"headHeight":"'+polo_headHeight.value+'",\n\t"arrayFrame":[\n\t\t'+arrayFrame+'\n\t]\n}';
	copyToClipboard(fileJSON);
}

function changeJSON(){
	message=50;
	document.documentElement.style.setProperty("--message",message + "%");
}


function previewAnimation(){
	Animation = 50;
	document.documentElement.style.setProperty("--Animation",Animation + "%");
	requestAnimationFrame(runFrame); // 启动
}
function previewAnimation_close(){
	Animation = 150;
	document.documentElement.style.setProperty("--Animation",Animation + "%");
}
function refreshFrame_preview(){
	x1_preview=allList[previewFrame-1][0];
	y1_preview=allList[previewFrame-1][1];
	x2_preview=allList[previewFrame-1][2];
	y2_preview=allList[previewFrame-1][3];
	document.documentElement.style.setProperty("--x1_preview","-"+x1_preview+"px");
	document.documentElement.style.setProperty("--y1_preview","-"+y1_preview+"px");
	document.documentElement.style.setProperty("--x2_preview",x2_preview+"px");
	document.documentElement.style.setProperty("--y2_preview",y2_preview+"px");
}

	//for(var previewFrame = 1 ;previewFrame <polo_totalFrame.value ;previewFrame++){
	//	if(polo_app_totalframe.value == polo_totalFrame.value){
	//		await wait(polo_looptime.value/(polo_totalFrame.value/2)); // 每帧间隔
	//	}
	//	else{
	//		await wait(polo_looptime.value/polo_totalFrame.value); // 每帧间隔
	//	}

let lastTime = performance.now();
let frameCount = 0;

function runFrame(currentTime) {
    if (currentTime - lastTime >= 1) { // 检查是否过了 1ms
        frameCount++;
		refreshFrame_preview()
        //console.log(`当前帧: ${frameCount}`);
        lastTime = currentTime;
    }
    
    if (frameCount < 100) {
        requestAnimationFrame(runFrame); // 继续下一帧
    }
}