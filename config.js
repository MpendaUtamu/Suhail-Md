const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_10_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTg4LFxuICAgICAgICA1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA5LFxuICAgICAgICAzMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjEzLFxuICAgICAgICA0NixcbiAgICAgICAgMTgwLFxuICAgICAgICA5NyxcbiAgICAgICAgNTksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTgsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDMxLFxuICAgICAgICAxODMsXG4gICAgICAgIDQwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTksXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDQwLFxuICAgICAgICAzOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxLFxuICAgICAgICAxNCxcbiAgICAgICAgNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTUyLFxuICAgICAgICAxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTE0LFxuICAgICAgICA0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTkxLFxuICAgICAgICA4MixcbiAgICAgICAgNTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjMyLFxuICAgICAgICA1MixcbiAgICAgICAgMzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDMzLFxuICAgICAgICA5NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDI3LFxuICAgICAgICA5MixcbiAgICAgICAgODIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTI1LFxuICAgICAgICAxODYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTY4LFxuICAgICAgICA1MixcbiAgICAgICAgMjUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDMyLFxuICAgICAgICAxNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMixcbiAgICAgICAgNDAsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTg3LFxuICAgICAgICA4NixcbiAgICAgICAgNzUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjA0LFxuICAgICAgICA0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5LFxuICAgICAgICAyNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDQyLFxuICAgICAgICAxODgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE1LFxuICAgICAgICAyMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjI2LFxuICAgICAgICA1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDUxLFxuICAgICAgICA5MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjUsXG4gICAgICAgIDY4LFxuICAgICAgICAxODMsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDQ4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTM5LFxuICAgICAgICA5NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTg4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjksXG4gICAgICAgIDU3LFxuICAgICAgICAyNixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDExLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA2LFxuICAgICAgICA2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMyxcbiAgICAgICAgMjMwLFxuICAgICAgICA1OSxcbiAgICAgICAgMixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDU0LFxuICAgICAgICA0MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibVJKTjdqZW9tajJUejNUYVBtSkdkV3l6OHhzOGFIZlluTkdZV1NZZHYyYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3ODY0NDE0MjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQ4RkUzNTVDRjExRDg2ODI1N0YyNDk5RjdFMjUxNDkwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDgxNTA0NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDc4NjQ0MTQyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiREVEQ0M4RDg1QTI0QjYwRDlCNDNEOTlFMzMyRTM5RjRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwODE1MDQ3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk9qbzI3VUVKUnl5aDU0Sk5YUTl5R2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjYxZWNjNTEtYWE4NC00YjkzLTkwZTYtNzUyNGMwN2YwMGRkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY5LFxuICAgICAgNTIsXG4gICAgICAyNDcsXG4gICAgICA2OSxcbiAgICAgIDU1LFxuICAgICAgMjA1LFxuICAgICAgMTMsXG4gICAgICAyMTQsXG4gICAgICAxOCxcbiAgICAgIDcwLFxuICAgICAgMjA4LFxuICAgICAgMjE4LFxuICAgICAgMTE4LFxuICAgICAgMTYsXG4gICAgICAyMzQsXG4gICAgICA5NixcbiAgICAgIDE5MyxcbiAgICAgIDIzMSxcbiAgICAgIDksXG4gICAgICAyMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3LFxuICAgICAgMjAwLFxuICAgICAgNzYsXG4gICAgICAyMzUsXG4gICAgICAyMDksXG4gICAgICAyNTQsXG4gICAgICAxNjAsXG4gICAgICAzNSxcbiAgICAgIDIzNixcbiAgICAgIDEwOCxcbiAgICAgIDE5NSxcbiAgICAgIDg2LFxuICAgICAgMTQzLFxuICAgICAgMTc0LFxuICAgICAgODQsXG4gICAgICAxNTQsXG4gICAgICAyMTEsXG4gICAgICAxMCxcbiAgICAgIDI0MixcbiAgICAgIDExN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWUkxMODlISlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0Nzg2NDQxNDI4OjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMTE5MDEyNzEyNjEyMzU6MTFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiTmFtZWxlc3NcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKL1NzK2NERUwyYnhyUUdHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImNLT2tmRjNhRUgzZGR1SitkSG5MckZLcDlMUlJBeHpnSkF2QUNiV1NMeVE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZmJpMEM3RS8vZFllMW1FckxtNytyZGY2RVQ5R01OZE5JeFU4TTFyaEU1U2Y1cGh0ZURxNGRCSU1uQ1p2TUF0TjhZOXJVMHNJSFN5dzMvRWxXK2IwQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWXRGVGsrQktoMzVhZVFSNTlEVmpGb20xanRlZElteTJDaG5kNnoySkd1aTNFMVhITHgxV2J6cXB2cGlYa2hrYVU3c0NIalpoakkxcGNXYU16M0hpQkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0Nzg2NDQxNDI4OjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDM2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA4MTUwNDEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKeW5cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUp5bi5qc29uIjogIntcImtleURhdGFcIjpcIlZUTVNEVkdUcWRIVzZkZVV4WXB2NWpROVFMSHliQXpEVlFWU3ZiSHpIRm89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTAyMjE1OTEyOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "paul",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
