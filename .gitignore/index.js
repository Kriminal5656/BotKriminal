const Discord = require('discord.js')
const Google = require('./commands/Google')

var bot = new Discord.Client()
var prefix = ('/')
var randnum = 0

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: 'Kriminal is the best dev', type: 0} })
})


bot.login('MzkzOTg1MTc1ODc4MzY5Mjg0.DR95gg.Qp-ZGkZ8cxSZC9TqF_RQkEXYXjQ')

bot.on('guildMemberAdd', function (member) {
    member.createDM().then(function (channel) {
        return channel.send('Bienvenue sûr notres serveur Discord !' + member.displayName);
    }).catch(console.error)
})

    bot.on('message', function (message) {
        Google.parse(message)
    if (message.content === "Kriminal ?"){
("Tu veux donc parler avec la légende ? pauvre fou vas !")
        console.log(' Tu veux donc parler avec la légende ? pauvre fou vas !')
    }

    if (message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
            .setColor('#0020F2')
            .addField("Commande du bot !", "   - /Google (Nom de ce que vous rechercher) : Recherche sur le web \n - \n - \n -")

            message.channel.sendMessage(help_embed)
            //Message.channel.senMessage("ok")
            console.log("Commande Help demandée !")
            
    }

})
