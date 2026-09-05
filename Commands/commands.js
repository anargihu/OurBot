const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("commands").setDescription("List available commands"),
  async execute(interaction, client) {
    await interaction.reply(`📜 **OurBot Commands (${client.commands.size})**\n${[...client.commands.keys()].map(x => `/${x}`).join(" • ")}`);
  }
};
