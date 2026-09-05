const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("avatar").setDescription("Show a user's avatar").addUserOption(o => o.setName("user").setDescription("User").setRequired(false)),
  async execute(interaction) {
    const u = interaction.options.getUser("user") || interaction.user;
    await interaction.reply(u.displayAvatarURL({ size: 1024 }));
  }
};
