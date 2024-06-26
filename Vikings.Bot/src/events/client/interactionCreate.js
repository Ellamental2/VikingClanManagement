module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        if (interaction.isChatInputCommand()) {
            const { commands } = client;
            const { commandName }
            const command = commands.get();
            if (!command) return;

            try {
                await command.execute(interaction, client);
            } catch (e) {
                console.error(e);
                await interaction.reply({
                    content: `An error occured while executing this command..`,
                    ephemeral: true
                })
            }
        }
    }
}