const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageEmbed } = require('discord.js');
const fs = require('fs');
require('dotenv').config()

module.exports = {
    data: new SlashCommandBuilder()
        .setName('set')
        .setDescription('Set the new price for the item')
        .addStringOption(option => option.setName('item_id').setDescription('Enter an items id').setRequired(true))
        .addIntegerOption(option => option.setName('item_price').setDescription('Enter an price').setRequired(true)),

    /**
     * 
     * @param {CommandInteraction} interaction 
     */
     async execute(interaction) {

        if (!interaction.member.roles.cache.has(process.env.UPDATEROLE)) return await interaction.reply({content: 'No access!'})

        const weaponidd = interaction.options.getString('item_id');
        const integer = interaction.options.getInteger('item_price'); 

        function formatNumber(n) {
            return n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        }

        let items = JSON.parse(fs.readFileSync("./utils/items.json", "utf8"));
                let found = -1;
                for (let i = 0; i < items.length; i++) {
                    if (items[i].id === weaponidd)
                        found = i;
                }
                if (found == -1) return;
                items[found].price = parseInt(integer);
                fs.writeFile("./utils/items.json", JSON.stringify(items, null, 4), (err) => {
                    if (err) console.log(err);
                });

             interaction.reply(`New price : ${weaponidd}` + " " + `for ${formatNumber(integer)}`)


            }
     } 

