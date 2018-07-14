const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

var prefix ="3";

client.on('message', message => {
            if (message.content.startsWith(prefix + "help")) {
        message.react("🎎 الاوامر العامة 🎎 ")
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **-bc** ' ,' **لخاصية البرودكاست 📢** ')
.addField('     **-id**  ' ,' **لظهور الايدي 👀** ')
.addField('     **-ping** ' , '**لمعرفة بنق البوت 💡**') 
.addField('     **-invite** ' , '**لدعوة البوت 📍**') 
.addField('     **-support** ' ,' ** سيرفر الدعم الفني 📞**')
.addField('     **-clear** ' ,' **  لمسح الشات مع الرقم 💭 ** ')
.addField('     **-avatar** ' ,' **  للافاتار 💧 ** ')
.addField('     **-roles** ' ,' **  للرتب الي بالسيرفر  ⭐** ')
.addField('     **-server** ' ,' **  معلومات عن السيرفر  👑** ')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
client.on('message', message => {
            if (message.content.startsWith(prefix + "help")) {
        message.react("🎮 اوامر الالعاب 🎮")
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **-مريم** ' ,' **لعبة مريم 👤** ')
.addField('     **-كت تويت**  ' ,' **لعبة كت تويت🍂** ')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }

client.login('NDUyMTUwMTk3NzE2Mzg1ODAz.DfMJQA.IdQc87KY6hdoOKwqDXRIfXo0h9w');
