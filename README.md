# AxieHelper-QR
### A Discord Bot to generate a QR Code for Axie Infinity.
#### Commands:
- `qr` - Generate a QR Code.

# Requirements
- Node.js version 16.6 or higher
- Discord Bot Token
- Discord Server ID & Discord User ID
- Axie Infinity Email and Password

# Installation
Download the [Source Code](https://github.com/ikr0w/axiehelper-qr/releases)

### Installing Node.js
Install [Node.js](https://nodejs.org/) v16.6 or higher

Next you'll need to open your terminal.

On Windows, either:
   - `Shift + Right-click` inside your project directory and choose the "Open command window here" option
   - Press `Win + R` and run `cmd.exe`, and then `cd` into your folder directory

On macOS, either:
   - Open Launchpad or Spotlight and search for "Terminal"
   - In your "Applications" folder, under "Utilities", open the Terminal app

With the terminal open, run the `node -v` command to make sure you've successfully installed Node.js. If it outputs v16.6.0 or higher, great! Don't close the terminal yet, you still have steps to follow!
#
### Installing Dependencies
With Node.js installed, you can now install the required dependencies in order to run your discord bot

Using the terminal simply run this command in your discord bot folder to install the required dependencies:
```
npm install
```
Wait for it to finish and you should now have `node_modules` folder in the directory
#

### Creating a Discord Bot
Create your bot in [Discord Developer Portal](https://discord.com/developers/applications)

You can follow this [video](https://www.youtube.com/watch?v=b9KQxREfn4c) on creating a discord bot:

[![image](https://i.imgur.com/S0WO9vD.png1)](https://www.youtube.com/watch?v=b9KQxREfn4c)
#

### Inviting Your Bot
So far you’ve made a Discord Bot account but it’s not actually in any server

If you want to invite your bot you must create an Invite URL for it

There are 2 methods provided on how to do it
1. Modifying the URL Provided
2. Generating the Invite URL

#### 1. Modifying the URL Provided
First you need to copy your `Client ID` at `OAuth2` then `General` and copy the `Client ID`

You just replace the `YOUR_BOT_ID` from this URL with the `Client ID` that you copied
```
https://discord.com/api/oauth2/authorize?client_id=YOUR_BOT_ID&permissions=100352&scope=bot%20applications.commands
```

#### 2. Generating the Invite URL
Simply go to `OAuth2` tab and and select `URL Generator`

![image](https://i.imgur.com/bQt9HMa.png)

On Scopes tick the `bots` and `application.commands`

![image](https://i.imgur.com/XyYjvHH.png)

Tick the permissions required for your bot to function under “Bot Permissions”

![image](https://i.imgur.com/w310qgf.gif)

Now the resulting URL can be used to add your bot to a server.

Copy and paste the URL into your browser, choose a server to invite the bot to, and click “Authorize”.
#

### Launching your Discord Bot
Copy your Bot's Token in [Discord Developer Portal](https://discord.com/developers/applications)

![image](https://i.imgur.com/3TvBpQp.png?1)

In your discord bot folder, open the `config.json` and it should look like this:
```json
{
  "client_token": "DISCORD_BOT_TOKEN",
  "guild_id": "SERVER_ID",
  "scholars": [
    {
      "id": "DISCORD_USER_1_ID",
      "email": "EMAIL1@EMAIL",
      "password": "PASSWORD1"
    },
    {
      "id": "DISCORD_USER_2_ID",
      "email": "EMAIL2@EMAIL",
      "password": "PASSWORD2"
    }
  ]
}
```
Replace the `DISCORD_BOT_TOKEN` to what you just copied

For `SERVER_ID`, `DISCORD_USER_ID_1`, and `DISCORD_USER_ID_2` you can follow this [guide](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-) to find the Server ID and User ID

**Save your changes and the bot is now ready!**

**Run `start.bat` to launch your Discord Bot.**

# Support
[![Discord Banner 2](https://discordapp.com/api/guilds/864194584732106782/widget.png?style=banner2)](https://discord.gg/xyWaa4rRBy)

If you don't understand something in the documentation or you are experiencing problems, please don't hesitate to join our [Discord Server](https://discord.gg/xyWaa4rRBy)

# License
[GNU GPL V3](https://www.gnu.org/licenses/gpl-3.0.en.html)
