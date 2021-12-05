const Discord = require("discord.js");
const config = require('../config.json')

module.exports.run = async (client, message, args) => {
  if(message.channel.id == config.drop_channel) {
    if (Math.random() * 100 < 1) {
      let embed2 = new Discord.MessageEmbed()
      .setColor("#00d0ff")
      .setAuthor('Gratulacje')
      .setDescription(`${message.author}, udało ci się wydropić \`BRUSH 3X3\`!`)
      .setFooter(`HypeCash.EU © 2021-2022 All Rights Reserved.`, message.author.displayAvatarURL())
      .setTimestamp()
      client.channels.cache.get(config.admindrop_channel).send(`${message.author}, wydropił \`BRUSH 3X3\``)
      message.channel.send(embed2)
      .then(msg => {
        setTimeout(() => msg.delete(), 10000)
      })
    } else {
      let embed1 = new Discord.MessageEmbed()
      .setColor("#00d0ff")
      .setAuthor('Ups...')
      .setDescription(`${message.author}, tym razem się nie udało!`)
      .setFooter(`HypeCash.EU © 2021-2022 All Rights Reserved.`, message.author.displayAvatarURL())
      .setTimestamp()
      message.channel.send(embed1)
      .then(msg => {
        setTimeout(() => msg.delete(), 10000)
      })
    }
  }
};

module.exports.help = {
    name: "drop"
};