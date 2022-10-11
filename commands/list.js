const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageEmbed } = require('discord.js');
const fs = require('fs');
require('dotenv').config()

module.exports = {
    data: new SlashCommandBuilder()
        .setName('list')
        .setDescription('List of items in the market bot'),

    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {

                    function formatNumber(n) {
                        return n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    }

                    let str = "";
                    let items = JSON.parse(fs.readFileSync("./utils/items.json", "utf8"));
                    for (let i = 0; i < items.length; i++) {
                        str += `${items[i].id} - ${items[i].name} - ${formatNumber(items[i].price)}$\n`;
                    }
                    let embed = new MessageEmbed()
                        .setTitle("Liste items")
                        .setColor('BLUE')
                        .setTimestamp()
                        .setFooter({ text: "ID - Nom - Prix"})
                        .setTimestamp()
                        .setDescription(str)

                    await interaction.reply({embeds: [embed], ephemeral: true })
                }
        } 

