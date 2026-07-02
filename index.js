#!/usr/bin/env node

const chalk = require("chalk");
let card = chalk.black(String.raw`
 __________________________________________________
|  ______________________________________________  |
| |                                              | |
| |            ${chalk.white.bold("Oscar Chavez / oschvr")}             | |
| |                                              | |
| |        ${chalk.white.underline("Cloud 🌥  & Software 🛠  Engineer")}       | |
| |                                              | |
| |   ${chalk.white.bold("Github 🐙")}:   ${chalk.blue.underline(
  "https://github.com/oschvr",
)}     | |
| |   ${chalk.white.bold("Email 📧")}:    ${chalk.blue.underline(
  "hey@oschvr.com",
)}                | |
| |   ${chalk.white.bold("Web 💻")}:      ${chalk.blue.underline(
  "https://oschvr.com",
)}            | |
| |   ${chalk.white.bold("Mastodon 🐘")}: ${chalk.blue.underline(
  "@oschvr",
)}                     | |
| |                                              | |
| |______________________________________________| |
|__________________________________________________|

`);

console.log(card);
