const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUZkRVpOV2tLSzdUbUpnMUNDSDMyRzBMUTRSSldzQ0czbVoyKzJYOWNITT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicDc0aHcvZjJYeWxZN1RSNDBIYWJDbWR0UTBRTncxRW5TaFVVUmROenRYYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvRzZHUHRuVWxOSGp4OEtyL1hPdUg1aDNTci82L1V3cVliZmtLU2NadlZvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkYURIS0ZjSmZEQlBCK3VxclVZRU02UDVuN2dLSUQrMHhpS0xKYU5GTnl3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlKWnAwM3NSSmVhTUdTRTQycSt3UzNhRTR3eDdaaEFCRXJQTVRmMVQra0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNCVGFhcGYrdC82ZTBIM2taUytzWFVsWlFLSW5POHB6RzQ0ekNUZXp5MVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUVpczhmWkc3bndDNW52eHNFck5Ba0pVUFQvU3Z2blAvVTlZdFdXWDlXTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRkpQQjlNdnBQQVZqcmFsVHFMNlErZGxaQ1U3UjJicVZPK1JSeitRSWZ6MD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVmZnFqVGlGSGpaZWxTT0xiaEhvQUJha09kUk9GYTNjZWZTN00rc3RGVEFZTFZITEJqL3ZQWjdlVHRTWk02SzN4SWI5OGdrV1k0NHFCMnJQc0hkZ0JnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODMsImFkdlNlY3JldEtleSI6IlhmZ3VHSEJwSUVuVlE2Rzk5N0xxYWgxUFZRU1EwQjJjR2xsbXpaUCttcnc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiNTA0OTI2NjExMTVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNzgzNTgxOTI0MjU2MUQ0MDZEODk2NzY4ODQwNUQ1M0IifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NTk0NjM2N30seyJrZXkiOnsicmVtb3RlSmlkIjoiNTA0OTI2NjExMTVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTVFQTI3RDRCNDFBQzJBNjJCNDNFQUJFRDkwMkM3NEMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NTk0NjM2N30seyJrZXkiOnsicmVtb3RlSmlkIjoiNTA0OTI2NjExMTVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNDg0RDEzREE0NDYzMUQ5MDlFOTQ3OUIxOTBCM0Q5QTMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NTk0NjM2OX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiVFgyMzRTREEiLCJtZSI6eyJpZCI6IjUwNDkyNjYxMTE1OjFAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI4MjAyNTk3MzMzNDE3NDoxQGxpZCIsIm5hbWUiOiLwn5iCIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKRy93ZE1HRVBxNnBzVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIvWXAzSjhsM0hRbXRrekpMai9hRmlvTmNNaVVTajVJMUFtVHdHNEtTeFgwPSIsImFjY291bnRTaWduYXR1cmUiOiJoQW8xT0ZrL2JONjRpSlo0M3lHdEV2WGFlNTg1TmpwaVhQaUR0WjFwZysyT1ZKcnRHRE1USE1Wci9mMVluZlNUZWN2ekdDbFUvQ05uakhSOEdyYzhCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoieEI5d1FmYUxMblZNM2J0SkNzQXZPVGxuR3BKZzhxVjNoTXQydTJtOVV2NTlsUWYydGJvamwrY09kcU9WUkFqbDhpNXA5OGM1clFiRVRJK0RBU3dBREE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI1MDQ5MjY2MTExNToxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmYyS2R5ZkpkeDBKclpNeVM0LzJoWXFEWERJbEVvK1NOUUprOEJ1Q2tzVjkifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NTk0NjM2NSwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBN3YifQ==",
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
OWNER_NUMBER: process.env.OWNER_NUMBER || "923195984790",
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
