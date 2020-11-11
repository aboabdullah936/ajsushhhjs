const {
  tokens,
  voice_channel,
  text_channel,
  your_server
} = require("./config.js");
const time = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000];
const Discord = require("discord.js");
tokens.forEach(token => {
  const client = new Discord.Client();
  client.login(token);

  client.on("message", async message => {
    if (message.guild.id != your_server) return;
    if (
      message.author.id == "647549115760377916" && // تعديل مهم ايدي بوت الترحيب
      message.content.includes("By") /// (الاستقبال) تعديل مهم رسالة الترحيب
    ) {
      setTimeout(() => {
        message.channel.send("**__Welcome to server 𝗠𝗲𝗹𝗮𝗻𝗴𝗲__**"); ///  (الارسال)تعديل مهم رسالة الترحيب
      }, time[Math.floor(Math.random() * time.length)]);
    }
  });

  client.on("ready", () => {
    console.log(client.user.tag + " is ready!");
    client.guilds
      .get(your_server)
      .channels.get(voice_channel)
      .join();
  });

});
const { Client, RichEmbed } = require("discord.js");
var { Util } = require("discord.js");
const { prefix, devs } = require("./config");
const client = new Client({ disableEveryone: true });
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const convert = require("hh-mm-ss");
const fetchVideoInfo = require("youtube-info");
const botversion = require("./package.json").version;
const simpleytapi = require("simple-youtube-api");
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require("snekfetch");
const guild = require("guild");
const dateFormat = require("dateformat");
const YouTube = require("simple-youtube-api");
const youtube = new YouTube(""); 
const hastebins = require("hastebin-gen");
const getYoutubeID = require("get-youtube-id");
const yt_api_key = ""; 
const pretty = require("pretty-ms");
client.login(process.env.TOKEN);
const queue = new Map();
var table = require("table").table;
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(client.guilds.map(c => `${c.name} : ${c.me.hasPermission(8)}`));
  client.user.setStatus("idle"); /// الحالات هي dnd idle online
});