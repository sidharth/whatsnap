# Whatsnap 

A util to get a complete, browsable HTML backup of all your Whatsapp chats. Written in Typescript.

## Motivation 

Whatsapp currently doesn't let you take a full backup of your chats. This is *especially* annoying when you are switching platforms (iPhone<-->Android). 

**Note:** Currently this only works on (unencrypted) iPhone backups. 
Android support should roll in eventually if/when I find the time. 

## Installation

Clone the repository, then install dependencies with npm.

```
npm install
```

## Example
```
npm run run -- --platform "ios" --path "<IOS-BACKUP-FOLDER-PATH>/"
```

On a Mac, this backup folder path should be something like `/Users/<user>/Library/Application Support/MobileSync/Backup/<IOS-BACKUP-FOLDER-NAME>/`

This should generate all your Whatsapp chats in `gen/` (a separate HTML file for each person/group)


## Future work 
(*PRs are always appreciated!*)
- Show message dates
- Show sender names in generated group chats.
- Android compatibility
- Media backups
