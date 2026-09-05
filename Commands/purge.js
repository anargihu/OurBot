const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("purge").setDescription("Delete messages").addIntegerOption(o => o.setName("amount").setDescription("Amount").setMinValue(1).setMaxValue(100).setRequired(true)).setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),
  async execute(interaction) {
    const amount = interaction.options.getInteger("amount");
    await interaction.channel.bulkDelete(amount, true);
    await interaction.reply(`🧹 Purged ${amount} messages.`);
  }
};
