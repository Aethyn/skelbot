const fs = require('fs');
const path = require('path');
const { REST } = require('@discordjs/rest');
const { Collection } = require('discord.js');
const { Routes } = require('discord-api-types/v9');

const rest = new REST({ version: '9' }).setToken(process.env.DISCORD_BOT_TOKEN);


class CommandManager {
    constructor() {
        this.commands = new Collection();
        this.commandsData = [];
        this.commandsFolder = path.join(__dirname, '../commands');
        this.commandsFiles = fs.readdirSync(this.commandsFolder).filter(commandFile => {
            return commandFile.endsWith('.js');
        });
        this.loadCommands();
    }

    getCommands() {
        return this.commands;
    }

    loadCommands() {
        for (let commandFile of this.commandsFiles) {
            let command = require(path.join(this.commandsFolder, commandFile));
            this.commands.set(command.data.name, command);
            this.commandsData.push(command.data.toJSON());
        }
    }

    purgeCommands() {
        this.commands = new Collection();
        this.commandsData = [];
    }

    reloadCommands() {
        this.purgeCommands();
        this.loadCommands();
    }

    registerCommands() {
        rest.put(Routes.applicationGuildCommands(process.env.DISCORD_CLIENT_ID, process.env.DISCORD_GUILD_ID), { body: this.commandsData })
            .then(() => {
                console.log(`${this.commands.size} commands successfully registered to the server.`);
            })
            .catch((err) => {
                console.error(err);
            });
    }

    isValidCommand(interaction) {
        return interaction.isCommand() && this.commands.get(interaction.commandName);
    }

}

module.exports = CommandManager;
