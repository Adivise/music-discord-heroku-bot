const Discord = require('discord.js');
const Music = require('discord.js-musicbot-addon-v2');
const client = new Discord.Client();

const PREFIX = process.env.PREFIX;

const music = new Music(client, {
    youtubeKey: process.env.YT_API,
    prefix: PREFIX,
    ownerOverMember: true,
    botOwner: '381369002217439232',
    djRole:'Developer',
    maxQueueSize: "500",
    disableLoop: true,
});

client.login(process.env.BOT_TOKEN);
