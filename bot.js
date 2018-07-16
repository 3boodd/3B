const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

var prefix = "3";

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


client.on('message', msg => {
  if (msg.content === '3help') {
    msg.reply(':envelope: | تم ارسال الرساله في الخاص');
  }
});

client.on('message', msg => {
  if (msg.content === '3invite') {
    msg.reply('https://discordapp.com/oauth2/authorize?client_id=452150197716385803&scope=bot&permissions=2080374975');
  }
});


const Sra7a = [
     'صراحه  |  صوتك حلوة؟',
     'صراحه  |  التقيت الناس مع وجوهين؟',
     'صراحه  |  شيء وكنت تحقق اللسان؟',
     'صراحه  |  أنا شخص ضعيف عندما؟',
     'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
     'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
     'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
     'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
     'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
     'صراحه  |  أشجع شيء حلو في حياتك؟',
     'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
     'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
     'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
     'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
     'صراحه  |  نظرة و يفسد الصداقة؟',
     'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
     'صراحه  |  شخص معك بالحلوه والمُره؟',
     'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
     'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
     'صراحه  |  وش تتمنى الناس تعرف عليك؟',
     'صراحه  |  ابيع المجرة عشان؟',
     'صراحه  |  أحيانا احس ان الناس ، كمل؟',
     'صراحه  |  مع مين ودك تنام اليوم؟',
     'صراحه  |  صدفة العمر الحلوة هي اني؟',
     'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
     'صراحه  |  صفة تحبها في نفسك؟',
     'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
     'صراحه  |  تصلي صلواتك الخمس كلها؟',
     'صراحه  |  ‏تجامل أحد على راحتك؟',
     'صراحه  |  اشجع شيء سويتة بحياتك؟',
     'صراحه  |  وش ناوي تسوي اليوم؟',
     'صراحه  |  وش شعورك لما تشوف المطر؟',
     'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
     'صراحه  |  ما اكثر شي ندمن عليه؟',
     'صراحه  |  اي الدول تتمنى ان تزورها؟',
     'صراحه  |  متى اخر مره بكيت؟',
     'صراحه  |  تقيم حظك ؟ من عشره؟',
     'صراحه  |  هل تعتقد ان حظك سيئ؟',
     'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
     'صراحه  |  كلمة تود سماعها كل يوم؟',
     'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
     'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
     'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
     'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
     '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
     'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
     '‏صراحه | هل تحب عائلتك ام تكرههم؟',
     '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
     '‏صراحه  |  هل خجلت من نفسك من قبل؟',
     '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
     '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
     '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
	  '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
     '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
     '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
     'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
     '‏صراحه  |  ما هو عمرك الحقيقي؟',
     '‏صراحه  |  ما اكثر شي ندمن عليه؟',
	 'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
]

   client.on('message', message => {
 if (message.content.startsWith('3صراحه')) {
     if(!message.channel.guild) return message.reply('** This command only for servers **');
  var client= new Discord.RichEmbed()
  .setTitle("لعبة صراحة ..")
  .setColor('RANDOM')
  .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
  .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                  .setTimestamp()

   message.channel.sendEmbed(client);
   message.react("??")
 }
});

const Za7f = [
    "**صورة وجهك او رجلك او خشمك او يدك**.",
    "**اصدر اي صوت يطلبه منك الاعبين**.",
    "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
    "**روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل**.",
    "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
    "**سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك**.",
    "**ذي المرة لك لا تعيدها**.",
    "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
    "**صور اي شيء يطلبه منك الاعبين**.",
    "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
    "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
    "**سو مشهد تمثيلي عن مصرية بتولد**.",
    "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
    "**ذي المرة لك لا تعيدها**.",
    "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
    "**روح عند اي احد بالخاص و قول له انك تحبه و الخ**.",
    "**اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص**.",
    "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
    "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
    "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
    "**غير اسمك الى اسم من اختيار الاعبين الي معك**.",
    "**اتصل على امك و قول لها انك تحبها :heart:**.",
    "**لا يوجد سؤال لك سامحتك :slight_smile:**.",
    "**قل لواحد ماتعرفه عطني كف**.",
    "**منشن الجميع وقل انا اكرهكم**.",
    "**اتصل لاخوك و قول له انك سويت حادث و الخ....**.",
    "**روح المطبخ و اكسر صحن او كوب**.",
    "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
    "**قول لاي بنت موجود في الروم كلمة حلوه**.",
    "**تكلم باللغة الانجليزية الين يجي دورك مرة ثانية لازم تتكلم اذا ما تكلمت تنفذ عقاب ثاني**.",
    "**لا تتكلم ولا كلمة الين يجي دورك مرة ثانية و اذا تكلمت يجيك باند لمدة يوم كامل من السيرفر**.",
    "**قول قصيدة **.",
    "**تكلم باللهجة السودانية الين يجي دورك مرة ثانية**.",
    "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
    "**اول واحد تشوفه عطه كف**.",
    "**سو مشهد تمثيلي عن اي شيء يطلبه منك الاعبين**.",
    "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
    "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
    "**روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك**.",
    "**تاخذ عقابين**.",
    "**قول اسم امك افتخر بأسم امك**.",
    "**ارمي اي شيء قدامك على اي احد موجود او على نفسك**.",
    "**اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك**.",
    "**اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه**.",
    "**تتصل على الوالده  و تقول لها خطفت شخص**.",
    "** تتصل على الوالده  و تقول لها تزوجت با سر**.",
    "**����تصل على الوالده  و تقول لها  احب وحده**.",
      "**تتصل على شرطي تقول له عندكم مطافي**.",
      "**خلاص سامحتك**.",
      "** تصيح في الشارع انا  مجنوون**.",
      "** تروح عند شخص تقول له احبك**.",
  
]

 client.on('message', message => {
   if (message.content.startsWith("3عقاب")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL) 
 .addField('WOlF BOT' ,
  `${Za7f[Math.floor(Math.random() * Za7f.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[38ab] Send By: ' + message.author.username)
    }
});


 const cuttweet = [
     'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
     'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
     'كت تويت | الحرية لـ ... ؟',
     'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
     'كت تويت ‏| كلمة للصُداع؟',
     'كت تويت ‏| ما الشيء الذي يُفارقك؟',
     'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
     'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
     'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
     'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
     '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
     'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
     '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
     '‏كت تويت | وش يفسد الصداقة؟',
     '‏كت تويت | شخص لاترفض له طلبا ؟',
     '‏كت تويت | كم مره خسرت شخص تحبه؟.',
     '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
     '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
     '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
     '‏كت تويت |أقوى كذبة مشت عليك ؟',
     '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
     'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
     '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
     '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
     '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
     '‏كت تويت | مطلبك الوحيد الحين ؟',
     '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]

 client.on('message', message => {
   if (message.content.startsWith("3كت تويت")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL) 
 .addField('لعبه كت تويت' ,
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});

const secreT = [
  "**الحياة بكل ما فيها تقف دائمًا على حد الوسطية بين اتزان المعنى وضده من حب وكره وحق وباطل وعدل وظلم**.",
  "**كى تعيش عليك ان تتقن فن التجاهل باحتراف**.",
  "**لا تحزن على من اشعرك بان طيبتك غباء امام وقاحته**.",
  "**هناك من يحلم بالنجاح وهناك من يستيقظ باكرا لتحقيقه**.",
  "**ان تعالج ألمك بنفسك تلك هى القوة**.", 
  "**الجميع يسمع ما تقول والاصدقاء ينصتون لما تقول وافضل الاصدقاء ينصتون لما اخفاه سكوتك**.", 
  "**انتهى زمن الفروسية ، لم تنقرض الخيول بل انقرض الفرسان**.", 
  "**ان تكون اخرسا عاقلا خير من ان تكون نطوقا جهولا**.", 
  "**المناقشات العقيمة لا تنجب افكارا**.", 
  "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
  "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.",
 "وسلاماً علي أعين ذاقت العناء وما زالت تضحك وفي قلوبها فوق البكاء بكاء",
 "وإن بليت بشخص لا خلق له فكن كأنك لم تسمع ولم يقل",
 "كلما ذهب المرء داخل نفسه كلما زاد نضجه وعندما يصل الي مركز وجوده بالتحديد سيصبح ناضجاً تماماً ولكن في تلك اللحظة سيختفي الشخص وسيبقي وجوده",
 "وقاتل الجسم مقتول بفعلته وقاتل الروح لا تدري به البشر",
 "قل للذي نام والأحزان تخنقه وهمه في ظلام الليل يشقيه هون علي قلبك المحزون ان له رباً سيملؤه نوراً ويرويه",
 "ولا تيأس فإن اليأس كفر لعل الله يغني من قليل وأن العسر يتبعه يسر وقول الله أصدق كل قيل",
 "واصنع جميلًا في الحياة فإنما باللُطف نبلغ في القلوب مقاما",
 "وكيف أنجوك من أوراق ذاكرتي وأنت في القلب مثل النقش في الحجر",
 "بعض الكلمات خلقت لتقال مرة واحدة لشخص واحد ثم لا يكون لها معني بعدها",
 "إبتسم فلن يتغير العالم بحزنك",
 "لا تنطفئ وانت الذي اعتاد العالم على توهجك",
 "لا تلوم الريح وأحبابك من ورق",
 "النضج هو ان تدرك اليوم سذاجة تصرفك بالأمس",
 "وإني أدعو الله في سري بأن يبقيك لي عمراً وحباً وقرباً لا يعرف البعد",
 "كن أنت الإستثناء الجميل لكل أشكال القبح من حولك",
 "وربما تبتلي بشتات الأمر لتساق لخير لم تفكر به من قبل",
 "السعادات التي تضعها في جيوب الآخرين ستعود يوماً لتختبئ في جيبك عندما تحزن",
 "وكأن شيئاً لم يكن أمض علي تلك القاعدة لتعيش",
 "واني جبان في فراق احبتي وإن كنت في غير الفراق شجاعاً",
 "انت لا تعلم كم كلفني هذا الهدوء",
 "إذا كتبنا عن الحب قد يظنون دوماً بأننا نقصد رجال أو نساء يغفلون عن الأصدقاء المقربين والأشخاص الرائعين والغرباء الطيبين",
 "اسوأ ما قد يواجه الانسان في حياته كثرة التفكير لذلك ردد اللهم اني اسألك بالاً مطمئناً وشاكراً لما قسمته لي",
"وما الدنيا بباقية لحي وماحي على الدنيا بباق",
"شئ إليك يشدني لم أدري ما هو منهاة يوما أراه نهايتي ويوما أري فيه الحياة",  
]

 client.on('message', message => {
   if (message.content.startsWith("3خواطر")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')

   .setThumbnail(message.author.avatarURL) 
 .addField('لعبه خواطر' ,
  `${secreT[Math.floor(Math.random() * secreT.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});


const Love = [  "**احبك / عدد قطرات المـــطر والشجر وامواج البحر والنجوم الي تتزاحم مبهورة في جمال القمر**.",
  "**ساعزفك وساجعلك لحنا تغني عليه جميع قصائد العشــق**.",
  "**احبك موت... لاتسألني ما الدليل ارأيت رصاصه تسأل القتيل؟**.",
  "**ربما يبيع الانسان شيئا قد شراه لاكن لا يبيع قلبا قد هواه**.",
  "**و ما عجبي موت المحبين في الهوى ........... و لكن بقاء العاشقين عجيب**.",
  "**حلفت / لاحشـــد جيوش الحب واحتلك مسكين ربي بلاك بعـــاشق ارهـــابي**.",
  "**العيــن تعشق صورتك ... والقلب يجري فيه دمك وكل مااسمع صوتك ...شفايفي تقول احبك**.",
  "**ياحظ المكان فيك..ياحظ من هم حواليك ...ياحظ الناس تشوفك ... وانا مشتاق اليك**.",
  "**لو كنت دمعة داخل عيوني بغمض عليك وصدقي ما راح افتح...ولو كان الثمن عيوني**.",
  "**سهل اموت عشانك لكن الصعب اعيش بدونك سهل احبك لكن صعب انساك**.",
  "**أخشى ان انظر لعيناك وأنا فى شوق ولهيب لرؤياك**.",
  "**أتمنى ان اكون دمعة تولد بعينيك واعيش على خديك واموت عند شفتيك**.",
  "**أحياناً أرى الحياة لا تساوى إبتسامة لكن دائماً إبتسامتك هى كيانى**.",
  "**من السهل أن ينسى الانسان نفسه .. لكن من الصعب ان ينسى نفساً سكنت نفسه !**.",
  "**نفسى أكون نجمة سماك .. همسة شفاك .. شمعة مساك .. بس تبقى معايا وانا معاك**.",
  "**أهنئ قلبى بحبك وصبر عينى فى بعدك وأقول إنك نور عينى يجعل روحى فدى قلبك**.",
 ]

 client.on('message', message => {
   if (message.content.startsWith("3حب")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL) 
 .addField('Diso Bot' ,
  `${Love[Math.floor(Math.random() * Love.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});

const zead = [
   '*** انا اسمي مريم ***',
   '*** مرحباَ ماهو اسمك ؟ ***',
   `*** اهلا بك ! انا تائهه في هذا المكان  ***`,
   '*** هل تود مساعدتي ؟ ***',
   '*** لماذا هل انت قاسي القلب ؟ ***',
   '*** انني اشفق عليك عليك يجب ان تطهر روحك وتحب الخير للجميع ***',
   '*** ابتعد عني قليل انني متعبة ***',
   '*** هل انت نادم على ماقلت ؟ ***',
   '*** ابتعد عني قليل انني متعبة ***',
   '*** هل انت نادم على ماقلت ؟ ***',
   '*** هل تود مساعدتي ؟ ***',
   '*** واو اشكرك انك شخصاَ رائع ! ***',
   '*** ابحث معي عن منزلي لقد كان قريباَ من هنا ***',
   '*** ولاكن عندما حل الليل لم اعد ارى اي شيء ***',
   '*** مذا تظن اين يوجد ؟ يمين او يسار ***',
   '*** هيا اذاَ ***',
   '*** اود ان اسئلك سؤال ونحن في الطريق ***',
   '*** هل تراني فتاة لطيفة ام مخيفة ***',
   '*** اشكرك !  ***',
   '*** لقد وصلنا الى المنزل شكراَ جزيلَ انتطرني ثواني وسوف اعود ***',
   '*** هل انت جاهز ؟ ***',
   '*** لقد اخبرت والدي عنك وهم متحمسين لرؤيتك ***',
   '*** هل تود ان تراهم الان ***',
'*** انا لست الحوت الازرق كما يدعون ***',
   '*** انا لست كاذبة صدقني***',
   '*** لماذا ارى في عينيك الخوف ؟ ***',
   '*** انا مجرد فتاة لطيفة تحب اللعب مع الجميع ***',
   '*** اعرف كل شيء يحدث اسمع ذالك بالراديو ***',
   '*** سمعت ان البشر يقتلون من اجل المال فقط ***',
   '*** لماذا لم تدخل الغرفة ؟ ***',
   '*** ههههههههههههههههههه انت الان مسجون في هذه الغرفة ***',
   '*** لن تخرج حتى اعود لك بعد قليل ***',
   '*** المفتاح معك ! اكتب .مريم  ***',
   '*** مفتاح احمر , هل حصلت عليه ؟ ***',
   '*** ان لم تحصل عليه , اكتب .مريم مرة اخرى ***',
   '*** مفتاح اسود . هل حصلت عليه ؟ ***',
   '*** اين تريد ان تختبئ بسرعة قبل ان تعود ***',
   '*** لقد عادت من جديد الى المنزل ***',
   '*** لا تصدر اي صوت ! ***',
   '*** مريم : لقد عدت ***',
   '*** مريم : يا ايها المخادع اين انت ***',
   '*** مريم : اعلم انك هنا في المنزل ***',
   '*** مريم : ماذا تريد ان تسمع ***',
   '*** مريم : اضغط على الرابط اهداء مني لك | https://www.youtube.com/watch?v=hvSiuQccmtg ***',
   '*** احد ما خرج من المنزل ***',
   '*** انتظر الجزء الثاني عندما يوصل البوت 100 سيرفر , ساعدني في نشر البوت وادخل هذا السيرفر  ***'
]

 client.on('message', message => {
 if (message.content.startsWith('3مريم')) {
  var mariam= new Discord.RichEmbed()
  .setTitle("لعبة مريم ..")
  .setColor('RANDOM')
  .setDescription(`${zead[Math.floor(Math.random() * zead.length)]}`)
  .setImage("https://www.npa-ar.com/wp-content/uploads/2017/08/%D9%84%D8%B9%D8%A8%D8%A9-%D9%85%D8%B1%D9%8A%D9%85-300x200.jpg")
   message.channel.sendEmbed(mariam);
   message.react("??")
  }
});



const fs = require('fs');
let points = JSON.parse(fs.readFileSync('points.json', 'utf8'));
client.on('message', message => {
    if (!points[message.author.id]) points[message.author.id] = {points : 0}
    if (message.content == 'نقاطي13245632'){
        var embed = new RichEmbed()
        .setAuthor(message.author.username,message.author.avatarURL)
        .addField(`نقاطك : ${points[message.author.id].points}`,   true)
        .setColor('RANDOM')
        .setFooter('العاب وبس', client.user.avatarURL);
        message.channel.sendEmbed(embed)
    };
    if (message.content == "3فكك") {    
        var x = ['ضفدع',
		'طيارة',
		'رعودي',
		'تفكيك',
		'تجربة',
		'مدرسة',
		'معلم' ,
		'نقاط' ,
		'اكسيفو'
		, 'مكوه',
		'هكونا مطاطا' ,
		'اكسيفو ذا بيست'
		];
        var x2 = ['ض ف د ع',
		'ط ي ا ر ة',
		'ر ع و د ي',
		'ت ف ك ي ك',
		'ت ج ر ب ة',
		'م د ر س ة',
		'م ع ل م',
		'ن ق ا ط',
		'ا ك س ي ف و',
		'م ك و ه',
		'ه ك و ن ا م ط ا ط ا',
		'ا ك س ي ف و ذ ا ب ي س ت'
		];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`فكك الكلمة الآتية :${x[x3]}, لديك 20 ثانية`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 20000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send('❌ لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح')
                    message.channel.sendEmbed(embed)
        })
        r.then(s=> {

            points[message.author.id].points +=1
            message.channel.send(`✅ لقد قمت بكتابة الجواب الصحيح بالوقت المناسب
 ─═════**{نقاطك:${points[message.author.id].points}}**═════─`);
               message.channel.sendEmbed(embed)
        })
        })
    }
    fs.writeFile('points.json', JSON.stringify(points), (err) => {
        if (err) console.error(err);
    })
  if (message.content == "3عواصم") {
        var x = ['اليمن',
		'مصر',
		'الجزائر',
		'السعودية',
		'السودان',
		'العراق' ,
		'الامارات' ,
		'سوريا'
		];
        var x2 = ['صنعاء',
		'القاهرة',
		'الجزائر',
		'الرياض',
		'الخرطوم',
		'بغداد',
		'ابو ظبي',
		'دمشق '
		];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`ماهي عاصمة :${x[x3]}, لديك 15 ثانية`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1, 
                time : 15000, 
                errors : ['time'] 
            })
        r.catch(() => {
            return message.channel.send('❌ لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح') 
               message.channel.sendEmbed(embed)
        })
        r.then(s=> {

            points[message.author.id].points +=1
            message.channel.send(`✅ لقد قمت بكتابة الجواب الصحيح بالوقت المناسب
 ─═════**{نقاطك:${points[message.author.id].points}}**═════─`);
               message.channel.sendEmbed(embed)
        })
        })
    }
    fs.writeFile('points.json', JSON.stringify(points), (err) => {
        if (err) console.error(err);
    })
    if (message.content == "3لغز") {
        var x = ['كلي ثقوب ومع ذلك أحفظ الماء فمن أكون ؟',
		'ما هو الشيء الذي يمشي و يقف وليس له أرجـل ؟',
		'ما هو الشئ الذي يرفع اثقال ولا يقدر يرفع مسمار ؟',
		'يسمع بلا أذن ويتكلم بلا لسان فما هو ؟',
		'ماهو الشيء الذي يكتب و لا يقرأ ؟',
		'ماهو الشيء الذي يكون اخضر في الارض واسود في السوق واحمــر في البيت ؟',
		'عائلة مؤلفة من 6 بنات وأخ لكل منهن، فكم عدد أفراد العائلة ؟',
		'يتحرك دائماً حواليك لكنك لاتراه فما هو ؟' ,
		'ما هو البليون ؟'
		];
        var x2 = ['الاسفنج',
		'الساعة',
		'البحر',
		'التلفون',
		'العمر',
		'الشاي',
		'سبعة اشخاص' ,
		'الهواء' ,
		'الف مليون'
		];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`حل اللغز الأتي :${x[x3]}, لديك 20 ثانية`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 20000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send('❌ لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح') 
               message.channel.sendEmbed(embed)
        })
        r.then(s=> {

            points[message.author.id].points +=1
            message.channel.send(`✅ لقد قمت بكتابة الجواب الصحيح بالوقت المناسب
 ─═════**{نقاطك:${points[message.author.id].points}}**═════─`);
               message.channel.sendEmbed(embed)
        })
        })
    }
    fs.writeFile('points.json', JSON.stringify(points), (err) => {
        if (err) console.error(err);
    })
		    if (message.content == "3احسب") {    
        var x = ['50×50',
		'1000000×1',
		'89×10',
		'90×5',
		'30×3',
		'10×10',
		'1000×1000',
		'44,5+44,5'
		];
		var x2 = ['2500',
		'1000000',
		'890',
		'450',
		'90',
		'100',
		'1000000' ,
		'89'
		];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`ركب الكلمة  الآتية :${x[x3]}, لديك 20 ثانية`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 20000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send('❌ لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح')
                    message.channel.sendEmbed(embed)
        })
        r.then(s=> {

            points[message.author.id].points +=1
            message.channel.send(`✅ لقد قمت بكتابة الجواب الصحيح بالوقت المناسب
 ─═════**{نقاطك:${points[message.author.id].points}}**═════─`);
               message.channel.sendEmbed(embed)
        })
        })
    }
    fs.writeFile('points.json', JSON.stringify(points), (err) => {
        if (err) console.error(err);
    })
	

  if (message.content == "3رتب") {     
        var x = ['ف ض ع د',
		'ص ش خ',
		'ة د ا ر ج',
		'ا ر ي ة س',
		'ي ت ب',
		'ئ ا ع ل ة',
		' ا ش ي',
		'ن ح و ي ا',
		'س د و ي ك ر د',
		'ر ط ي ا ة' ,
		'ن ح ز ل و'
		];
        var x2 = ['ضفدع',
		'شخص',
		'دراجة',
		'سيارة',
		'بيت',
		'عائلة',
		'شاي',
		'حيوان',
		'ديسكورد',
		'طيارة',
		'حلزون'
		];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`عدل الكلمة الأتية :${x[x3]}, لديك 25 ثانية`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 25000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send('❌ لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح')
                    message.channel.sendEmbed(embed)
        })
        r.then(s=> {

            points[message.author.id].points +=1
            message.channel.send(`✅ لقد قمت بكتابة الجواب الصحيح بالوقت المناسب
 ─═════**{نقاطك:${points[message.author.id].points}}**═════─`);
               message.channel.sendEmbed(embed)
        })
        })
    }
    fs.writeFile('points.json', JSON.stringify(points), (err) => {
        if (err) console.error(err);
    });
    })
   
   client.login('NDUyMTUwMTk3NzE2Mzg1ODAz.DfMJQA.IdQc87KY6hdoOKwqDXRIfXo0h9w');


client.on('message', message => {
    if (message.content.startsWith("3hack")) {
        if(!message.author.id === '') return;
      if (message.author.bot) return
           message.delete();
             let args = message.content.split(' ').slice(1);
 
                   let virusname = args.join(' ');
                 if (virusname < 1) {
                     return message.channel.send("```اكتب اسم الشخص الي تبي يتهكر```");
                 }
                 message.channel.send({embed: new Discord.RichEmbed().setTitle('Loading ' + virusname + "...").setColor(0xFF0000)}).then(function(m) {
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓ ] 1%').setColor(0xFF0000)})
             }, 1000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓ ] 2%').setColor(0xFF0000)})
             }, 2000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓ ] 3%').setColor(0xFF0000)})
             }, 3000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓ ] 4%').setColor(0xFF0000)})
             }, 4000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓ ] 28%').setColor(0xFF0000)})
             }, 5000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 35%').setColor(0xFF0000)})
             }, 6000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 78%').setColor(0xFF0000)})
             }, 7000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 80%').setColor(0xFF0000)})
             }, 8000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 86%').setColor(0xFF0000)})
             }, 9000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 89%').setColor(0xFF0000)})
             }, 10000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 90%').setColor(0xFF0000)})
             }, 11000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 95%').setColor(0xFF0000)})
             }, 12000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 96%').setColor(0xFF0000)})
             }, 13000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 97%').setColor(0xFF0000)})
             }, 14000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 98%').setColor(0xFF0000)})
             }, 15000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓���▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 99%').setColor(0xFF0000)})
             }, 16000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 100%').setColor(0xFF0000)})
             }, 17000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']:' + virusname + 'done it\'s going good 100.9%').setColor(0xFF0000)})
             }, 18000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: hacking yeah i love it').setColor(0xFF0000)})
             }, 19000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: uploading data' + virusname + ".key").setColor(0xFF0000)})
             }, 22000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 5...').setColor(0xFF0000)})
             }, 25000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 4...').setColor(0xFF0000)})
             }, 26000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 3...').setColor(0xFF0000)})
             }, 27000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 2...').setColor(0xFF0000)})
             }, 28000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 1...').setColor(0xFF0000)})
             }, 29000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 99%').setColor(0xFF0000)})
           }, 30000)
              setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]100% virus added').setColor(0xFF0000)})
           }, 31000)
              setTimeout(function() {
               m.delete()
           }, 32000)
             setTimeout(function() {
               message.channel.send('تم تهكيرك')
           }, 33000)
           });
         }
 })

var prefix = "3";

client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== "430451101402267650") return;

if (message.content.startsWith(prefix + 'setgame')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`Playing: **${argresult}`)
} 

if (message.content.startsWith(prefix + 'setstream')) {
  client.user.setGame(argresult, "https://www.twitch.tv/v5bz");
	 console.log('test' + argresult);
    message.channel.sendMessage(`Streaming: **${argresult}`)
} 

if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
	  message.channel.sendMessage(`Username Changed To **${argresult}**`)
  return message.reply("You Can change the username 2 times per hour");
} 
if (message.content.startsWith(prefix + 'setavatar')) {
  client.user.setAvatar(argresult);
   message.channel.sendMessage(`Avatar Changed Successfully To **${argresult}**`);
}
});

//////////////////////////////////////////////////////////////////////////////////

const discord = require("discord.js"); // بكج
const bot = new Discord.Client({disableEveryone: true});
const Canvas = require('canvas') // بكج 
const s = module.require("fs"); //بكج
const r1 = require('snekfetch'); //بكج


//var يعني تختصر للحاجه زي منا عامل كدة

var copy = "FoxYou#8769"


var mo = "الفلوس"
var po = "النقاط"
var lev = "الفل"


bot.on("ready", async () => { // كل حاجه هتتفح لما البوت يشتغل

    console.log(`I'm Online \n By ${copy}`) // الي هيظهر في الكونسل
    console.log(`Logged in as ${bot.user.tag}!`); // نفس الي فوق

    bot.user.setGame(`${bot.users.size} users `,"http://twitch.tv/") // الي هيظهر في بلاينق
    bot.user.setStatus("online") // حاله البوت (اونلاين

}); // نهايه الكود



bot.on('message', message => {

if (message.content.startsWith("3profile")) { // الامر
 let canvas = new Canvas(300, 300) //حجم الصوره الي هتظهر
 let ctx = canvas.getContext('2d')
    let Image = Canvas.Image
    
   
                      //  ava.src = buf;

    fs.readFile(__dirname + '/images_profile/profile.png', function(err, picture) { //مكان الصوره 
      if (err) throw err
      var img = new Image
        		var url = message.author.avatarURL; //افتار صورتك
		url = url.substring(0, url.indexOf('?'));

		r1.get(url).then(res => {
			var dataURL = res.body.toString('base64');
			dataURL = 'data:image/png;base64,' + dataURL;
			img.onload = function() {

				ctx.save();
    		ctx.beginPath();
    		ctx.arc(54, 103, 47, 0, Math.PI * 2, true); // احدثيات الدائره
		    ctx.closePath();
		    ctx.clip();
		    ctx.drawImage(img, 8, 57, 92, 92); // الصوره
		    ctx.restore();
			}
			img.src = dataURL;
		});
		
      img.onload = () => {
        ctx.drawImage(img, 1, 1, 300, 300)
     //   ctx.drawImage(message.author.avatarURL, 152, 27, 95, 95);
        ctx.font = "regular 11px Cairo" // نوع الخط وحجمه
        ctx.fillStyle = "#9f9f9f" // لون الخط
        ctx.fillText(`${message.author.username}`, 140, 137)
        ctx.fillText(`${mo}  `, 143, 219) //money
        ctx.fillText(`${po}`, 120, 202) // النقاط

        //Level
        ctx.font = "regular 21px Cairo"
        ctx.fillStyle = "#ffffff"
        ctx.fillText(`${lev}`, 47, 255) //لفل

        ctx.save()
        
      }
      img.src = picture
			
    })
		
   

    

    setTimeout(function() {
      fs.readFile(__dirname + '/images_profile/diamond_prof_bg.png', function(err, picture) {
        if (err) throw err
        var img = new Image
        img.onload = () => {
          ctx.drawImage(img, -1, -1, 0, 0)
        }
        img.src = picture
        let inventoryPicture = canvas.toDataURL()
        let data = inventoryPicture.replace(/^data:image\/\w+;base64,/, "")
        let buf = new Buffer(data, 'base64')
      fs.writeFile(`image.png`, buf)
      
        message.channel.send("", {
          file: `image.png` 
        })
      })
    }, 1000)


    function roundedImage(x, y, width, height, radius) {
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
      ctx.lineTo(x + radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
    }

    function wrapText(context, text, x, y, maxWidth, lineHeight) {

      var words = text.split(' '),
        line = '',
        lineCount = 0,
        i,
        test,
        metrics;

      for (i = 0; i < words.length; i++) {
        test = words[i];
        metrics = context.measureText(test);
        while (metrics.width > maxWidth) {

          test = test.substring(0, test.length - 1);
          metrics = context.measureText(test);
        }
        if (words[i] != test) {
          words.splice(i + 1, 0, words[i].substr(test.length))
          words[i] = test;
        }

        test = line + words[i] + ' ';
        metrics = context.measureText(test);

        if (metrics.width > maxWidth && i > 0) {
          context.fillText(line, x, y);
          line = words[i] + ' ';
          y += lineHeight;
          lineCount++;
        } else {
          line = test;
        }
      }

      ctx.fillText(line, x, y);
    }
  



};




});




client.login('NDUyMTUwMTk3NzE2Mzg1ODAz.DfMJQA.IdQc87KY6hdoOKwqDXRIfXo0h9w');
