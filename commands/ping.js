const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription(`Replies with 'Pong'. Used for health check purposes.`),
        
	async execute(interaction) {
		return interaction.reply('Pong');
	}
	
};
