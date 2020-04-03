/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   commands.js                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ancoulon <ancoulon@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/02/20 16:46:58 by ancoulon          #+#    #+#             */
/*   Updated: 2020/04/03 20:53:15 by ancoulon         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

// Dependencies

const config = require("../../config");
const embed = require("./embed");
const db = require("./database");




// Commands

module.exports = [
	{
		name: "ping",
		description: "Checks the bot's availability",
		requiredArgs: 0,
		requiredRole: null,
		execute(message, args) {

			return new Promise((resolve, reject) => {

				message.channel.send(embed.pingEmbed());
				resolve();

			});
		},
	},
	// {
	// 	name: "register",
	// 	description: "Registers you to the databaseb",
	// 	requiredArgs: 0,
	// 	requiredRole: null,
	// 	execute(message, args) {

	// 		return new Promise((resolve, reject) => {

	// 			db.User.findOne({ discord_id: message.client.user.id }).then((doc) => {

	// 				if (!doc) {
	// 				db.User.create({discord_id: message.client.user.id, created_at: Date.now()}).then(() => {

	// 					resolve();
	
	// 				}).catch((err) => {
	
	// 				});
	// 			}
	// 				resolve();

	// 			}).catch((err) => {

	// 				reject("Database error");

	// 			});

	// 		});

	// 	},
	// },
	// {
	// 	name: "connect",
	// 	description: "Connects your intra account",
	// 	requiredArgs: 0,
	// 	requiredRole: null,
	// 	execute(message, args) {

	// 		return new Promise((resolve, reject) => {

	// 			db.User.findOne({ discord_id: message.client.user.id }).then((doc) => {

	// 				if (!doc) {
	// 				db.User.create({discord_id: message.client.user.id, created_at: Date.now()}).then(() => {

	// 					resolve();
	
	// 				}).catch((err) => {
	
	// 				});
	// 			}
	// 				resolve();

	// 			}).catch((err) => {

	// 				reject("Database error");

	// 			});

	// 		});

	// 	},
	// },
	// {
	// 	name: "me",
	// 	description: "User info",
	// 	requiredArgs: 0,
	// 	requiredRole: null,
	// 	execute(message, args) {

	// 		return new Promise((resolve, reject) => {

	// 			db.User.findOne({ discord_id: message.client.user.id }).then((doc) => {

	// 				if (!doc) return (reject("You are not registered"));
	// 				console.log(doc);
	// 				resolve();

	// 			}).catch((err) => {

	// 				reject("Database error");

	// 			});

	// 		});

	// 	},
	// },
	// {
	// 	name: "nickname",
	// 	description: "Connects your intra account",
	// 	requiredArgs: 1,
	// 	requiredRole: config.discord.student_role,
	// 	execute(message, args) {

	// 		return new Promise((resolve, reject) => {

	// 			resolve();

	// 		});

	// 	},
	// }
];
