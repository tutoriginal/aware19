/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   App.js                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ancoulon <ancoulon@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/02/20 15:59:13 by ancoulon          #+#    #+#             */
/*   Updated: 2020/04/04 10:49:17 by ancoulon         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

// Dependencies

const discord = require("discord.js");
const config = require("../config");
const embed = require("./assets/embed");
const commands = require("./assets/commands");
const database = require("./assets/database");
const express = require("express");




// Discord setup

const client = new discord.Client();

client.login(config.discord.token);

client.commands = new discord.Collection();

commands.forEach((cmd) => {

	client.commands.set(cmd.name, cmd);

});

client.on("ready", () => {

	client.user.setStatus("online");

	client.user.setActivity(config.discord.status);

});




// Discord commands handler

client.on('message', (message) => {

	if (message.channel.id != config.discord.bot_channel) { return; }

	if (!message.content.startsWith(config.discord.prefix)) { return; }

	const args = message.content.slice(config.discord.prefix.length).split(' ');
	args.shift();

	if (args.length < 1) { return; }

	let cmd = client.commands.get(args[0].toLowerCase());

	if (!cmd) { return; }
	if (cmd.requiredRole && !message.member.roles.find('id', cmd.requiredRole)) { return; }

	args.shift();
	cmd.execute(message, args).then(() => {

		message.react('✅');

	}).catch((err_message) => {

		message.react('🚫');
		message.channel.send(embed.errorEmbed(err_message));

	});

});




// Express

const server = express();

server.get('/', (req, res) => {
	res.send("Aware19 landing page.");
});

server.use((req, res, next) => {

	const err = new Error("Not Found");

	err.status = 404;

	next(err);

});

server.listen(config.http.port);
