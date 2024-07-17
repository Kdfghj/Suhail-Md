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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94704012533";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_47_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTksXG4gICAgICAgIDIxNixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDUsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDUwLFxuICAgICAgICAzNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOCxcbiAgICAgICAgNTksXG4gICAgICAgIDk5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzksXG4gICAgICAgIDY0LFxuICAgICAgICAzNixcbiAgICAgICAgMzAsXG4gICAgICAgIDQxLFxuICAgICAgICAxODYsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQzLFxuICAgICAgICA2MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDczLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDk2LFxuICAgICAgICA2MSxcbiAgICAgICAgNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDc4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODcsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMCxcbiAgICAgICAgMjE0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTYyLFxuICAgICAgICA1NCxcbiAgICAgICAgMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDY3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDkwLFxuICAgICAgICAyMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc5LFxuICAgICAgICAyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDgxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTIyLFxuICAgICAgICA0NixcbiAgICAgICAgNTQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDg0LFxuICAgICAgICA4MixcbiAgICAgICAgMTQ2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTksXG4gICAgICAgIDM3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5MixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNixcbiAgICAgICAgMjEzLFxuICAgICAgICA5MixcbiAgICAgICAgMTAwLFxuICAgICAgICA1LFxuICAgICAgICA3NixcbiAgICAgICAgMTk2LFxuICAgICAgICAxODcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTk5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDk3LFxuICAgICAgICAxMixcbiAgICAgICAgNDksXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjEwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODUsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDMzLFxuICAgICAgICA3NixcbiAgICAgICAgMTA2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjA4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTExLFxuICAgICAgICAxOCxcbiAgICAgICAgNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzksXG4gICAgICAgIDk2LFxuICAgICAgICAzMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiR0FiTjdINE45NlgyTi9OUEtKN1R6eVJPcGZmMWw1SXFoQWlBcTZEZFdPYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDcwNDAxMjUzM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRjJDNkY2Qzc5ODhBQjI5Q0MyMEQ2MzNBMDM3MTJFNThcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMTg4MDQxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3MDQwMTI1MzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkJFQTk4RjVFM0YyMkNCMThBRkJDRDI2NTA5MkY3QUUzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTE4ODA0MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzA0MDEyNTMzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCODE3RTgwRTM1QUFDRjk1RjZGMTQ1RDIzQzA1MDMzQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjExODgwNDVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiT1FEcTNqMXZTdDJtbEZOUlN3Ti03d1wiLFxuICBcInBob25lSWRcIjogXCJmZWRkZDVlZS00NWM1LTQzMmUtODE3OC0yMzU3OTVkMWZhMjJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM2LFxuICAgICAgMjExLFxuICAgICAgMTM5LFxuICAgICAgMTY5LFxuICAgICAgMTA5LFxuICAgICAgODYsXG4gICAgICAyMDcsXG4gICAgICAxNTAsXG4gICAgICAyMzAsXG4gICAgICAxNDAsXG4gICAgICA3OSxcbiAgICAgIDMzLFxuICAgICAgMTk3LFxuICAgICAgMjQ1LFxuICAgICAgNTksXG4gICAgICA1OCxcbiAgICAgIDcwLFxuICAgICAgMTU3LFxuICAgICAgMzksXG4gICAgICAyOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTIsXG4gICAgICAxNTQsXG4gICAgICAxNjMsXG4gICAgICAzOCxcbiAgICAgIDIwNCxcbiAgICAgIDIwNCxcbiAgICAgIDIzLFxuICAgICAgMjQsXG4gICAgICAyNTUsXG4gICAgICAxMzMsXG4gICAgICAxNTgsXG4gICAgICA4MSxcbiAgICAgIDI4LFxuICAgICAgNzgsXG4gICAgICAxNjksXG4gICAgICA2MCxcbiAgICAgIDIyMCxcbiAgICAgIDE5NCxcbiAgICAgIDI1LFxuICAgICAgNThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRE1CVFNYUzZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzA0MDEyNTMzOjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI4MzYyMzQ5OTgwODg2NjoxM0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCLig53ig53wnZCN8J2QiPCdkILwn5Wz77iPIOKEovCdkIPwnZCA8J2QhvCdkIDwnZCY8J2QgPCfkqvwn6W6Li4uLlwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lTbTROWUVFTVA5M0xRR0dBNGdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUTNTdWtjTFhEem5kNXJ6aWcrWHpTdmtaaDRROVJPYUF5NjZtelVwcGpGYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJEc1BEYmpBUG1EN2M3MDA5VGo1bU11ZUJvQXF2QkV1UVJzMmNkK2NPaTVuWVZMUjdNWklYb0xsMjJTVGplWWc5dXBOc2IxcEIra0ErY2REY1cydnFEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI2RDJ2U2JSTjg2dDk2K0xUVnBNTHU1UTkvY0lnT0dZT1R6eTFwK2YvSHIvSFdtVmIzWnY2MlMzT1k5VnZhUGd1S0FuOTkwSyt5UVRzVHVBRDR3L0hndz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDcwNDAxMjUzMzoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTE4ODAzOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBXZFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUFdkLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZUJUZHpFOCtBSzNqZUQwTzIwTEtVdVBoOFFIZGdMdlNCRzF0Z3l4NkxQUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjU1Njc0NjI4LFwiY3VycmVudEluZGV4XCI6MTIsXCJkZXZpY2VJbmRleGVzXCI6WzAsNywxMF19LFwidGltZXN0YW1wXCI6XCIxNzIxMTg2ODA3NjM4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
