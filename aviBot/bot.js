// console.log("Hellow world");

const Discord = require('discord.js');
const client = new Discord.Client();
client.login('ODYzMDA1NTA5ODcxMjA2NDMx.YOgmgw.EsoluPCgJ2nwAU4-Z8tMHKB21vk');
client.on('ready', readyDiscord);

const replies = [
    "namaste",
    "hello",
    "hiieee",
    "hola",
    "bonjour"
];

function readyDiscord()
{
    console.log("Ready!");
}

client.on('message', gotMessage);

function gotMessage(msg)
{
    console.log(msg.content);
    // msg.channel.id      // return the id of the channel from which the message belongs
    if(msg.content.toLowerCase() == 'hello beta') 
    {
        msg.reply("hello papa");
    }
    if(msg.content.toLowerCase() == 'kaise ho beta') 
    {
        msg.reply("thk hu papa... aap btao");
    }
    if(msg.content.toLowerCase() == 'm bhi thk hu beta') 
    {
        msg.reply("bdyaa papa");
    }
    if(msg.content.toLowerCase() == 'haso beta') 
    {
        msg.reply("😂😂");
    }
    if(msg.content.toLowerCase() == 'bye beta') 
    {
        msg.reply("bye bye papa👋");
    }
}


