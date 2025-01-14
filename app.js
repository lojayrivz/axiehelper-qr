const { Client, Intents, Collection } = require('discord.js')
const { client_token } = require('./config.json')
const fs = require('fs')

const client = new Client({
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
    ]
})

client.slashCommands = new Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for (const [index, file] of commandFiles.entries()) {
    const command = require(`./commands/${file}`)
    client.slashCommands.set(command.config.name, command)

    const slashCmdName = `[${command.config.name}]`
    const slashCmdIndex = `[${index + 1}]`
    console.log(`${slashCmdIndex} Loaded ${slashCmdName} command`)
}

fs.readdir('./events/', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./events/${file}`)
        const eventName = file.split('.')[0]

        if (event.once) client.once(eventName, event.bind(null, client))
        else client.on(eventName, event.bind(null, client))
    })
})

client.login(client_token)