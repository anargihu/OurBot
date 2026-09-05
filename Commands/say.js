const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("say").setDescription("Make OurBot say something").addStringOption(o => o.setName("message").setDescription("Message").setRequired(true)),
  async execute(interaction) {
    await interaction.reply({ content: interaction.options.getString("message"), allowedMentions: { parse: [] } });
  }
};
