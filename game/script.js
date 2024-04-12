document.addEventListener('DOMContentLoaded', function() {  

    const mapArea = document.getElementById('map-area');  

    const dialogArea = document.getElementById('dialog-area');  // 获取对话框的元素

    const dialogText = document.getElementById('dialog-text');  

    const continueButton = document.getElementById('continue-button');  

    const dialogs = [  
        [  
            { text: '李明漫步在南头老街，忽然听到一位老人的呼唤：“小伙子，对这些老房子感兴趣吗？”他转身，看到了满脸慈祥的张大娘。' },  
            { text: '张大娘：“这些建筑啊，可是我年轻时的记忆。那时候，这里繁华得很，每家每户都热闹非凡。我跟你说，这栋建筑啊，以前是个茶馆，我经常和我老伴儿来这里喝茶聊天。”' },
            { text: '李明：“真的吗？那您能不能多给我讲讲这些建筑的故事？”' },
            { text: '张大娘微笑着，仿佛陷入了回忆：“小伙子，你可真问对了人。你知道吗，这些建筑可不是随便建起来的，它们背后都有一段段鲜为人知的故事呢。“' },
            { text: '“你应该知道了这些建筑的风格有个很洋气的名字，叫巴洛克吧。”' },
            { text: '“巴洛克，那可是17世纪意大利兴起的艺术风格，豪华而富有激情，色彩浓烈，装修富丽，雕刻细腻。那时候，哈尔滨因为中东铁路的修建和松花江的通航，吸引了大批外国人和外国资本。南岗区和道里区，那些地方都成了沙俄的附属地，城市建设就热闹起来了。”' },
            { text: '“这些建筑啊，就像那些穿着华丽礼服的舞者，在哈尔滨的街头跳起了热烈的舞蹈。那时候的民族资本家们，看着对面的西式建筑那么华丽，心里也痒痒的，于是他们也照搬起来，不过啊，他们没忘本，在建筑上加上了一些中国传统特色的饰物，蝙蝠、石榴、金蟾、牡丹，这些吉祥的图案都出现了。”' },
            { text: '“这些建筑啊，就像那些穿着华丽礼服的舞者，在哈尔滨的街头跳起了热烈的舞蹈。那时候的民族资本家们，看着对面的西式建筑那么华丽，心里也痒痒的，于是他们也照搬起来，不过啊，他们没忘本，在建筑上加上了一些中国传统特色的饰物，蝙蝠、石榴、金蟾、牡丹，这些吉祥的图案都出现了。”' },
            { text: '“就这样，巴洛克建筑和我们中国的文化融合在了一起，形成了那种独特的“中华巴洛克”风格。你看那些建筑，是不是既有西方的华丽，又有东方的韵味？这就是历史的魅力啊，不同文化在这里交融，碰撞出了新的火花。”' },
            { text: '“小伙子，你如果真的对这些建筑感兴趣，就应该多走走，多看看。每一处建筑，都有它自己的故事，等待你去发现。你不仅仅是在看建筑，更是在读一本关于哈尔滨，关于中国与世界文化交融的历史书呢”' },
            { text: '李明听得入了迷，他没想到这些看似普通的建筑，背后竟然藏着这么深厚的历史和文化。他决定，一定要深入了解这些建筑，感受它们所承载的历史和文化。' },
        
        ],
        [  
            { text: '在图书馆，李明偶遇了正在研究哈尔滨历史的李教授。' },  
            { text: '李教授：“小伙子，你对这些中华巴洛克建筑感兴趣？我可是研究它们好多年了。”' },
            { text: '李明：“是的，教授。我一直觉得这些建筑很有特色，但又不完全了解它们的历史。”' },
            { text: '李教授：“这些建筑可是中西文化的完美融合。你看这座，它的外观是巴洛克风格，但内部结构和装饰却充满了中国元素。而且，每座建筑背后都有一段鲜为人知的历史。”' },
            { text: '李明：“那您能不能告诉我更多关于这些建筑的故事？”' },
            { text: '李教授：“‘巴洛克’是17世纪意大利兴起的艺术风格，它的建筑豪华而富有激情，具有浓郁的浪漫主义色彩。其色彩浓烈，装修富丽，雕刻细腻，被公认为欧洲伟大的建筑风格之一。“' },
            { text: '”特点是外形自由、色彩强烈、追求动态、喜好富丽的装饰和雕刻，常常采用穿插的曲面和椭圆形空间。“' },
            { text: '”这一风格对城市广场、园林艺术以至文学艺术领域都发生影响，一度风靡欧洲。“' },
            { text: '”至于这一风格是如何传播到中国的，小伙子，你可以去问问居住在南头街道的张老太太，她是亲身经历者，对此更有发言权...”' },

        ],
        [  
            { text: '在一次建筑展览上，李明结识了退休的建筑师王先生。' },  
            { text: '王建筑师：“小伙子，你对这些建筑挺感兴趣的啊。”' },
            { text: '李明：“是的，王先生。我一直很佩服您这些老一辈的建筑师，能设计出这么独特的建筑。”' },
            { text: '王建筑师：“哈哈，过奖了。其实，这些建筑的设计并不容易。我们要考虑很多因素，比如地形、气候、文化等。而且，每座建筑都是我们的心血，都希望它们能成为这座城市的骄傲。”' },
            { text: '李明：“那您能不能告诉我，设计这些建筑时有什么特别的想法或者灵感吗？”' },
            { text: '李明：“和谐共存，这正是中华巴洛克风格的精髓所在吧。”' },
            { text: '王建筑师：“当然有啊。比如这座建筑，它的设计灵感就来源于中国传统的四合院和西方的巴洛克风格。我希望通过它，能让人们感受到中西文化的和谐共存。”' },
            { text: '王建筑师点头赞同：“没错。中华巴洛克风格不仅融合了中西方建筑的特色，更在细节上体现了两种文化的交融。你看那些雕刻精美的图案，既有西方艺术的浪漫与华丽，又融入了中式传统元素的精致与典雅。”' },
            { text: '李明仔细回想之前见过的建筑，那些蝙蝠、石榴、金蟾、牡丹等吉祥图案与巴洛克风格的融合，确实展现了一种独特的美。他感叹道：“这样的风格真是别具一格，既保留了传统的韵味，又融入了现代的元素。”' },
            { text: '王建筑师微笑着说：“是的，中华巴洛克风格正是这种文化交融的产物。它见证了哈尔滨这座城市的变迁与发展，也承载着人们对美好生活的向往和追求。' },
            { text: '李明深受启发，他决定更加深入地研究这种独特的建筑风格。他打算阅读更多关于中华巴洛克风格的书籍和资料，参观更多的建筑实例，与更多的建筑师和专家交流。' },
           
        ],
        [  
            { text: '李明独自漫步在南二道街，沉浸在中华巴洛克风格的建筑中。突然，他被一位穿着复古服饰的女子所吸引，她手中拿着一本关于巴洛克风格的书籍，正专注地阅读着。' },  
            { text: '李明好奇地走近，轻声问道：“你也对中华巴洛克风格感兴趣吗？”' },
            { text: '女子抬起头，微微一笑，说道：“是啊，我叫林悦，一直在研究这种独特的建筑风格。我觉得它融合了中西方文化的精髓，非常具有魅力。”' },
            { text: '李明感到很高兴，终于遇到了一个与自己有共同兴趣的人。他兴奋地分享着自己对中华巴洛克风格的理解和感受，而林悦也积极地回应着，两人开始深入讨论起这些建筑的特点和故事。' },
            { text: '林悦带着李明来到了她最喜欢的一座建筑前，她指着建筑说道：“这座建筑是我最喜欢的之一，它的立面造型既有巴洛克风格的华丽，又融入了中式传统元素的典雅。每次看到它，我都会被它独特的美所吸引。”' },
            { text: '林悦微笑着说：“是啊，中华巴洛克风格就是这样独特而迷人。它不仅仅是一种建筑风格，更是一种文化的传承和创新。”' },
            { text: '两人继续漫步在老街上，一起探寻更多中华巴洛克风格的建筑。他们不仅欣赏了建筑的外观，还走进了建筑内部，感受了它们所承载的历史和文化。' },
            { text: '在与林悦的相处中，李明更加深入地了解了中华巴洛克风格，也对这种建筑风格产生了更加深厚的感情。他们成为了无话不谈的好朋友，一起探索着更多关于中华巴洛克风格的故事和文化...' },
           
        ],
        // 更多角色的对话内容...  
    ];  

    let currentCharacterIndex = null;
    let currentDialogIndex = 0;

    function showDialog(characterIndex, dialogIndex) {  
        dialogText.textContent = dialogs[characterIndex][dialogIndex].text;  
        dialogArea.style.visibility = 'visible';  // 显示对话框
    }  

    // 为每个可交互的元素添加点击事件处理器
    const interactiveItems = document.querySelectorAll('.interactive-item');
    for (let item of interactiveItems) {
        item.addEventListener('click', function() {
            currentCharacterIndex = this.getAttribute('data-character-index');
            currentDialogIndex = 0;
            showDialog(currentCharacterIndex, currentDialogIndex);
        });
    }

    continueButton.addEventListener('click', function() {  
        currentDialogIndex++;  
        if (currentCharacterIndex !== null && currentDialogIndex < dialogs[currentCharacterIndex].length) {  
            showDialog(currentCharacterIndex, currentDialogIndex);  
        } else {  
            dialogArea.style.visibility = 'hidden';  // 隐藏对话框
            currentCharacterIndex = null;
            currentDialogIndex = 0;
        }  
    });  


    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];

    document.getElementById("location1").onclick = function() {
        document.getElementById("modalImage").src = "https://oss.lcweb01.cn/jzt/2e05b04ace4811ebb626275b19279571/image/20210717/22630c149893cbf01b5dbb9f5aa8c4d5.jpeg";
        document.getElementById("modalText").innerHTML = "建筑的立面是巴洛克式建筑风格，造型宏伟，而局部的装饰图案则取材于中国传统的祈福文化元素，比如那一串串饱满的葡萄，在中国古代象征了多子多福，建筑上方的圆弧下，是一棵莲叶上托着一条鲤鱼，寓意了连年有余，中华这些都是中国传统的祈福文化元素，立面内部则是典型的中国四合院，所以，“巴洛克”是一种中西合璧的建筑风格。";
        modal.style.display = "block";
    }

    document.getElementById("location2").onclick = function() {
        document.getElementById("modalImage").src = "https://oss.lcweb01.cn/joomla/20210702/7537a7373238d847b7885e2f3d64737f.jpg";
        document.getElementById("modalText").innerHTML = "巴洛克是17世纪意大利兴起的艺术风格。<br>在历经近百年沧桑后，2007年，哈尔滨市将“中华巴洛克街区”保护更新列为重点工程项目，并对中华巴洛克建筑群地区进行修复。工程以“修旧如初”为目标，修缮建筑，并对街区环境进行改造。";
        modal.style.display = "block";
    }

    document.getElementById("location3").onclick = function() {
        document.getElementById("modalImage").src = "https://oss.lcweb01.cn/joomla/20210817/d7dd0abeee26372564bf1bfb48867588.jpg";
        document.getElementById("modalText").innerHTML = "1970年，东三省总督徐世昌为了与沙俄抗衡，在道外区设立松黑游船总署，购买轮船，开办航运，从此松花江上有了中国人自己的机械船队，徐世昌因此而成为民族英雄。这里原是徐世昌私宅。古时“应门”指房屋的正门，“世昌应”指徐世昌私宅的正门。";
        modal.style.display = "block";
    }

    document.getElementById("location4").onclick = function() {
        document.getElementById("modalImage").src = "https://oss.lcweb01.cn/joomla/20210719/7673cbda18b9f403b454c7faa7746442.JPG";
        document.getElementById("modalText").innerHTML = "这个院路是街区内的七号院落---辅合茶院，也是老道外.中华巴洛克历史文化区的又一特色院落，院落四周的淡灰色围栏与茶的意境完美结合，在这个院落内有品茶、赏茶、售茶、论茶等一切与茶相关的活动。";
        modal.style.display = "block";
    }

    document.getElementById("location5").onclick = function() {
        document.getElementById("modalImage").src = "https://oss.lcweb01.cn/joomla/20210719/45be09c1599db12bacafe9b9f264c033.JPG";
        document.getElementById("modalText").innerHTML = "该建筑建于1915年，砖混结构，中华巴洛克建筑风格，哈尔滨市二类保护建筑。建筑屋檐出挑大，窗帽及隔墙上的装饰带以自然植物为主，纹饰丰富，原为山东人吴子青创办的天丰源总店。<br>1934年吴子青病逝，此楼分块出租给成文厚书局和合发料药庄。解放后，本楼成为国营商店。改革开放后成为名流酒店用品商店。中华巴洛克二期改造中，此楼重建，但保持了原立面面貌，建筑屋檐出挑大，窗檐及隔窗上的装饰带以自然植物为主，纹饰丰富。此楼系市二类历史保护建筑。";
        modal.style.display = "block";
    }

    document.getElementById("location6").onclick = function() {
        document.getElementById("modalImage").src = "https://oss.lcweb01.cn/joomla/20210719/7397cfb83ef9ef2e732c4cc3a79b700e.JPG";
        document.getElementById("modalText").innerHTML = "“瑞聚兴”是二十世纪初由河北人王崇岳、才锡忱二人共同出资兴建的一栋二层小楼商铺，主要批发五金和杂货，1920年正式挂牌营业。后二人分业经营，小楼一分为二，才锡忱继承“瑞聚兴”以贩卖杂货为主。王崇岳在旁边另开门户创立“忠兴成”专营五金产品。自此二人分店不分心，始终互相帮持，情深义厚，成为老道外商界的佳话。";
        modal.style.display = "block";
    }

    document.getElementById("location7").onclick = function() {
        document.getElementById("modalImage").src = "https://oss.lcweb01.cn/joomla/20210719/bd7289865b37bc90357dfb01906e1adb.JPG";
        document.getElementById("modalText").innerHTML = "该建筑建于1922年，砖木结构，中华巴洛克建筑风格，哈尔滨市二类保护建筑。建筑上的装饰以植物和动物为装饰题材。顶檐出挑大，局部起拱券型，入口门洞亦为不规则拱形。建筑曾是义顺成，义顺源商号，义顺成为票号，经营汇兑和货币兑换业务，义顺源为货栈，贩卖杂货。 正是因为有票号做后盾，才使得这栋楼体的装饰元素丰富多样，美轮美负。";
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

});


