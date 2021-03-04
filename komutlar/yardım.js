const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
  
let yardım = new Discord.RichEmbed()  
.setColor("#FFCC00")
.setImage('https://cdn.discordapp.com/attachments/697505578972348436/759500251241119774/anime_couple_hug.gif')
.setTitle('** PloweS Bot** - Müzik Menüsü')
.setDescription(
`
<:yldz:760117900354256907>**açal** - Müzik Dinlersiniz
<:yldz:760117900354256907>**ases** - Müziğin Sesin Ayarlarsınız
<:yldz:760117900354256907>**ageç** - Sıradaki Şarkıya Geçersiniz
<:yldz:760117900354256907>**açalan** - Özel Eklenti Komutlarını Açar
<:yldz:760117900354256907>**adevam** - Şarkıyı Devem Ettirirsiniz
<:yldz:760117900354256907>**asıra** - Kuyruğu Görürsünüz
<:yldz:760117900354256907>**akapa**t - Çalan Sarkıyı Kapatır`)
.setTimestamp()
.setFooter(client.user.username, client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["music","mc"], 
  permLevel: 0
};
exports.help = {
  name: 'müzik'
}; 