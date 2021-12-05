const {guild_id} = require('../config.json');

module.exports = async (client) => {
    client.user.setActivity(`Axie Infinity`, { type: 'PLAYING' })

    const slashCommandsConfig = client.slashCommands.map(command => command.config)
    // GLOBAL SLASH COMMANDS
    // await client.application?.commands.set(slashCommandsConfig).then(() => console.log('GLOBAL SLASH COMMANDS SET'));
    // GUILD SLASH COMMANDS
    client.guilds.cache.get(guild_id)?.commands.set(slashCommandsConfig).then(() => console.log('GUILD SLASH COMMANDS SET'))

    console.log(`Ready to serve!`)
}