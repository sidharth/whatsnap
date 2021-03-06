import yargs from 'yargs/yargs'

export const cliArgs = yargs(process.argv.slice(2))
.options({
   platform: {choices: ['ios'], demandOption: true}, 
   path: {type: 'string', demandOption: true}
}).argv