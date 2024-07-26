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
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923267233230";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "92346466965,03267233230";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_14_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjI3LFxuICAgICAgICA3MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDcsXG4gICAgICAgIDUyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI3LFxuICAgICAgICA3NixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM3LFxuICAgICAgICAxMSxcbiAgICAgICAgNTksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDY1LFxuICAgICAgICAyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDg2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNixcbiAgICAgICAgMjcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDksXG4gICAgICAgIDYxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDkxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIsXG4gICAgICAgIDQyLFxuICAgICAgICAzMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAzOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ0LFxuICAgICAgICA4NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTEyLFxuICAgICAgICA4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDExLFxuICAgICAgICAyMjUsXG4gICAgICAgIDU0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOCxcbiAgICAgICAgMTY5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDcwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTczLFxuICAgICAgICA0NSxcbiAgICAgICAgMjE1LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjYsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDk2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTk3LFxuICAgICAgICA5NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDY4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwMixcbiAgICAgICAgODksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDAsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDMwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwMixcbiAgICAgICAgODAsXG4gICAgICAgIDI1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzYsXG4gICAgICAgIDkyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTUyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjEyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTExLFxuICAgICAgICA2MixcbiAgICAgICAgMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTksXG4gICAgICAgIDYyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDk3LFxuICAgICAgICA4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjksXG4gICAgICAgIDksXG4gICAgICAgIDM1LFxuICAgICAgICAzLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiR2Z1ZENVS1BCVXdPaG9PL2tuem40dkhEKzRWT2M4Mk0yamwzNWxEdzlEVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRjlMYVdEazNSX0N5anlYV0hFS0RjUVwiLFxuICBcInBob25lSWRcIjogXCI5ZDA5ZjA4Yi0wYTE0LTRlMjctOGQ1OC1lMTI4YmExYTM0YzVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYsXG4gICAgICA1NyxcbiAgICAgIDI0LFxuICAgICAgMTM1LFxuICAgICAgNjMsXG4gICAgICAyMTksXG4gICAgICA3OCxcbiAgICAgIDIxMCxcbiAgICAgIDE0OCxcbiAgICAgIDI0NCxcbiAgICAgIDE3OSxcbiAgICAgIDI2LFxuICAgICAgNDIsXG4gICAgICAxMjAsXG4gICAgICAxNjgsXG4gICAgICAxNzEsXG4gICAgICAzNSxcbiAgICAgIDEwMixcbiAgICAgIDExMCxcbiAgICAgIDQ3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyLFxuICAgICAgMTY4LFxuICAgICAgMTUsXG4gICAgICAyNyxcbiAgICAgIDEwNSxcbiAgICAgIDI3LFxuICAgICAgNTEsXG4gICAgICA3MixcbiAgICAgIDE1MCxcbiAgICAgIDQ2LFxuICAgICAgMTcyLFxuICAgICAgMSxcbiAgICAgIDEsXG4gICAgICA4MyxcbiAgICAgIDYyLFxuICAgICAgMjcsXG4gICAgICAxMDQsXG4gICAgICAxODEsXG4gICAgICA3MSxcbiAgICAgIDEzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3NFE1TkpKU1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjY3MjMzMjMwOjQ5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDM2NTgxOTIzMzg5ODI6NDlAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiU2sgU2FtZWVy8J+lsFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lqZ3lTMFFuK0dNdFFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiR0NtUnFkMGNCR1M0cFlaUXA0Wk9WcmdRV2xRQ1dVd0FXOWx2eXZ2VzlXOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJXY1R0bys0MldEQ3A5a1czNE5STzVMcmo4Ulp2TDl0SUtEVXMvc0R5SllqTW1PcVhrQlZMcmlqRXRJVGlkYW9NYTh3QkRScm9PTW5EUGtOdWpmZE5BQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJudTlKOUFWTXg1TmlKR1VHVW9qSjViTm4yMDNBUGFJekVQZFc1bEE5NWJHYkoyZWxBblZVQjhBOGpFWlpyMXBaVXRxbE5IYlNCelV5TDVHZ0lmWHJDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNjcyMzMyMzA6NDlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE5NzA4NTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNenpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU16ei5qc29uIjogIntcImtleURhdGFcIjpcImxIdjJKeEtuWE5aZjRhK0JEOXBKYWlyMjR5NkJoZkREbFErK1FQd3d2T0k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTU1ODAxNjgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTk3MDg1NDk4NFwifSIKfQ==z cuz"  // PUT your SESSION_ID 


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
