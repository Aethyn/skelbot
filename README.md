# Skelbot

## What is Skelbot ?

Skelbot is a [Discord](https://discord.com/) bot skeleton, powered by [discord.js](https://discord.js.org/), easy to install and quick to start.  
It's more or less what you'll obtain if you follow the [discord.js Guide](https://discordjs.guide/), excepting that some parts were slightly improved (like the commands register, managed by a `CommandManager` which provides few convenients methods, for example).  

### Another Discord bot ? How original... OK, what's yours doing ?

Out of the box, almost nothing.  
The only command is a ping, used to perform a health check of the bot.  
But, Skelbot is built around a scalability principle.  

To extend Skelbot's skills, you just have to add a JS file, containing a `SlashCommandBuilder` object from [@discordjs/builders](https://github.com/discordjs/builders/blob/main/docs/examples/Slash%20Command%20Builders.md) library, then restart the bot to load all commands (including the new ones you just added).  

[@discordjs/builders](https://github.com/discordjs/builders/blob/main/docs/examples/Slash%20Command%20Builders.md) commands are easy to create, even if you're not a seasoned javascript developer.  
SlashCommand can easily be shared between discord bot users, making it easier to use new commands, without having to rebuild your entire bot.  

So, why not giving it a try ?  

## Getting started

### Configuration

First, you need to go to the [Discord application management page](https://discordapp.com/developers/applications/me) and create a new application, as described [here](https://discord.com/developers/docs/getting-started#configuring-a-bot).  

You can install and run the bot with, or without [docker](https://www.docker.com/).  
Depending of the installation you choose, the requirements will not be exactly the same.  

If you don't want to use git, alternatively, you can just download the .zip archive on this repository by clicking "code" > "download zip" on the top-right of this repository, then unzip it into the desired folder.  

```shell
# Start by cloning the repository
git clone https://github.com/Aethyn/skelbot.git
# Move into the newly created app folder
cd skelbot
# Make a copy of .env.example file
cp .env.example .env
```

Fill the .env file values with your :
* discord bot token,
* client id,
* server id

### Installation with Docker (recommended)

Install the following requirements :
* [docker](https://www.docker.com/)

I assume that you are at least a bit familiar with docker.  
(If it is not the case, take a look at at the documentation [here](https://docs.docker.com/get-started/)).  

```shell
# Build the docker image
docker build -t skelbot .
# Run the docker container
docker run -v .:/app -d skelbot
```

You can check if the docker application is running with the `docker ps` command.  

### Installation with NodeJS/npm

Install the following requirements :
* [Nodejs](https://nodejs.org/en/) >= node:16.14.x
* npm (provided with Nodejs)

```shell
# Install nodemon (a lifecycle application manager) with npm
npm i -g nodemon
# Install all application dependencies
npm install
# Start the application
nodemon main.js
```

You can check if the application is running with the success message in the console.  

## License

Skelbot is published under MIT license.  
Read the license file for more informations.  

You are encouraged to clone, fork, modify, extend the application at your will.  
If you create SlashCommand compatible with Skelbot, don't hesitate to mention it.  

## Contributing

Contributions are highly encouraged.  
Pull requests, issues, etc. are welcomed.  

A contributing guidelines will coming soon.  

## Usefull links for SlashCommand development

* [discord.js guide](https://discordjs.guide/)
* [discord.js documentation](https://discord.js.org/#/docs/discord.js/stable/general/welcome)
* [SlashCommandBuilder of discordjs/builders on github](https://github.com/discordjs/builders/blob/main/docs/examples/Slash%20Command%20Builders.md)
* [Official Discord developer portal documentation](https://discord.com/developers/docs/intro)
