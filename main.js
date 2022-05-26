require('dotenv').config();
const { Client, Intents } = require('discord.js');
const CommandManager = require('./utils/command-manager');

const commandManager = new CommandManager();
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.once('ready', () => {
    commandManager.registerCommands();
    client.commands = commandManager.getCommands();
	console.log('Skelbot successfully started.');
});

client.on('interactionCreate', async (interaction) => {

    if (!commandManager.isValidCommand(interaction)) {
        return;
    }
    
    let command = client.commands.get(interaction.commandName);

	try {
		await command.execute(interaction);
	} catch (err) {
		console.error(err);
		await interaction.reply({ content: 'Error during command execution.', ephemeral: true });
	}

});

client.on('messageCreate', async (message) => {
    // Nothing here at this moment
});

client.login(process.env.DISCORD_BOT_TOKEN);
