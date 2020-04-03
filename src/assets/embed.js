/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   embed.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ancoulon <ancoulon@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/02/20 16:06:25 by ancoulon          #+#    #+#             */
/*   Updated: 2020/04/03 20:49:52 by ancoulon         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

// Dependencies

const discord = require("discord.js");
const config = require("../../config");




// Embeds

module.exports.errorEmbed = (message) => {
	return new discord.RichEmbed({
		"color": 16711680,
		"fields": [
			{
				"name": "🚫 Error",
				"value": "**" + message + "**"
			},
			{
				"name": "Need help ?",
				"value": "*type `sudo help` to see all available commands*"
			}
		]
	});
}

module.exports.pingEmbed = () => {
	return new discord.RichEmbed({
		"color": 2096896,
		"title": "🏓 Pong !"
	});
}
