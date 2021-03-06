# Whatsnap 

A util to get a complete, browsable HTML backup of all your Whatsapp chats. 


## Motivation 

Whatsapp currently doesn't let you take a full backup of your chats. This is *especially* annoying when you are switching platforms (iPhone<-->Android). 

**Note:** Currently this only works on (unencrypted) iPhone backups. 
Android support should roll in eventually if/when I find the time. (PRs are always appreciated!)


## Installation

Clone the repository, then install dependencies with npm.

```
npm install
```

## Example
```
npm run run -- --platform "ios" --path "/Users/<user>/Library/Application Support/MobileSync/Backup/<BACKUP-FOLDER-NAME>/"
```

