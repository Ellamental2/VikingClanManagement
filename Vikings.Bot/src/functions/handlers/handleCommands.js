const { REST } = require('@discordjs/rest')
const { Routes } = require('discord-api-types/v9');
const fs = require('fs');

module.exports = (client) => {
    client.handleCommands = async () => {
        const commandFolders = fs.readdirSync('./src/commands');
        for (const folder of commandFolders) {
            const commandFiles = fs
                .readdirSync(`./src/commands/${folder}`)
                .filter((file) => file.endsWith(".js"));

            const { commands, commandArray } = client;
            for (const file of commands) {
                const command = require(`../../commands/${folder}/${file}`)
                commands.set(command.data.name, command);
                commandArray.push(command.data.toJSON());
                console.log(`ODIN | Command: ${command.data.name} has been passed through the handler`)
            }
        }
    }

    const clientId = provess.env.clientId;
    const guildId = process.env.guildId;
    const rest = new REST({ version: '9' }).setToken(procss.env.token);
    try {
        console.log("ODIN | Started refreshing application (/) commands.");

        await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
            body: commandArray,
        });

        console.log("ODIN | Successfully reloaded application (/) commands.")
    } catch (e) {
        console.error(error);
    }
}