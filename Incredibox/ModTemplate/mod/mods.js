modsList = [
	{
		"name": "Cold wave",
		"text": "简介：Cold wave是一款以冷酷、简约为主题的音乐盒子应用。它提供了丰富的音乐资源和个性化的功能，让用户可以轻松地创建和分享自己的音乐作品。",
		"icon": "mod/img/yourTeam.jpg",
		"apk": "https://www.mediafire.com/file/za7ytocj2oxjq37/lofterbox_Coldwave.apk/file",
		"zip": "https://www.mediafire.com/file/6601ikx36078i4s/lofterbox_Coldwave.zip/file",
	},
	{
		"name": "Cold wave",
		"text": "简介：Cold wave是一款以冷酷、简约为主题的音乐盒子应用。它提供了丰富的音乐资源和个性化的功能，让用户可以轻松地创建和分享自己的音乐作品。",
		"icon": "mod/img/yourTeam.jpg",
		"apk": "https://www.mediafire.com/file/za7ytocj2oxjq37/lofterbox_Coldwave.apk/file",
		"zip": "https://www.mediafire.com/file/6601ikx36078i4s/lofterbox_Coldwave.zip/file",
	},
	{
		"name": "Cold wave",
		"text": "简介：Cold wave是一款以冷酷、简约为主题的音乐盒子应用。它提供了丰富的音乐资源和个性化的功能，让用户可以轻松地创建和分享自己的音乐作品。",
		"icon": "mod/img/yourTeam.jpg",
		"apk": "https://www.mediafire.com/file/za7ytocj2oxjq37/lofterbox_Coldwave.apk/file",
		"zip": "https://www.mediafire.com/file/6601ikx36078i4s/lofterbox_Coldwave.zip/file",
	},
	{
		"name": "Cold wave",
		"text": "简介：Cold wave是一款以冷酷、简约为主题的音乐盒子应用。它提供了丰富的音乐资源和个性化的功能，让用户可以轻松地创建和分享自己的音乐作品。",
		"icon": "mod/img/yourTeam.jpg",
		"apk": "https://www.mediafire.com/file/za7ytocj2oxjq37/lofterbox_Coldwave.apk/file",
		"zip": "https://www.mediafire.com/file/6601ikx36078i4s/lofterbox_Coldwave.zip/file",
	},

];

modsShow = "<div id='mods-show-content'><div class='title' id='show-title'>✨New Mods✨</div><div id='box-mods'><div id='slide-mods'>";
let loadMods = "";
var modsList = "";
for (let i = 0; i < modsList.length; i++) {
  loadMods += "<div class='box-show-mod'>";
  loadMods += "<div class='mod-icon'><img src='" + modsList[i]["icon"] + "'/></div>";
  loadMods += "<div class='title'>" + modsList[i]["name"] + "</div>";
  loadMods += "<div class='txt'>" + modsList[i]["text"] + "</div>";
  loadMods += "<button class='link-apk' onclick=\"openExternal('" + modsList[i]["apk"] + "')\"><span>APK</span></button>";
  loadMods += "<button class='link-zip' onclick=\"openExternal('" + modsList[i]["zip"] + "')\"><span>ZIP</span></button>";
  loadMods += "</div>";
}
modsShow += loadMods;
modsShow += "</div></div></div><div class='mod-back'><div class='round' onclick='showContentBack()'><img src='mod/icon/back.svg' alt='SVG Image' width='100%'/></div></div><div class='mod-next'><div class='round' onclick='showContentNext()'><img src='mod/icon/next.svg' alt='SVG Image' width='100%'/></div></div>";

