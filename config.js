const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR081QSt3eVBKdkhhS3NIakdhb0gwYWRzNHN4SldRem1ZU2o5TnN2UWczQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTTE0Y3lNL1BRYUJScTZKZjhRLzNPV3JhSDVKd3NQQ0lUcG9INWM5V05ubz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrS2FJdUM5cEtIUWlYSE41cWhoeUxtamxYc0N5NHRVb01qWXMycmRNRVd3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMdWptNmh6MHRsWHYxT0Q3QnB2WVRmVWsyMWhLTWNqK1ZQRjJMNzVUendRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1Ea2lRSmhSM3FUSDVvT0JoTXdtRSt3TVdReldkY3g1TEllWitKZDIvMnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjQxL3ExNVk0Q1VnTHRZWFVla3hCL2gvbWphaHN5RTJEKzIzNXA5aVQrU0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0dSNmFjZzlnYnd6Q3BHbytwVEp4Tk9WSWRvVHdZcGJBdTBSMnA4bC9WND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZkNVNmpKK1FRaGM0Y1ZKeWozdEEyeHZWYWZEM0lGU2h2dFNQaEpnRkRoYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik16M2hySHc5Tkgvc0lOS0QyOEVDbVNwY1A5TGNWaFlVZ1NhdCtSNVRvcGlDNWpqVkxndVh6emdZaVdTSFhBYXBIL1I4OS9XVzNaOEVZSXBUaFZXWmlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc0LCJhZHZTZWNyZXRLZXkiOiJ5Sk81Tzl5ZXN5R20wUVlCUjNoVXZIQUZLemtaVy8rV1ZjYUhWdmVoWVNzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjUwNDkyNzExMjU4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjQwOENBNTJGRDZFNDY2Q0YwRTIzRTBGMkRDRTZGRkQ5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTY1NTE1OTF9LHsia2V5Ijp7InJlbW90ZUppZCI6IjUwNDkyNzExMjU4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjEzQjVDOTYxMzRBMUZDNzRGOEYxN0E5MUMxRTg3NEI3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTY1NTE1OTF9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IlJKNFgzUjNCIiwibWUiOnsiaWQiOiI1MDQ5MjcxMTI1ODoxQHMud2hhdHNhcHAubmV0IiwibGlkIjoiNzAzMDA2Mjg2ODA4MzA6MUBsaWQiLCJuYW1lIjoi8J+YhCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSWI1N3Z3QkVLS3p5OFVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiOWpGT0xSWmJhanNibjJJMmxSNmNmcUI1THBlS0JTK2ZtL1dwZjBDUitrVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiaGZzdlhPZkRmT0pzRDY4aFpETFgwMWFGSDk3NUgzVlNvZEdTWXM3K3JSeVZtV3hZRzdpQ1hvSVlxZjhEOEFWSlF6MHVYbkVaOEE3UXpBY0lLczFaQVE9PSIsImRldmljZVNpZ25hdHVyZSI6IjlnRVdmR2NjM3BmM1ZEL0d1YWdqY05wVDkyQU9oTU9ZMHYrTTZCcWRMelVWdTNKVTZPbnBFSzhIeENXM2RaN2ZmcnlkcVVUL2MrNTFnWEZvdXo0SGh3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNTA0OTI3MTEyNTg6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmWXhUaTBXVzJvN0c1OWlOcFVlbkg2Z2VTNlhpZ1V2bjV2MXFYOUFrZnBGIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTY1NTE1OTAsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQWhkIn0=",
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
