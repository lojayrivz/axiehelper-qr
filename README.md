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
Download the Source Code

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

Using the terminal Simply run this command in your discord bot folder to install the required dependencies:
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

### Run `start.bat` to launch your discord bot.

# Support
If you don't understand something in the documentation or you are experiencing problems, please don't hesitate to join our [Support Server](https://discord.com/invite/NqvAQaWssu)\
![Discord Banner 2](https://discordapp.com/api/guilds/864194584732106782/widget.png?style=banner2)

# License
[GNU GPL V3](https://choosealicense.com/licenses/mit/)