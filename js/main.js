// ============ 全局变量 ============
var message = 50;
document.documentElement.style.setProperty("--message",message + "%");
var Animation = 150;
document.documentElement.style.setProperty("--Animation",Animation + "%");
var reset = 0;

var polo=0,texture=100;
document.documentElement.style.setProperty("--polo",polo+"%");
document.documentElement.style.setProperty("--texture",texture+"%");

var x1,y1,x2,y2;
var currentFrame=1;
var previewFrame=1;
var allList=[];
var deriveJSON_Y=105;
document.documentElement.style.setProperty("--deriveJSON",deriveJSON_Y+"%");

// ============ handIn函数 ============
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
        refreshList();
        refreshFrame();
    };
}

// ============ 模式切换 ============
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

// ============ 图片预览 ============
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
        preview1.src = reader.result;
        preview2.src = reader.result;
        preview3.src = reader.result;
        preview4.src = reader.result;
        preview5.src = reader.result;
        preview6.src = reader.result;
        
        const tempImg = new Image();
        tempImg.onload = function() {
            const newWidth = this.width / 2;
            const newHeight = this.height / 2;
            
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
            
            document.documentElement.style.setProperty("--polo_img_width", newWidth + "px");
            document.documentElement.style.setProperty("--polo_img_height", newHeight + "px");
        };
        tempImg.src = reader.result;
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }
}

// ============ 方向控制 ============
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

// ============ 帧导航 ============
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

// ============ 导出功能 ============
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
function copyToClipboard(text) {
    const textArea = document.createElement('textarea')
    textArea.style.position = 'fixed'
    textArea.style.visibility = '-10000px'
    textArea.value = text
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()
    if (!document.execCommand('copy')) {
        console.warn('复制失败')
        document.body.removeChild(textArea)
        return false
    } else {
        console.log("复制成功")
        document.body.removeChild(textArea)
        return true
    }
}
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
    fileJSON='{\n\t"animeName":"'+polo_animeName.value+'",\n\t"percentageMax":"'+0.2+'",\n\t"totalFrame":"'+polo_totalFrame.value+'",\n\t"width":"'+164+'",\n\t"height":"'+380+'",\n\t"headHeight":"'+polo_headHeight.value+'",\n\t"arrayFrame":[\n\t\t'+arrayFrame+'\n\t]\n}';
    copyToClipboard(fileJSON);
}
function deriveJSON(){
    deriveJSON_Y=5;
    document.documentElement.style.setProperty("--deriveJSON",deriveJSON_Y+"%");
}
function deriveJSON_close(){
    deriveJSON_Y=105;
    document.documentElement.style.setProperty("--deriveJSON",deriveJSON_Y+"%");
}
function changeJSON(){
    message=50;
    document.documentElement.style.setProperty("--message",message + "%");
}

// ============ 辅助函数 ============
function getList(a,b,c,d){
    return '{"prop":"'+a+","+b+","+c+","+d+'"}';
}
function getFrame(a,b){
    return a+"/"+b;
}
function refreshList(){
    document.getElementById('csurrentList').innerHTML=getList(x1,y1,x2,y2);
    allList.splice(currentFrame-1,1,[Number(x1),Number(y1),Number(x2),Number(y2)]);
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
    document.getElementById('currentFrame').innerHTML=getFrame(currentFrame,polo_totalFrame.value);
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

// ============ 动画控制部分 ============

let animationId = null;
let isPlaying = false;
let lastFrameTime = 0;
let frameCount = 0;

function previewAnimation(){
    if (isPlaying) return;
    
    Animation = 50;
    document.documentElement.style.setProperty("--Animation",Animation + "%");
    isPlaying = true;
    previewFrame = 1;
    lastFrameTime = performance.now();
    frameCount = 0;
    
    // 计算总帧数（保持原有特殊逻辑）
    const totalFrames = polo_app_totalframe.value == polo_totalFrame.value ? 
        polo_totalFrame.value / 2 : 
        polo_totalFrame.value;
    const frameDelay = polo_looptime.value / totalFrames;
    
    function animate(currentTime) {
        if (!isPlaying) return;
        
        const elapsed = currentTime - lastFrameTime;
        if (elapsed >= frameDelay) {
            refreshFrame_preview();
            previewFrame = previewFrame >= polo_totalFrame.value ? 1 : previewFrame + 1;
            lastFrameTime = currentTime;
            frameCount++;
        }
        
        if (frameCount < totalFrames) {
            animationId = requestAnimationFrame(animate);
        } else {
            isPlaying = false;
        }
    }
    
    animationId = requestAnimationFrame(animate);
}

function previewAnimation_close(){
    isPlaying = false;
    if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
    }
    Animation = 150;
    document.documentElement.style.setProperty("--Animation",Animation + "%");
}