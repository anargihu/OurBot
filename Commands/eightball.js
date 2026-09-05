const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("eightball").setDescription("Ask the magic 8-ball").addStringOption(o => o.setName("question").setDescription("Question").setRequired(true)),
  async execute(interaction) {
    const answers = ["Yes.", "No.", "Definitely.", "Probably.", "Ask again later.", "Absolutely not."];
    await interaction.reply(`🎱 ${answers[Math.floor(Math.random() * answers.length)]}`);
  }
};
