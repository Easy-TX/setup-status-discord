// nhập id của bản thân
user_id = "";
// Tạo ứng dụng trên develop discord lấy id ứng dụng đó nhập vô
application_id = "";
// Token bot, bot này k cần hoạt động vẫn chạy bth nhé
access_token = "";
const DiscordRPC = require('discord-rpc');
const rpc = new DiscordRPC.Client({ transport: 'ipc' });
let seconds = 0; // bạn setup số giây bắt đầu đếm như nào cũng đc

function formatTime(seconds) {
    let days = Math.floor(seconds / (24*60*60));
    seconds  -= days*24*60*60;
    let hrs   = Math.floor(seconds / (60*60));
    seconds  -= hrs*60*60;
    let mnts = Math.floor(seconds / 60);
    seconds  -= mnts*60;
    return (days>0?days+" ngày ":"")+(hrs>0?hrs+" giờ ":"")+(mnts>0?mnts+" phút ":"")+seconds+" giây";
}

rpc.on('ready', () => {
    console.log('Đã tạo trạng thái cho bản thân thành công!');
    karma = {
        "label": "THAM GIA NGAY!!!",
        "url": "https://discord.gg/karmacatholic2024"
    };
    voice = {
        "label": "Nhấn vô đây!",
        "url": "https://discord.gg/q2VGYGwCev"
    };
    
setInterval(() => {
        seconds++;
        let time = formatTime(seconds);
        rpc.setActivity({
            state: "Diễn ra hàng ngày!!!",
            details: "Giveaway, Minigame",
            largeImageKey: "image",
            largeImageText: "Karma Catholic",
            smallImageKey: "dayoi",
            smallImageText: "It's me!",
            instance: true, 
            buttons: [karma,voice],
            startTimestamp: Date.now() - seconds * 1000
        });
    }, 1000);
});
rpc.login({ clientId: application_id, accessToken: access_token, userId: user_id });
