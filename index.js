const { Client, RichEmbed} = require('discord.js');
const bot = new Client();

const token = "NjczNTg0MzAyNTEyMDEzMzEz.XjmqwA.s_hZy-1MOm0cfYH4afo2XbpEPrY";

const PREFIX = "-";

bot.on('ready', ()=>{
    console.log("The bot is active and ready to go!");
    bot.user.setActivity('in The Bulgarian Hood | -help (made by M.S.4)', { type: 'PLAYING'}).catch(console.error);
});

bot.on('guildMemberAdd', member =>{
     
    const channel = member.guild.channels.find(channel => channel.name === "👋добре-дошли");
    if(!channel) return;

    channel.send(`Добре дошъл, ${member} в The Bulgarian Hood преди да влезеш в сървъра прочети правилата!`)
    

});


bot.on('message', message =>{
    let args = message.content.substring(PREFIX.length).split(" ");

        switch(args[0]){

            case "poll":
                const Embed = new RichEmbed()
                .setColor(0xFFC300)
                .setTitle("Initiate Poll")
                .setDescription("-poll to initiate a simple yes or no poll");
                
                if(!args[1]){
                    message.channel.send(Embed);
                    break;
                }

                let msgArgs = args.slice(1).join(" ");

                message.channel.send("📋 " + "**" + msgArgs + "**").then(messageReaction => {
                    messageReaction.react("✅");
                    messageReaction.react("⛔");
                    message.delete(1).catch(console.error);
                });

            break;
        }

});


   bot.on('message', message =>{
       let args = message.content.substring(PREFIX.length).split(" ");
            switch (args[0]) {
                case 'help':
                    const Embed = new RichEmbed()
                    .setTitle("Helper")
                    .setColor(0xFF0000)
                    .setDescription("Здравей трябва ти помощ свързана със сървъра? Тогава пиши на някой от **Staff-a**");

                    message.author.send(Embed);
                break;
            }
   });    



                    bot.on('message', message => {
                        let args = message.content.substring(PREFIX.length).split(" ");
                        switch (args[0]) {
                            case 'ip':
                                message.channel.send("**92.42.44.71:30424**");
                        }
                    });



                        bot.on('message', message =>{
                            let args = message.content.substring(PREFIX.length).split(" ");
                                switch (args[0]) {
                                    case 'rules':
                                    const Embed = new RichEmbed()
                                    .setTitle("Правила")
                                    .setColor(0X5900FF)
                                    .addField("**1.Забранява се POWERGAMING**", "**Нещо което не може да се случи в иситнския живот**")
                                    .addField("**2.Забранява се METAGAMING**", "**Използване на извън ролеви знания в RP**")
                                    .addField("**3.Забранява се COPBATING-a**", "**Наказание  30 мин затвор**")
                                    .addField("**4.Забранява се RDM(Random Death Match**", "**Да убиеш някой без причина**")
                                    .addField("**5.Забранява се VDM(Vehicle Deathmatch**", "**Да убиеш някой с кола без причина**")
                                    .addField("**6.Забранява се SUICIDE RP**", "**Когато е по-добре за теб да се самоубиеш отколкото да продължиш RP ситуацията**")
                                    .addField("**7.Забранява се в Vigilante RP**", "**Да помагаш на полицията в някои моменти**")
                                    .addField("**8.Забранено е Rambo Behaviour**", "**Да насочиш оръжие когато вече са ти насочили такова**")
                                    .addField("**9.Забранява се напускането от RP**", "**Види ли се от някой админ или някой го е заснел ще има наказание**")
                                    .addField("**10.Забравнява се ролплайване като  HITMAN**", "**Да работиш като наемен убиец**") 
                                    .addField("**11.Когате отвличате някой трябва да има ПОНЕ 2 полицаи на смяна!**", "**Ако не е изпълнено условието никой няма да ви обърне внимание**")
                                    .addField("**12.При обир на банка трябва да има 5 полицай на смяна!**", "**Ако полицая ви каже да спрете обира вие го спирате!**")
                                    .addField("**13.При обир на най-голямата банка (pacific) имате право да сте 7 човека с 3 заложника!**", "**Трябва да има 6 полицая на смяна!**")
                                    .addField("**14.При обир на магазин имате право на 1 заложник и 2 които обират магазина.**", "**Минимум 2 полицаи на смяна!**")
                                    
                                    message.channel.send(Embed);
                                    message.delete(1).catch(console.error);
                                }
                                
                            });  
                            bot.on('message', message =>{
                                let args = message.content.substring(PREFIX.length).split(" ");
                                    switch (args[0]) {
                                        case 'rules1':
                                        const Embed = new RichEmbed()
                                        .setTitle("Правила")
                                        .setColor(0X5900FF)
                                        .addField("**15.САМО Мафия/Ганг могат да loot-ват хората**", "**Ако не сте Мафия или Ганг му връщате нещата**")
                                        .addField("**16.ЗАБРАНЯВА СЕ loot-ването на Полицай/Медик**", "**Връщате нещата ако го направите**")
                                        .addField("**17.ЗАДЛЪЖИТЕЛНО трябва да имате МИКРОФОН**", "**Ако нямате ще бъдете наказан**")
                                        .addField("**18.PUSH TO TALK задължително**", "**Иначе ще има наказание**")
                                        .addField("**19.На работа трябва да караш твоят служебен автомобил!**", "**В противен случай ще получите солена глоба**")
                                        .addField("**20.Забранено е да се вика в Микрофона!**", "**Освен ако не сте в RP ситуация**")
                                        .addField("**21.Забранено е излизането от RP освен при Админ ситуация!**", "**Може да получите Warn**")
                                        .addField("**22.Забранява се Дисреспект към Стафа!**", "**Стафа не взима страна той преценява и вие нямате право да не уважате неговота преценка**")
                                        .addField("**23.Имате право на макс 150000лв при откуп!**", "**Ако поискате повече полицайте ще ви дадат 20000**")
                                        .addField("**24.Използването на елктрошок имат право само полицаите и медиците**", "**И то само при самозащита**")
                                        .addField("**25.Забранено е говорите докото сте мъртав**", "**Вместо това използвайте /me Пример /me Има пулс!**")
                                        .addField("**26.След като умрете не помните кой ви е убил!**", "**Препоръчително е след като умрете да си направите нова самоличност**")
                                        .addField("**27.Убиването на полицай / медик без причина е забранено.**", "**Позволено е само ако го изисква самата RP ситуация**")
                                        .addField("**28.Напълно се толерира задаването на въпроси към STAFFA**",  "**При неясноти по правилата или по някой термин**")
                                        message.channel.send(Embed);
                                        message.delete(1).catch(console.error);
                                    }
                                });


bot.login(token);