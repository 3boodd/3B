const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

var prefix ="3";

client.on("message", message => {
 if (message.content === "3help") {
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`

        ***__General orders__***
**
『id / معلومات عن حسابك』
『embed / يكرر كلامك بمبيد』
『server / معلومات عن السيرفر』
『image / يعرض صوره السيرفر』
『avatar / يعرض صورتك او صوره شخص』
『dt / يعرض الوقت في الامارات و مكه المكرمه و مصر و التاريخ』
لعرض سيرفر المساعده support
alarm يصنع لك منبه بالوقت الذي تريد 
invite لدعوة البوت 
support لسيرفر البوت الاساسي 

**

        ***__Bot orders__***
**
『ping / يعرض لك سرعه اتصال البوت』
『members / حاله الاعضاء』
『bot / معلومات عن البوت』
**

        ***__Administrative Orders__***
**
『delete / مسح روم』』
『ct /انشاء روم كتابي』
『cv /انشاء روم صوتي』
『bc /برودكاست』
vk طرد صوت 
sound صوت يرسله الدسكورد
build R لانشاء رومات كتابيه و صوتيه جاهزة 
build Rr لانشاء رتب 
**

        ***__Special orders __***
**
**

        ***__Games orders__***
 **       
『لعبه صراحه / صراحه』
『لعبه مريم / مريم』
『لعبه خواطر / خواطر』
『يعطيك شعر عن الحب / حب』
『يخيرك بين شي وشي / لو خيروك』
『يعطيك عقاب و لازم تنفذه / عقاب』
『لعبه اسئله / اسئلني』
『لعبه اسئله عن العواصم/ عواصم』
『لعبه اسئله / كت تويت』
『لعبه فكك / فكك』
『لعبه الغاز / لغز』
『لعبه ترتيب الحروف لتكون كلمة/ رتب』
marry لعبة الزواج 
hack  خدعة تهكير 
**
   
        ***__Minecraft orders__***
**          
『mq / اسئله عن ماين كرافت』
『mp / صور عن ماين كرافت』
『mf / معلومات عن ماين كرافت』
**  
        
`)


message.author.sendEmbed(embed)

}
}); 

client.login('NDUyMTUwMTk3NzE2Mzg1ODAz.DfMJQA.IdQc87KY6hdoOKwqDXRIfXo0h9w');
