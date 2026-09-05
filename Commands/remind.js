const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("remind").setDescription("Set a reminder").addIntegerOption(o => o.setName("minutes").setDescription("Minutes").setMinValue(1).setRequired(true)).addStringOption(o => o.setName("message").setDescription("Reminder").setRequired(true)),
  async execute(interaction) {
    const minutes = interaction.options.getInteger("minutes");
    const message = interaction.options.getString("message");
    await interaction.reply(`⏰ Reminder set for ${minutes} minute(s).`);
    setTimeout(() => interaction.followUp(`⏰ <@${interaction.user.id}> Reminder: ${message}`).catch(() => {}), minutes * 60000);
  }
};
