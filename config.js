const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUkydjZjekZCL05LbU5kU2dYNzlteDVwNmQ2M0tRVWN5NnNuOVlwK1VIUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR3pONVBWSUFoM1RpS0VLdTZnSXQzVk1GT09hQVNxZU5HSU8zcUVQOGFVdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1SVFhT21VUkZIdGdRZTVLUHQvbEg4ZUZNY3FLYjNNOTJESng0a0JUM1VNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1NFpyTDEzakIybFp1bjA2eEdnRXg3VnNxSWpKcjhvallsNzByanlCNHdrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRLaW5QYjQrWHk2aWlZNWNHbnNKMGFhSnN6SjhzUmVuWnhzdFJqdHhjV1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iitkb3pnY2RqWlZjVXQ5VjhObWV3Rjd0S290NGJpZGt3UERIMzJzdlNpRG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0lWVjZJQ0dlS3c2ek5vTmw0eXBsTTBISU9UZlA2L2ZScUFyVDZHU1pYZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOXRFSDAvV2NEWkYwR0NYdXF2dlhra3kyZHo4c0RIeHlEZFJGL2J4RVVnbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjExVndTYmpPdktEb0h5a1NsanhwaURlbnc5czZySjgrL1ZuNWthU2k3N3I2T1lTTnVXVVpaNGN5bDdwQmJkQTdYT0lvcnhJSHkwVzRKQThkMDk3MEFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMyLCJhZHZTZWNyZXRLZXkiOiJ5aWhqcWJyTkJqR2lhdXBudnVNSlBFNFMwdmVKdGIwcVFBb3FvQVFYYWFvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk2ODc3NDEzMTg1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjVBRDQwNzE4MDU1Njc5MDFFN0ZENjM5RDJGNkYyNTBFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTU1ODMwMTR9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk2ODc3NDEzMTg1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjYwOURGRDEyQUI4MDIzOUI2NTE0OEREMjBCNTM4MkM1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTU1ODMwMTV9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkRZWFAxN1A3IiwibWUiOnsiaWQiOiI5Njg3NzQxMzE4NTo1QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjIzNDQ2MjYwNzg1Mzk4OjVAbGlkIiwibmFtZSI6IvCfpbLwn5KUIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKdS80OWtDRUtLa2tNVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJITjhBTHpibTBRdGR1SWRUeXJrSlR2TXVlV2tqM3J3OEpiaUxnVFBhaUFBPSIsImFjY291bnRTaWduYXR1cmUiOiJBV3N5TG9HdUdVSy9TZ2RlZzQ1SExzL2l1VTZRdDJpYTZLTzgwODgzTVhHR1ZEOVRpQ2NuVjhibmlyaEUwWHNGcEpxYW8zZkR4bS9IdGZzQUVuSjdBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVVp3SEZQYlQ1Z2JpZm9WMzBXdzlZQ1VFSXc5bXVFL3prYTV5Y0VTMWN5MFFJL1FaNXFwaXF2bHhKSUREOFZYMGI0WmVxM0RpRmQwLzFlN044clNWREE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5Njg3NzQxMzE4NTo1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJ6ZkFDODI1dEVMWGJpSFU4cTVDVTd6TG5scEk5NjhQQ1c0aTRFejJvZ0EifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NTU4MzAxMywibGFzdFByb3BIYXNoIjoiMUs0aEg0IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFbnUifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Ghaffar-md4 🤍*",
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
BOT_NAME: process.env.BOT_NAME || "Ghaffar-md4",
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
OWNER_NAME: process.env.OWNER_NAME || "*Ghaffar-md4*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Ghaffar ❣️*",
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
