const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("userinfo").setDescription("Show user information").addUserOption(o => o.setName("user").setDescription("User").setRequired(false)),
  async execute(interaction) {
    const u = interaction.options.getUser("user") || interaction.user;
    await interaction.reply(`👤 **${u.tag}**\nID: ${u.id}\nCreated: <t:${Math.floor(u.createdTimestamp / 1000)}:R>`);
  }
};