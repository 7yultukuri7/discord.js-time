client.on('ready', message =>
{
	console.log(new Date().toLocaleString()+' bot is ready!');
  client.user.setActivity('discord.js');

setInterval(() => {
//今
const JTC = new Date(Date.now() - (-9 * 60 - new Date().getTimezoneOffset()) * 60000);
//年
const year = JTC.getFullYear();
//月
const month = JTC.getMonth() + 1;
//日
const day = JTC.getDate();
//曜日
const week = JTC.getDay();
const weeks = ["日", "月", "火", "水", "木", "金", "土"];
const w = weeks[week];
//時
const t = JTC.getHours();
//分
const mi = JTC.getMinutes();
//秒
const s = JTC.getSeconds();
//ミリ秒
const ms = JTC.getMilliseconds();
  client.channels.get('ボイスチャンネルのID').setName(`${month}/${day} (${w}) ${t}:${mi}`)
}, 60 * 1000)

});
