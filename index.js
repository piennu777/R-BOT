const { Client, Intents } = require('discord.js');
const dotenv = require('dotenv');

dotenv.config();

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once("ready", async () => {
    const data = [{
        name: "ping",
        description: "Replies with Pong!",
    }];
    await client.application.commands.set(data, 'server_id');
    console.log("Ready!");
});

client.login(process.env.DISCORD_TOKEN);
