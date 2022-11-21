import './bootstrap';
import { ActivityType, Client, GatewayIntentBits } from 'discord.js';

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.once('ready', () => {
    console.log('Ready!');
    client.user?.setPresence({
        activities: [{
            name: 'EVE Online',
            type: ActivityType.Playing
        }],
        status: 'dnd'
    });
});

client.login(process.env.DISCORD_TOKEN);