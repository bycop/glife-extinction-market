const fs = require('fs');
const axios = require('axios');
const request = require('request')
const { Client, Collection, Intents} = require('discord.js');
const client = new Client( { intents: [Intents.FLAGS.GUILDS] });
const handleCommand = require('./helpers/command');
require('dotenv').config()

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
}

client.on('interactionCreate', async interaction => {
    if (interaction.isCommand()) handleCommand(client, interaction);
});

var oldOffers = [];

client.on("ready", async () => {
    console.log(`Logged in as ${client.user.tag}!`);  
    client.user.setStatus("ONLINE");
    client.user.setActivity(process.env.STATUS, {type: 'PLAYING'} );

    while (1) {
      await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](1000)
      let items = JSON.parse(fs.readFileSync("./utils/items.json", "utf8"));
      let proxies = JSON.parse(fs.readFileSync("./utils/proxies.json", "utf8"));
  
      for (let k = 0; k < items.length; k++) {
        await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](200)
        let i = Math.floor(Math.random() * items.length);
        const startTime = (new Date()).getTime();
        let random_number = Math.floor(Math.random() * proxies.length);
        axios.get(`https://api.gtaliferp.fr:8443/v1/extinction/marketplace/sell/${items[i].id}`, {
          proxy: {
          	host: proxies[random_number].split(":")[0],
          	port: proxies[random_number].split(":")[1],
           }
        }).then(async function (response) {
          const endTime = (new Date()).getTime();
          console.log(response.status)
          if (response.status && response.status == 200) {
            try {
              let list = response.data;
              for (let j = 0; j < list.length; j++) {
                if (list[j].price < items[i].price && !(oldOffers.find(yes => (list[j].id.toString()) === yes))) {
                  let random_number2 = Math.floor(Math.random() * proxies.length);
                  let options = {
                    url: process.env.WEBHOOK,
                    https_proxy: proxies[random_number2],
                    form: {
                      content: `<@&${process.env.PINGROLE}> **${items[i].name}** - **${list[j].price}$** - **${list[j].seller}** - **(${endTime - startTime}ms)**`
                    }
                  };
                  request.post(options);
                  oldOffers.push(list[j].id.toString())
                  await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](500)
                }
              }
            }
            catch (e) {
              console.log(e);
            }
          }
        })
      }
    }
})

client.login(process.env.TOKEN);