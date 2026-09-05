const fs = require("fs");
const path = require("path");

const commands = [
  ["help", "Show all OurBot commands"],
  ["serverinfo", "Show server information"],
  ["userinfo", "Show user information"],
  ["avatar", "Show a user's avatar"],
  ["botinfo", "Show information about OurBot"],
  ["uptime", "Show OurBot's uptime"],
  ["say", "Make OurBot say something"],
  ["announce", "Create an announcement"],
  ["embed", "Create an embed"],
  ["clear", "Delete messages"],
  ["kick", "Kick a member"],
  ["ban", "Ban a member"],
  ["unban", "Unban a member"],
  ["timeout", "Timeout a member"],
  ["untimeout", "Remove a member's timeout"],
  ["warn", "Warn a member"],
  ["warnings", "View warnings"],
  ["unwarn", "Remove a warning"],
  ["lock", "Lock a channel"],
  ["unlock", "Unlock a channel"],
  ["slowmode", "Set channel slowmode"],
  ["purge", "Delete messages"],
  ["nick", "Change a member's nickname"],
  ["role", "Manage a role"],
  ["addrole", "Add a role to a member"],
  ["removerole", "Remove a role from a member"],
  ["mute", "Mute a member"],
  ["unmute", "Unmute a member"],
  ["poll", "Create a poll"],
  ["choose", "Choose between options"],
  ["coinflip", "Flip a coin"],
  ["dice", "Roll a dice"],
  ["eightball", "Ask the magic 8-ball"],
  ["remind", "Set a reminder"],
  ["invite", "Get an invite"],
  ["stats", "Show server statistics"],
  ["membercount", "Show member count"],
  ["channels", "Show channel information"],
  ["roles", "Show server roles"],
  ["commands", "List available commands"]
];

const dir = path.join(__dirname, "Commands");

if (!fs.existsSync(dir)) fs.mkdirSync(dir);

for (const [name, description] of commands) {
  const file = `const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("${name}")
    .setDescription("${description}"),

  async execute(interaction) {
    await interaction.reply("🚧 /${name} is coming soon!");
  }
};
`;

  fs.writeFileSync(path.join(dir, `${name}.js`), file);
}

console.log(`${commands.length} commands created.`);