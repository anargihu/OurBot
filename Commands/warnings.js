const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("warnings").setDescription("View warnings").addUserOption(o => o.setName("user").setDescription("User").setRequired(true)),
  async execute(interaction) {
    await interaction.reply(`⚠️ Warning storage isn't connected yet for ${interaction.options.getUser("user").tag}.`);
  }
};
