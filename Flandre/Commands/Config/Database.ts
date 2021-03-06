function DatabaseCommands(Database) {
  Database.set(`commandschannelname`, `CommandsChannel`)
  Database.set(`commandschannelcategory`, `Administration`)
  Database.set(`commandschanneldescription`, `Disable/Enable my commands in any specific Channel!`)
  Database.set(`commandschannelusage`, `<Enable #Channel | Disable #Channel>`)
  Database.set(`commandschannelexample`, `disable #general`)
  Database.set(`commandschannelpermission`, `Manage Server`)
  console.log('Registered CommandsChannel Command~')
  
  Database.set(`animememename`, `AnimeMeme`)
  Database.set(`animememecategory`, `Anime`)
  Database.set(`animememedescription`, `Gets a random Anime Meme!`)
  Database.set(`animememeusage`, `None!`)
  Database.set(`animememeexample`, `animememe`)
  Database.set(`animememepermission`, `Everyone`)
  console.log('Registered AnimeMeme Command~')
  
  Database.set(`hugname`, `Hug`)
  Database.set(`hugcategory`, `Roleplay`)
  Database.set(`hugdescription`, `Hug Someone or just yourself!`)
  Database.set(`hugusage`, `[Mention a user]`)
  Database.set(`hugexample`, `hug @Zed`)
  Database.set(`hugpermission`, `Everyone`)
  console.log('Registered Hug Command~')

  Database.set(`cuddlename`, `Cuddle`)
  Database.set(`cuddlecategory`, `Roleplay`)
  Database.set(`cuddledescription`, `Cuddle Someone or just yourself!`)
  Database.set(`cuddleusage`, `[Mention a user]`)
  Database.set(`cuddlexample`, `cuddle @Zed`)
  Database.set(`cuddlepermission`, `Everyone`)
  console.log('Registered Cuddle Command~')
  
  Database.set(`kissname`, `Kiss`)
  Database.set(`kisscategory`, `Roleplay`)
  Database.set(`kissdescription`, `Kiss Someone or just yourself!`)
  Database.set(`kissusage`, `[Mention a user]`)
  Database.set(`kissexample`, `kiss @Zed`)
  Database.set(`kisspermission`, `Everyone`)
  console.log('Registered Kiss Command~')
  
  Database.set(`helpname`, `Help`)
  Database.set(`helpcategory`, `Miscellaneous`)
  Database.set(`helpdescription`, `List all modules or commands and Info on specific Command or Module!`)
  Database.set(`helpusage`, `[Module or Command]`)
  Database.set(`helpexample`, `help animememe`)
  Database.set(`helppermission`, `Everyone`)
  console.log('Registered Help Command~')
  
  Database.set(`uptimename`, `Uptime`)
  Database.set(`uptimecategory`, `Miscellaneous`)
  Database.set(`uptimedescription`, `Shows how many days, hrs, weeks i have been alive!`)
  Database.set(`uptimeusage`, `None!`)
  Database.set(`uptimeexample`, `uptime`)
  Database.set(`uptimepermission`, `Everyone`)
  console.log('Registered Uptime Command~')
  
  Database.set(`pokename`, `Poke`)
  Database.set(`pokecategory`, `Roleplay`)
  Database.set(`pokedescription`, `Poke Someone or just yourself!`)
  Database.set(`pokeusage`, `[Mention a user!]`)
  Database.set(`pokeexample`, `poke @Zed`)
  Database.set(`pokepermission`, `Everyone`)
  console.log('Registered Poke Command~')
  
  Database.set(`feedname`, `Feed`)
  Database.set(`feedcategory`, `Roleplay`)
  Database.set(`feeddescription`, `Feed Someone or just yourself!`)
  Database.set(`feedusage`, `[Mention a user!]`)
  Database.set(`feedexample`, `feed @Zed`)
  Database.set(`feedpermission`, `Everyone`)
  console.log('Registered Feed Command~')
  
  Database.set(`smugname`, `Smug`)
  Database.set(`smugcategory`, `Roleplay`)
  Database.set(`smugdescription`, `Smug at  Someone or just yourself!`)
  Database.set(`smugusage`, `[Mention a user!]`)
  Database.set(`smugexample`, `smug @Zed`)
  Database.set(`smugpermission`, `Everyone`)
  console.log('Registered Smug Command~')
  
  Database.set(`patname`, `Pat`)
  Database.set(`patcategory`, `Roleplay`)
  Database.set(`patdescription`, `Pat Someone or just yourself!`)
  Database.set(`patusage`, `[Mention a user!]`)
  Database.set(`patexample`, `pat @Zed`)
  Database.set(`patpermission`, `Everyone`)
  console.log('Registered Pat Command~')
  
  Database.set(`slapname`, `Slap`)
  Database.set(`slapcategory`, `Roleplay`)
  Database.set(`slapdescription`, `Slap Someone or just yourself!`)
  Database.set(`slapusage`, `[Mention a user!]`)
  Database.set(`slapexample`, `slap @Zed`)
  Database.set(`slappermission`, `Everyone`)
  console.log('Registered Slap Command~')

  Database.set(`ticklename`, `Tickle`)
  Database.set(`ticklecategory`, `Roleplay`)
  Database.set(`tickledescription`, `Tickle Someone or just yourself!`)
  Database.set(`tickleusage`, `[Mention a user!]`)
  Database.set(`tickleexample`, `tickle @Zed`)
  Database.set(`ticklepermission`, `Everyone`)
  console.log('Registered Tickle Command~')
    
  Database.set(`animescrapname`, `AnimeScrap`)
  Database.set(`animescrapcategory`, `Anime`)
  Database.set(`animescrapdescription`, `Search some anime and get info!`)
  Database.set(`animescrapusage`, `<Anime Name>`)
  Database.set(`animescrapexample`, `animescrap Rent a girlfriend`)
  Database.set(`animescrappermission`, `Everyone`)
  console.log('Registered AnimeScrap Command~')
    
  Database.set(`avatarname`, `Avatar`)
  Database.set(`avatarcategory`, `Miscellaneous`)
  Database.set(`avatardescription`, `Make your avatar or someone's avatar downloadable!`)
  Database.set(`avatarusage`, `[Mention a user or ID]`)
  Database.set(`avatarexample`, `avatar @Zed`)
  Database.set(`avatarpermission`, `Everyone`)
  console.log('Registered Avatar Command~')
    
  Database.set(`vomitname`, `Vomit`)
  Database.set(`vomitcategory`, `Roleplay`)
  Database.set(`vomitdescription`, `Vomit to Someone or just yourself!`)
  Database.set(`vomitusage`, `[Mention a user!]`)
  Database.set(`vomitexample`, `vomit @Zed`)
  Database.set(`vomitpermission`, `Everyone`)
  console.log('Registered Vomit Command~')
  
  Database.set(`cryname`, `Cry`)
  Database.set(`crycategory`, `Roleplay`)
  Database.set(`crydescription`, `Cry to Someone or just yourself!`)
  Database.set(`cryusage`, `[Mention a user!]`)
  Database.set(`cryexample`, `cry @Zed`)
  Database.set(`crypermission`, `Everyone`)
  console.log('Registered Cry Command~')
  
  Database.set(`clapname`, `Clap`)
  Database.set(`clapcategory`, `Roleplay`)
  Database.set(`clapdescription`, `Clap to Someone or just yourself!`)
  Database.set(`clapusage`, `[Mention a user!]`)
  Database.set(`clapexample`, `clap @Zed`)
  Database.set(`clappermission`, `Everyone`)
  console.log('Registered Clap Command~')
  
  Database.set(`scaredname`, `Scared`)
  Database.set(`scaredcategory`, `Roleplay`)
  Database.set(`scareddescription`, `Scared to Someone or just yourself!`)
  Database.set(`scaredusage`, `[Mention a user!]`)
  Database.set(`scaredexample`, `scared @Zed`)
  Database.set(`scaredpermission`, `Everyone`)
  console.log('Registered Scared Command~')
    
  Database.set(`helloname`, `Hello`)
  Database.set(`hellocategory`, `Roleplay`)
  Database.set(`hellodescription`, `Say hello to Someone or just yourself!`)
  Database.set(`hellousage`, `[Mention a user!]`)
  Database.set(`helloexample`, `hello @Zed`)
  Database.set(`hellopermission`, `Everyone`)
  console.log('Registered Hello Command~')
    
  Database.set(`byename`, `Bye`)
  Database.set(`byecategory`, `Roleplay`)
  Database.set(`byedescription`, `Goodbye at Someone or just yourself!`)
  Database.set(`byeusage`, `[Mention a user!]`)
  Database.set(`byeexample`, `bye @Zed`)
  Database.set(`byepermission`, `Everyone`)
  console.log('Registered Bye Command~')
  
  Database.set(`blushname`, `Blush`)
  Database.set(`blushcategory`, `Roleplay`)
  Database.set(`blushdescription`, `Blush to Someone or just yourself!`)
  Database.set(`blushusage`, `[Mention a user!]`)
  Database.set(`blushexample`, `blush @Zed`)
  Database.set(`blushpermission`, `Everyone`)
  console.log('Registered Blush Command~')
   
  Database.set(`boredname`, `Bored`)
  Database.set(`boredcategory`, `Roleplay`)
  Database.set(`boreddescription`, `Bored with Someone or just yourself!`)
  Database.set(`boredusage`, `[Mention a user!]`)
  Database.set(`boredexample`, `bored @Zed`)
  Database.set(`boredpermission`, `Everyone`)
  console.log('Registered Bored Command~')
    
  Database.set(`sadname`, `Sad`)
  Database.set(`sadcategory`, `Roleplay`)
  Database.set(`saddescription`, `Sad with Someone or just yourself!`)
  Database.set(`sadusage`, `[Mention a user!]`)
  Database.set(`sadexample`, `sad @Zed`)
  Database.set(`sadpermission`, `Everyone`)
  console.log('Registered Sad Command~')
    
  Database.set(`autorolename`, `AutoRole`)
  Database.set(`autorolecategory`, `Administration`)
  Database.set(`autoroledescription`, `Set the AutoRole System!`)
  Database.set(`autoroleusage`, `<Enable | Disable | setrole <Mention a Role>>`)
  Database.set(`autoroleexample`, `setrole @Member`)
  Database.set(`autorolepermission`, `Manage Server`)
  console.log('Registered AutoRole Command~')

  Database.set(`userinfoname`, `UserInfo`)
  Database.set(`userinfocategory`, `Misc`)
  Database.set(`userinfodescription`, `Get info of a specific User!`)
  Database.set(`userinfousage`, `[Mention a user!]`)
  Database.set(`userinfoexample`, `userinfo @Zed`)
  Database.set(`userinfopermission`, `Everyone`)
  console.log('Registered UserInfo Command~')
    
  Database.set(`serverinfoname`, `ServerInfo`)
  Database.set(`serverinfocategory`, `Misc`)
  Database.set(`serverinfodescription`, `Get Info on the server!`)
  Database.set(`serverinfousage`, `None!`)
  Database.set(`serverinfoexample`, `serverinfo`)
  Database.set(`serverinfopermission`, `Everyone`)
  console.log('Registered ServerInfo Command~')
    
  Database.set(`animeavatarname`, `AnimeAvatar`)
  Database.set(`animeavatarcategory`, `Anime`)
  Database.set(`animeavatardescription`, `Get a random Anime PfP!`)
  Database.set(`animeavatarusage`, `None!`)
  Database.set(`animeavatarexample`, `animeavatar`)
  Database.set(`animeavatarpermission`, `Everyone`)
  console.log('Registered AnimeAvatar Command~')
    
  Database.set(`membercountname`, `MemberCount`)
  Database.set(`membercountcategory`, `Misc`)
  Database.set(`membercountdescription`, `Check the Member count of a Specific Server!`)
  Database.set(`membercountusage`, `[Server ID!]`)
  Database.set(`membercountexample`, `membercount`)
  Database.set(`membercountpermission`, `Everyone`)
  console.log('Registered MemberCount Command~')
    
  Database.set(`marryname`, `Marry`)
  Database.set(`marrycategory`, `Roleplay`)
  Database.set(`marrydescription`, `Marry to someone!`)
  Database.set(`marryusage`, `<Mention a user!>`)
  Database.set(`marryexample`, `marry @Zed`)
  Database.set(`marrypermission`, `Everyone`)
  console.log('Registered Marry Command~')
    
  Database.set(`divorcename`, `Divorce`)
  Database.set(`divorcecategory`, `Roleplay`)
  Database.set(`divorcedescription`, `Divorce to someone! :c`)
  Database.set(`divorceusage`, `<Mention a user!>`)
  Database.set(`divorceexample`, `divorce @Irresponsible Spouse`)
  Database.set(`divorcepermission`, `Everyone`)
  console.log('Registered Divorce Command~')
   
  Database.set(`setchatchannelname`, `SetChatChannel`)
  Database.set(`setchatchannelcategory`, `Administration`)
  Database.set(`setchatchanneldescription`, `Enable the chat system and fun talk with me!`)
  Database.set(`setchatchannelusage`, `<Enable #Channel | Disable>`)
  Database.set(`setchatchannelexample`, `enable #General`)
  Database.set(`setchatchannelpermission`, `Manage Server`)
  console.log('Registered SetChatChannel Command~')
    
  Database.set(`rolesname`, `Roles`)
  Database.set(`rolescategory`, `Misc`)
  Database.set(`rolesdescription`, `Shows list of roles of the server!`)
  Database.set(`rolesusage`, `None!`)
  Database.set(`rolesexample`, `roles`)
  Database.set(`rolespermission`, `Everyone`)
  console.log('Registered Roles Command~')
    
  Database.set(`channelsname`, `Channels`)
  Database.set(`channelscategory`, `Misc`)
  Database.set(`channelsdescription`, `Shows list of channels of the server!`)
  Database.set(`channelsusage`, `None!`)
  Database.set(`channelsexample`, `channels`)
  Database.set(`channelspermission`, `Everyone`)
  console.log('Registered Channels Command~')
    
  Database.set(`autopingname`, `AutoPing`)
  Database.set(`autopingcategory`, `Admin`)
  Database.set(`autopingdescription`, `The bot will ping the member just joined and delete it rightaway!`)
  Database.set(`autopingusage`, `<Enable <#Channel> | Disable>`)
  Database.set(`autopingexample`, `autoping enable #General`)
  Database.set(`autopingpermission`, `Manage Server`)
  console.log('Registered AutoPing Command~')
    
  Database.set(`emojisname`, `Emojis`)
  Database.set(`emojiscategory`, `Misc`)
  Database.set(`emojisdescription`, `Lists all emojis in the server!`)
  Database.set(`emojisusage`, `None!`)
  Database.set(`emojisexample`, `emojis`)
  Database.set(`emojispermission`, `Everyone`)
  console.log('Registered Emojis Command~')
    
  Database.set(`infoname`, `Info`)
  Database.set(`infocategory`, `Misc`)
  Database.set(`infodescription`, `See info about me!`)
  Database.set(`infousage`, `None!`)
  Database.set(`infoexample`, `info`)
  Database.set(`infopermission`, `Everyone`)
  console.log('Registered Info Command~')
    
  Database.set(`roleinfoname`, `RoleInfo`)
  Database.set(`roleinfocategory`, `Misc`)
  Database.set(`roleinfodescription`, `Shows info about specific role!`)
  Database.set(`roleinfousage`, `<Mention a role!>`)
  Database.set(`roleinfoexample`, `roleinfo @Staff`)
  Database.set(`roleinfopermission`, `Everyone`)
  console.log('Registered RoleInfo Command~')
    
  Database.set(`nekoname`, `Neko`)
  Database.set(`nekocategory`, `Anime`)
  Database.set(`nekodescription`, `Sends a random SFW Neko!`)
  Database.set(`nekousage`, `None!`)
  Database.set(`nekoexample`, `neko`)
  Database.set(`nekopermission`, `Everyone`)
  console.log('Registered Neko Command~')
    
  Database.set(`animebgname`, `AnimeBg`)
  Database.set(`animebgcategory`, `Anime`)
  Database.set(`animebgdescription`, `Sends a random SFW pc Wallpaper/Background!`)
  Database.set(`animebgusage`, `None!`)
  Database.set(`animebgexample`, `animebg`)
  Database.set(`animebgpermission`, `Everyone`)
  console.log('Registered AnimeBg Command~')
    
  Database.set(`animemobilebgname`, `AnimeMobileBg`)
  Database.set(`animemobilebgcategory`, `Anime`)
  Database.set(`animemobilebgdescription`, `Sends a random SFW Mobile Wallpaper/Background!`)
  Database.set(`animemobilebgusage`, `None!`)
  Database.set(`animemobilebgexample`, `animemobilebg`)
  Database.set(`animemobilebgpermission`, `Everyone`)
  console.log('Registered AnimeMobileBg Command~')
    
  Database.set(`customcmdname`, `CustomCmd`)
  Database.set(`customcmdcategory`, `Admin`)
  Database.set(`customcmddescription`, `Add or Remove a custom Command in the server!`)
  Database.set(`customcmdusage`, `<add <Custom Command Name> <Custom Command Response> | remove <Custom Command Name> | list>`)
  Database.set(`customcmdexample`, `add bestbot flandre`)
  Database.set(`customcmdpermission`, `Manage Messages`)
  console.log('Registered CustomCmd Command~')
    
  Database.set(`weathername`, `Weather`)
  Database.set(`weathercategory`, `Miscellaneous`)
  Database.set(`weatherdescription`, `Shows weather data on specific location!`)
  Database.set(`weatherusage`, `<Location!>`)
  Database.set(`weatherexample`, `weather manila`)
  Database.set(`weatherpermission`, `Everyone`)
  console.log('Registered Weather Command~')
    
  Database.set(`ranimename`, `Ranime`)
  Database.set(`ranimecategory`, `Anime`)
  Database.set(`ranimedescription`, `Sends a random Anime Image!`)
  Database.set(`ranimeusage`, `None!`)
  Database.set(`ranimeexample`, `ranime`)
  Database.set(`ranimepermission`, `Everyone`)
  console.log('Registered Ranime Command~')
    
  Database.set(`punchname`, `Punch`)
  Database.set(`punchcategory`, `Roleplay`)
  Database.set(`punchdescription`, `Punch Someone or just yourself!`)
  Database.set(`punchusage`, `[Mention a user]`)
  Database.set(`punchexample`, `punch @Zed`)
  Database.set(`punchpermission`, `Everyone`)
  console.log('Registered Punch Command~')
    
  Database.set(`nekogifname`, `NekoGIF`)
  Database.set(`nekogifcategory`, `Anime`)
  Database.set(`nekogifdescription`, `Sends a random Neko Gif!`)
  Database.set(`nekogifusage`, `None!`)
  Database.set(`nekogifexample`, `nekogif`)
  Database.set(`nekogifpermission`, `Everyone`)
  console.log('Registered NekoGIF Command~')
    
  Database.set(`racharactername`, `Racharacter`)
  Database.set(`racharactercategory`, `Anime`)
  Database.set(`racharacterdescription`, `Sends a random Anime Character!`)
  Database.set(`racharacterusage`, `None!`)
  Database.set(`racharacterexample`, `racharacter`)
  Database.set(`racharacterpermission`, `Everyone`)
  console.log('Registered Rcharacter Command~')
    
  Database.set(`raquotename`, `Raquote`)
  Database.set(`raquotecategory`, `Anime`)
  Database.set(`raquotedescription`, `Sends a random anime quote!`)
  Database.set(`raquoteusage`, `None!`)
  Database.set(`raquoteexample`, `raquote`)
  Database.set(`raquotepermission`, `Everyone`)
  console.log('Registered Raquote Command~')
    
  Database.set(`rafactname`, `Rafact`)
  Database.set(`rafactcategory`, `Anime`)
  Database.set(`rafactdescription`, `Sends a random Anime Facts!`)
  Database.set(`rafactusage`, `None!`)
  Database.set(`rafactexample`, `rafact`)
  Database.set(`rafactpermission`, `Everyone`)
  console.log('Registered Rafact Command~')
    
  Database.set(`nervousname`, `Nervous`)
  Database.set(`nervouscategory`, `Roleplay`)
  Database.set(`nervousdescription`, `Nervous at Someone or just yourself!`)
  Database.set(`nervoususage`, `[Mention a user]`)
  Database.set(`nervousexample`, `nervous @Zed`)
  Database.set(`nervouspermission`, `Everyone`)
  console.log('Registered Nervous Command~')
    
  Database.set(`happyname`, `Happy`)
  Database.set(`happycategory`, `Roleplay`)
  Database.set(`happydescription`, `Happy with Someone or just yourself!`)
  Database.set(`happyusage`, `[Mention a user]`)
  Database.set(`happyexample`, `happy @Zed`)
  Database.set(`happypermission`, `Everyone`)
  console.log('Registered Happy Command~')
    
  Database.set(`runname`, `Run`)
  Database.set(`runcategory`, `Roleplay`)
  Database.set(`rundescription`, `Run to Someone or just yourself!`)
  Database.set(`runusage`, `[Mention a user]`)
  Database.set(`runexample`, `run @Zed`)
  Database.set(`runpermission`, `Everyone`)
  console.log('Registered Run Command~')
    
  Database.set(`dancename`, `Dance`)
  Database.set(`dancecategory`, `Roleplay`)
  Database.set(`dancedescription`, `Dance with Someone or just yourself!`)
  Database.set(`danceusage`, `[Mention a user]`)
  Database.set(`danceexample`, `dance @Zed`)
  Database.set(`dancepermission`, `Everyone`)
  console.log('Registered Dance Command~')
    
  Database.set(`poutname`, `Pout`)
  Database.set(`poutcategory`, `Roleplay`)
  Database.set(`poutdescription`, `Pout at Someone or just yourself!`)
  Database.set(`poutusage`, `[Mention a user]`)
  Database.set(`poutexample`, `pout @Zed`)
  Database.set(`poutpermission`, `Everyone`)
  console.log('Registered Pout Command~')
    
  Database.set(`highfivename`, `Highfive`)
  Database.set(`highfivecategory`, `Roleplay`)
  Database.set(`highfivedescription`, `Highfive at Someone or just yourself!`)
  Database.set(`highfiveusage`, `[Mention a user]`)
  Database.set(`highfiveexample`, `highfive @Zed`)
  Database.set(`highfivepermission`, `Everyone`)
  console.log('Registered Highfive Command~')
    
  Database.set(`cringename`, `Cringed`)
  Database.set(`cringecategory`, `Roleplay`)
  Database.set(`cringedescription`, `Cringed at Someone or just yourself!`)
  Database.set(`cringeusage`, `[Mention a user]`)
  Database.set(`cringeexample`, `cringe @Soft`)
  Database.set(`cringepermission`, `Everyone`)
  console.log('Registered Cringe Command~')
    
  Database.set(`bullyname`, `Bully`)
  Database.set(`bullycategory`, `Roleplay`)
  Database.set(`bullydescription`, `Bully Someone or just yourself!`)
  Database.set(`bullyusage`, `[Mention a user]`)
  Database.set(`bullyexample`, `bully @Zed`)
  Database.set(`bullypermission`, `Everyone`)
  console.log('Registered Bully Command~')
    
  Database.set(`glompname`, `Glomp`)
  Database.set(`glompcategory`, `Roleplay`)
  Database.set(`glompdescription`, `Glomp to Someone or just yourself!`)
  Database.set(`glompusage`, `[Mention a user]`)
  Database.set(`glompexample`, `glomp @Zed`)
  Database.set(`glomppermission`, `Everyone`)
  console.log('Registered Glomp Command~')
    
  Database.set(`handholdname`, `Handhold`)
  Database.set(`handholdcategory`, `Roleplay`)
  Database.set(`handholddescription`, `Handhold with Someone or just yourself!`)
  Database.set(`handholdusage`, `[Mention a user]`)
  Database.set(`handholdexample`, `handhold @Zed`)
  Database.set(`handholdpermission`, `Everyone`)
  console.log('Registered Handhold Command~')
    
  Database.set(`smilename`, `Smile`)
  Database.set(`smilecategory`, `Roleplay`)
  Database.set(`smiledescription`, `Smile at Someone or just yourself!`)
  Database.set(`smileusage`, `[Mention a user]`)
  Database.set(`smileexample`, `smile @Zed`)
  Database.set(`smilepermission`, `Everyone`)
  console.log('Registered Smile Command~')
    
  Database.set(`bonkname`, `Bonk`)
  Database.set(`bonkcategory`, `Roleplay`)
  Database.set(`bonkdescription`, `Bonk Someone or just yourself!`)
  Database.set(`bonkusage`, `[Mention a user]`)
  Database.set(`bonkexample`, `bonk @Zed`)
  Database.set(`bonkpermission`, `Everyone`)
  console.log('Registered Bonk Command~')
}
module.exports = DatabaseCommands;
