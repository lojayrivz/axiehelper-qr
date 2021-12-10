const { getAccessToken } = require('../utils/getAccessToken')
const { MessageAttachment } = require('discord.js')
const { createQR } = require('../utils/createQR')
const fs = require('fs')

module.exports.config = {
    name: 'qr',
    description: 'Generate a QR Code',
}

module.exports.settings = {
    userPermissions: ['USE_APPLICATION_COMMANDS'],
    botPermissions: ['SEND_MESSAGES', 'READ_MESSAGE_HISTORY', 'ATTACH_FILES'],
    guildOnly: false,
    ownerOnly: false,
}

module.exports.execute = async (interaction, client) => {
    const { scholars } = JSON.parse(fs.readFileSync('./config.json'))
    const scholarCredentials = scholars.find(scholar => scholar.id === interaction.user.id)
    if (!scholarCredentials) return interaction.reply(`You are not in the database`)

    const accessToken = await getAccessToken(scholarCredentials.email, scholarCredentials.password)
    if (!accessToken) return interaction.reply('Wrong Email or Password')

    const qr_code = await createQR(accessToken)
    const attachment = new MessageAttachment(qr_code)
    
    interaction.reply({ files: [attachment], ephemeral: true })
};