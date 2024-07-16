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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_40_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTg4LFxuICAgICAgICA4MixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDg1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjksXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDg5LFxuICAgICAgICAxOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDY4LFxuICAgICAgICAyMSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDksXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDUsXG4gICAgICAgIDkwLFxuICAgICAgICAxODQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTg0LFxuICAgICAgICA3OCxcbiAgICAgICAgNzksXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAzOCxcbiAgICAgICAgNzksXG4gICAgICAgIDY1LFxuICAgICAgICA4MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzLFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMyxcbiAgICAgICAgMixcbiAgICAgICAgMjQ0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE5LFxuICAgICAgICA0LFxuICAgICAgICA2NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODksXG4gICAgICAgIDIzNixcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNCxcbiAgICAgICAgMjMxLFxuICAgICAgICA0NixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTM0LFxuICAgICAgICA3MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgNTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTEzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjA1LFxuICAgICAgICAzOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOCxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMSxcbiAgICAgICAgMTcxLFxuICAgICAgICA0NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDk5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTY3LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA3NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAzMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDM1LFxuICAgICAgICA0MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDM3LFxuICAgICAgICAyNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAzNixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxLFxuICAgICAgICA0NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjIsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTY1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAzOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNSxcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIvVXpvblhDelRWNWFLL1FmZkp5WHJMckhra1RoMTFianYwb2JPem5Dd3gwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDc4NjQ0MTQyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNUYwQTZBMjI3NDVGRjRGQTE3NDU2ODNFMkY1REU2ODdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMTUxNjEyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0Nzg2NDQxNDI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBNzM4MkZDNUYwMEE0MDkxQjkyOTFENjM3NUY4OTI2RVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjExNTE2MTNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwickU0Q1RhVHBTOEdZZ0w3RUtWOXhmQVwiLFxuICBcInBob25lSWRcIjogXCIzNGIxZmUzMy0wY2Q0LTQ4ZjYtYjExMi1lYjA5YjUxNTUxMWRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg2LFxuICAgICAgMTIwLFxuICAgICAgNDgsXG4gICAgICA0NyxcbiAgICAgIDIwNCxcbiAgICAgIDE5NixcbiAgICAgIDg5LFxuICAgICAgMjMzLFxuICAgICAgMjEzLFxuICAgICAgMjMwLFxuICAgICAgMTk5LFxuICAgICAgMTE5LFxuICAgICAgMjMsXG4gICAgICAyNDcsXG4gICAgICAxOTIsXG4gICAgICA4LFxuICAgICAgMjU0LFxuICAgICAgMTUyLFxuICAgICAgMjIwLFxuICAgICAgOTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEwLFxuICAgICAgMTA4LFxuICAgICAgODQsXG4gICAgICAxNzYsXG4gICAgICAxMSxcbiAgICAgIDE2MCxcbiAgICAgIDIyMCxcbiAgICAgIDU4LFxuICAgICAgOSxcbiAgICAgIDIzNSxcbiAgICAgIDE1NCxcbiAgICAgIDE0NCxcbiAgICAgIDk1LFxuICAgICAgMTIxLFxuICAgICAgMjQ1LFxuICAgICAgMTgsXG4gICAgICAyMzAsXG4gICAgICAzLFxuICAgICAgMTg4LFxuICAgICAgNjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSkdWNjRYRDJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc4NjQ0MTQyODoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjExOTAxMjcxMjYxMjM1OjE5QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIk5hbWVsZXNzXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS0hTcytjREVQVGcyclFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJjS09rZkYzYUVIM2RkdUorZEhuTHJGS3A5TFJSQXh6Z0pBdkFDYldTTHlRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlFTamlsODBuMzMydm9yL0NIYWswcEF3TVg1bkhCN3NoMWpkdnZ3N1ZlQUhVQmhnb2Y1aXdFamVZaGJiQ0RoMnlNbk9aZUhJc0xCUEtad0F0TE9kWENRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInBBWmEzTFV6T3Z1ZWRBaUUrS01oSmdHdCtRYW5VNHcvcU05UXppQTV1SHl3aGhoZEVQYmdsRlJ3OWlRMmZkREF6VHp5Kzd4N3FEdjFIVGIyamhTNGlRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc4NjQ0MTQyODoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAzNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMTUxNjA4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTGxUXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMbFQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJiWmV0NGJPeVBJZXc3NTBXaXNhSUF4ZEhQSnBKbEt3VFZYUGl1dWt6dkc4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwMjIxNTkxMzcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTE1MTYxMjM4NVwifSIKfQ=="  // PUT your SESSION_ID 


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
