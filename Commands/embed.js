const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("embed").setDescription("Create an embed").addStringOption(o => o.setName("message").setDescription("Message").setRequired(true)),
  async execute(interaction) {
    const embed = new EmbedBuilder().setDescription(interaction.options.getString("message"));
    await interaction.reply({ embeds: [embed] });
  }
};
