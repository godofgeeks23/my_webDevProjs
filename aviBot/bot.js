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
    
    // console.log(msg.content);
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
    else if (msg.content.toLowerCase() == 'beta gf h?')
        msg.reply("maroge to nh papa");
    else if (msg.content.toLowerCase() == 'nh beta')
        msg.reply("hn h papa");
    else if (msg.content.toLowerCase() == 'good beta')
        msg.reply("thanks papa");
    else if (msg.content.toLowerCase() == 'naam btao beta gf ka')
        msg.reply("nh papa... usne mna kiya h");
    else if (msg.content.toLowerCase() == 'naam btao beta kch nh krunga')
        msg.reply("nh papa... aap bad m peloge");
    else if (msg.content.toLowerCase() == 'beta engineering kr lo')
        msg.reply("nh papa mjhe chacha jaisa nh ban na");
    else if (msg.content.toLowerCase() == 'beta ab bta do naam... koi kch nh khega')
        msg.reply("pakka papa?");
    else if (msg.content.toLowerCase() == 'hn beta bta do... pakka')
        msg.reply("papa mjhe ldke psnd hn");
    else if (msg.content.toLowerCase() == 'koi nh beta... kon h wo ldka??')
        msg.reply("chacha...");
    else if (msg.content.toLowerCase() == 'konse chacha??')
        msg.reply("shashank chacha.");
    else if (msg.content.toLowerCase() == 'whi kyo beta??')
        msg.reply("kyoki unhone chacha se alag wala pyar diya h mjhe hmesha");
    else if (msg.content.toLowerCase() == 'hainn 😶😶')
        msg.reply("hn papa.");

    


}


