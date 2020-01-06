
const Discord = require('discord.js');

const bot = new Discord.Client();

const token = '';

bot.login(token)
bot.on('ready', () => {
    console.log('Bot rodando...')
})

bot.on("guildMemberAdd", member => {
    member.guild.channels.get('635285159716847639').send(`${member}, bem vindo ao RagnaRotico.\nAntes de mais nada leia atentamente as regras e informações gerais do server! #regras-em-gerais #informações-gerais`);
    member.send(`Bem vindo ${member.user.username}, entre em nosso grupo do WhatsApp: http://chat.whatsapp.com/invite/BmTLYaDNtsaKq8oHL6rVj3`);
    member.send('- Link para cadastro: http://registro.ragnarotico.com.br/');
    member.send('- Link para votar em nosso servidor: http://registro.ragnarotico.com.br/?module=voteforpoints');
    member.send('- Link para Download do patch Full (com data.grf): http://ragnarotico.com.br/Ragnaroticofull.rar');
    member.send('- Link para Download do patch Full (com data.grf): http://drive.google.com/file/d/1z0bjKk03WhFgIhzBtNURoAx8Yi9xK37A');
    member.send('- Link para Download do patch Light: http://ragnarotico.com.br/RagnaroticoV2.rar');
});
 
bot.on("guildMemberRemove", member => {
    member.guild.channels.get('634822141615013889').send(member.user.username + ' foi dar um rolê.');

})


bot.on('message', msg => {
    if (msg.content === '!info') {
        msg.channel.send('Servidor RagnaRotico! Full PVP 99/70 - Sem cards MVP e Miniboss.\nMais de 200 itens visuais!!!\nStaff dedicada e ativa! Qualquer dúvida chame nossa Staff.\nVeja também as regras do servidor!')
    }
})

bot.on('message', msg => {
    if (msg.content === '!links'){
        msg.channel.send('Link para o site: http://ragnarotico.com.br') 
        msg.channel.send('Link para download: http://www.ragnarotico.com.br/Ragnaroticofull.rar')
        msg.channel.send('Link para votar: http://registro.ragnarotico.com.br/?module=voteforpoints')
        msg.channel.send('Link para nosso grupo de Discord :  http://discord.gg/NabjJkM')
    }  

})

