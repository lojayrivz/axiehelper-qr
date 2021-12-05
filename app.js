const { Client, Intents, Collection } = require('discord.js');
const fs = require('fs');
const { client_token } = require('./config.json')

const client = new Client({
    restTimeOffset: 50,
    allowedMentions: { repliedUser: true, parse: ['users', 'roles'] },
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGES,
    ],
    partials: [
        'USER',
        'CHANNEL',
        'GUILD_MEMBER',
        'REACTION'
    ]
});

client.slashCommands = new Collection();

const commandFiles = fs.readdirSync(`./commands/`).filter(file => file.endsWith('.js'));
for (const [index, file] of commandFiles.entries()) {
    const command = require(`./commands/${file}`);
    client.slashCommands.set(command.config.name, command);

    const slashCmdName = `[${command.config.name}]`
    const slashCmdIndex = `[${index + 1}]`
    console.log(`${slashCmdIndex} Loaded ${slashCmdName} slash command`);
}

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        if (event.once) {
            client.once(eventName, event.bind(null, client));
        } else {
            client.on(eventName, event.bind(null, client));
        }
    });
});

client.login(client_token)