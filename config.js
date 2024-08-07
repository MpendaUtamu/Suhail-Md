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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254786441428";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_29_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM2LFxuICAgICAgICA1NyxcbiAgICAgICAgNjksXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjksXG4gICAgICAgIDI2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2LFxuICAgICAgICA5LFxuICAgICAgICA3OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjIyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTExLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzksXG4gICAgICAgIDYwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDkwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTIyLFxuICAgICAgICA3MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTM5LFxuICAgICAgICA0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODgsXG4gICAgICAgIDM1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQwLFxuICAgICAgICA0NCxcbiAgICAgICAgOCxcbiAgICAgICAgMjksXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDMzLFxuICAgICAgICAxODMsXG4gICAgICAgIDI2LFxuICAgICAgICAyOSxcbiAgICAgICAgODIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTY0LFxuICAgICAgICA3MixcbiAgICAgICAgOTksXG4gICAgICAgIDIwMixcbiAgICAgICAgNTYsXG4gICAgICAgIDY5LFxuICAgICAgICA3OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI1LFxuICAgICAgICAxOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDU2LFxuICAgICAgICA1MixcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDUsXG4gICAgICAgIDIwLFxuICAgICAgICA3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxODksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjI3LFxuICAgICAgICA0MixcbiAgICAgICAgMTQwLFxuICAgICAgICA0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTY4LFxuICAgICAgICA2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDQ2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDMxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDk0LFxuICAgICAgICAxODksXG4gICAgICAgIDcwLFxuICAgICAgICA5OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDUyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAzMixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDQzLFxuICAgICAgICA0OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTYzLFxuICAgICAgICA4NixcbiAgICAgICAgOTUsXG4gICAgICAgIDQ3LFxuICAgICAgICA3NixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjIsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJuZjVSU1Q1MWVFOHAxN2YvL0lEQVNDM0QxNkdlUGdBU2lkVHpFVHJuYnlBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDc4NjQ0MTQyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRjIwNTI4RjVERTM2MzcxNkFCMEI3Mzk0NjcwNDFFMzZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIzMDMzNzc5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0Nzg2NDQxNDI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJEODYzMjM1ODE0QTg2Q0MwQjEwODREMzc5QTU3ODY0NVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjMwMzM3ODBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiU1l6RUJPNGJUN3kwWTU3a1lpNHN1QVwiLFxuICBcInBob25lSWRcIjogXCJjNTU0ZmQ1YS0yZjA4LTQzZDItOTQ3Mi1hZWM3Zjk5NjJhMzRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUxLFxuICAgICAgNTUsXG4gICAgICA4LFxuICAgICAgNTUsXG4gICAgICAxMDcsXG4gICAgICA0MSxcbiAgICAgIDE1LFxuICAgICAgODQsXG4gICAgICAxMyxcbiAgICAgIDIxMCxcbiAgICAgIDE4MCxcbiAgICAgIDEzOSxcbiAgICAgIDEzMyxcbiAgICAgIDIwOCxcbiAgICAgIDM2LFxuICAgICAgOTksXG4gICAgICAxNTYsXG4gICAgICA5NSxcbiAgICAgIDg4LFxuICAgICAgMjQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyNyxcbiAgICAgIDIxNixcbiAgICAgIDcyLFxuICAgICAgMTA4LFxuICAgICAgNjAsXG4gICAgICAxODEsXG4gICAgICAyNTQsXG4gICAgICA5MixcbiAgICAgIDI1NSxcbiAgICAgIDY4LFxuICAgICAgMjQyLFxuICAgICAgMjAsXG4gICAgICAxNTAsXG4gICAgICAyMjksXG4gICAgICAyMTcsXG4gICAgICAyNDAsXG4gICAgICAyMDUsXG4gICAgICAxODMsXG4gICAgICA3NSxcbiAgICAgIDg5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlkxUUVDNU5WXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3ODY0NDE0Mjg6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIxMTkwMTI3MTI2MTIzNToyNEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJOYW1lbGVzc1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01XUWhhSUZFS3ZSemJVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRlRnYVRkR2gwTzlsOTZCamh0c3JuUFZHRjB2eVdqTytQbE9BN1FPK0xIMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ0K3RjU2JRWHEvc3dOeDZINE50dVUrUlFxaWgxOTd6aSsybDE2QnR2bkJERHI0VEM4MWJVdDZaTngwUFBvK254OFFERjZVNUFINU5KNmpSSDlURUVDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ4UkNVVCtnQlJST1MrcUkzN2plWmJBZHN6N3cwU2lQVW1oWFNkeVltZnY3ZVYrcm93VG5HR0pycHZyRUpqZFpXTkNCdDRKcVFndE9Ya3BoQ3pPcnNnZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3ODY0NDE0Mjg6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMzAzMzc3NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlncVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSWdxLmpzb24iOiAie1wia2V5RGF0YVwiOlwicHVlRUNjSHlSNFRpamNZTjdhZHNJMjc5bFBDUjVKT3ZlbW4wTTYzeVlPTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDEzNTY0NDg1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjMwMzM3Nzc0NjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
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
