/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   database.js                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ancoulon <ancoulon@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/02/22 17:49:33 by ancoulon          #+#    #+#             */
/*   Updated: 2020/04/03 20:49:22 by ancoulon         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

// Dependencies

const mongoose = require("mongoose");
const config = require("../../config");




// Connection

mongoose.connect(config.mongo.uri, {useNewUrlParser: true, useUnifiedTopology: true});



// Schemas

const Schema = mongoose.Schema;

const ObjectId = Schema.Types.ObjectId;

const UserSchema = new Schema({

	discord_id: { type: String, unique: true, required: true },

	created_at: { type: Date, required: true },

	login_42: { type: String },

	nickname: { type: String }
	
}, {collection: "users"});

const User = mongoose.model("User", UserSchema);

module.exports.User = User;