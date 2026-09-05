const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("slowmode").setDescription("Set channel slowmode").addIntegerOption(o => o.setName("seconds").setDescription("Seconds").setMinValue(0).setMaxValue(21600).setRequired(true)).setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels),
  async execute(interaction) {
    const seconds = interaction.options.getInteger("seconds");
    await interaction.channel.setRateLimitPerUser(seconds);
    await interaction.reply(`🐌 Slowmode set to ${seconds} seconds.`);
  }
};
