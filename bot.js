const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = "3";
client.on('ready', () => {
    console.log('I am ready!');
});



client.login(process.env.BOT_TOKEN);  //اياكككك تلعب هنا لا تحط توكنك هنا 
