const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0ZXOXZSd0RHRVNiVENXQWlURW41S0p2eUdjSll0RngzVllZOGkvZHEwRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibDBuUW1YMWNzdVRvVHFYelEvSmRQZ1FNKzNZSmdQNGdrdGozOG83TDIzVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjQXVaTFVVdXVvdU93dWdhMFNYejhqekJkYnJpZmxNN0xocnBLQ01HV0VjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1TUlqbk85T01OMmJ5THlVNEFuTzZKaE92UTdyQnRBM3R6QTdlVEVudkRBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldCaEhBQVpydC90VzlSVmduTzQxNjhIcHl4aUFrVkFseVkrTSs4eHZwMTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVobUFwaXNHOE81N1VoSUhwWkJPUGh0d05MUWVSRFZCLzlHOHVtVzIxelk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUw5NWJ5ZkpIbGNDOUpDQjRlZ0Z3blVkNXBHdlVIa0Q4QUZNVW5TM2xXWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUW12QjJDT1dCN2puOUl4S2c3N0I3M2kzZnRvY09aa0ROZGlmVXA2YjhHND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNJUzczUXFFRVlwc3d1dHE1Qlp2b2FoYXd0SEhxNUtGbUFzU3Y5UkZHSnZyaGdxZGpja3FucENTdW1PY1VMWkJHMUxVZDExcEF5RE5sS25IWU1WVGlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTAsImFkdlNlY3JldEtleSI6InMvdUFGbDFZcGU2ZnhnNVdFeFJiQmMwV3dvdGpRTnZkTjBjYjFtb3U2SVE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiODgwMTMxNTQxNjA2NUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI2RjI3MkE3RjZFMEFBMkNCRTJBQzVEREY1QjcwMTZDRCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU1OTM5MTA1fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI4ODAxMzE1NDE2MDY1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkIwNTgyMTM3RTJCNjlFMjM4ODlGNUY5RjY2NjE5ODQ2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTU5MzkxMDV9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijg4MDEzMTU0MTYwNjVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMDc3RDM0OEZGNTBCNjVEMjE1M0RBNjgwRjNFQ0QzQjgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NTkzOTEwNn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiUjFYWlJNQ1giLCJtZSI6eyJpZCI6Ijg4MDEzMTU0MTYwNjU6MUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjEwODQ1NjkzMzYzNDEyODoxQGxpZCIsIm5hbWUiOiLwn5iFIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOYnYycm9DRUp5Q3BzVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJEUGV6d1ZPRUN0Q04weG5ja2xJQXFkN1VTOVA3TUVKakhLRndkZXpZVFd3PSIsImFjY291bnRTaWduYXR1cmUiOiJMaCtGMjFNMkJYOVIxWWdLOGtLam11VkNKZzFaUkZmZVhUV3dYU2tnRHRvOEJjVEhXcjl2QkZ2RE1TSy9Gb3VFZncxQlpnQndSTjYrL3UxTkkwaDNDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoidDFJSjg1N1BYSGZvV2ZTMHc2M1N5UmVLMUdkcFRWWU1FVmU3Rk52REhaK2Y5M0ZMTUdXWC81Nzl6SVhJTTdZaS9GMG1hTEgyNWJQd0JENHVldDRYZ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI4ODAxMzE1NDE2MDY1OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUXozczhGVGhBclFqZE1aM0pKU0FLbmUxRXZUK3pCQ1l4eWhjSFhzMkUxcyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU1OTM5MTAzLCJsYXN0UHJvcEhhc2giOiIxSzRoSDQiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQURaVCJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Ghaffar-md 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/qpnazl.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME ||",Ghaffar-md4",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Ghaffar-md4",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923237045910",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*Ghaffar-m4 Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ Ghaffar-md4 Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/qpnazl.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923195984790",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
