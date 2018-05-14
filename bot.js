const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
 client.user.setGame(`تحديت جديد للبوت البوت قيد التطوير .`,'https://www.twitch.tv/v5bz');	
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
