// console.log("Hellow world");


const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
client.login(process.env.TOKEN);
client.on('ready', readyDiscord);

function readyDiscord() {
    console.log("Ready!");
}

const replies = [
    "namaste",
    "hello",
    "hiieee",
    "hola",
    "bonjour"
];

client.on('message', gotMessage);

function gotMessage(msg) {
    console.log(msg.content);
    // msg.channel.id      // return the id of the channel from which the message belongs
    // const index = Math.floor(Math.random()*replies.length);
    if (msg.content.toLowerCase() == 'hello beta')
        msg.reply("hello papa");
    else if (msg.content.toLowerCase() == 'kaise ho beta')
        msg.reply("thk hu papa... aap btao");
    else if (msg.content.toLowerCase() == 'm bhi thk hu beta')
        msg.reply("bdyaa papa");
    else if (msg.content.toLowerCase() == 'haso beta')
        msg.reply("😂😂");
    else if (msg.content.toLowerCase() == 'bye beta')
        msg.reply("bye bye papa👋");
    else if (msg.content.toLowerCase() == 'mummy kha h beta')
        msg.reply("mummy to so rhi hn papa...");
    else if (msg.content.toLowerCase() == 'ok beta')
        msg.reply("ji papa");
    else if (msg.content.toLowerCase() == 'bde harami ho beta')
        msg.reply("shashank chacha se seekha h papa sb");
    else if (msg.content.toLowerCase() == 'kya kr rhe ho beta')
        msg.reply("bas ghoom rha discord pe...");
    else if (msg.content.toLowerCase() == 'online aa jao beta')
        msg.reply("aa gya papa");
    else if (msg.content.toLowerCase() == 'sbko namaste bolo beta')
        msg.reply("sbhi aunty uncle ko 🙏🙏");
    else if (msg.content.toLowerCase() == 'chlo so jao beta')
        msg.reply("ok good night papa");
    else if (msg.content.toLowerCase() == 'aur beta padhai kaisi chl rhi')
        msg.reply("😶😴😴");


}


