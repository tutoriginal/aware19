/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   commands.js                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ancoulon <ancoulon@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/02/20 16:46:58 by ancoulon          #+#    #+#             */
/*   Updated: 2020/04/04 11:15:03 by ancoulon         ###   ########.fr       */
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

];
