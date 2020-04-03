/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   config.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ancoulon <ancoulon@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/02/20 16:06:32 by ancoulon          #+#    #+#             */
/*   Updated: 2020/04/03 20:48:40 by ancoulon         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const development = {
	discord: {
		token: process.env.DISCORD_TOKEN,
		status: "▶ sudo help",
		prefix: "sudo",
		bot_channel: "680069378548826142",
		student_role: "680069955374547132",
		admin_role: "680069792673169440"
	},
	mongo: {
		uri: process.env.MONGO_URI
	},
	api42: {
		uid: process.env.UID_42,
		secret: process.env.SECRET_42
	}
}

const production = {
	discord: {
		token: process.env.DISCORD_TOKEN,
		status: "▶ sudo help",
		prefix: "sudo",
		bot_channel: "680069378548826142",
		student_role: "680069955374547132",
		admin_role: "680069792673169440"
	},
	mongo: {
		uri: process.env.MONGO_URI
	},
	api42: {
		uid: process.env.UID_42,
		secret: process.env.SECRET_42
	}
};

module.exports = (process.env.NODE_ENV == 'production') ? production: development;
