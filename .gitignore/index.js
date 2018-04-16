const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
  bot.user.setGame("!help");
  console.log("Je suis connecté !")
})

bot.login(process.env.TOKEN);

bot.on('message', function(message) {

  if(message.content === 'Salut') {
      message.reply('Bonjour')
  }

  if(message.content === 'Super bot') {
      message.channel.sendMessage("Merci, c'est Jysse , mon créateur qui m'a développé ! ;)")
  }

  if(message.content === 'Qui est la') {
      message.channel.sendMessage("MOIII")
  }
  
});

client.on("message", async message => {

  if(command === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
});
