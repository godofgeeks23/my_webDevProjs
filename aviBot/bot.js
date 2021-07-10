// console.log("Hellow world");


const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
console.log(process.env.TOKEN);
client.login(process.env.TOKEN);
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
    // const index = Math.floor(Math.random()*replies.length);
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


