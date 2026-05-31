const name=["胡友敏","钟旭杰","邓志鑫","邓宜镇","麻楚琪","谭紫欣","吴慧婷","孙思敏","范浩翔","谢卓衡","陈梓豪","黄恩慈","冼铭豪","侯紫瀚","王家健","张奕霖","张哲睿","伍紫萱","韩诗嘉","陈泊熹","何子柔","钟敏彤","刘舒玮","高铭灿","张家俊","陈懿","张培琳","段银玥","连序锐","林凤","贺子诺","李昇桦","陈浩轩","彭俊迪","梁钰儿","陈俊熙","祝炜容","谭力天","刘泽明","路博文","梁丽钰","陈成","罗子雅","李鑫","林奕桦","梁绮琳","黄瑾","赖沂静","罗翊元","曾钰恒","姚梓涵","卢昱霖","蒙烨媛","韦森美","Li.Ho"];
const star=[5,5,3,3,3,3,5,5,4,5,3,5,4,3,3,5,3,3,3,3,5,5,5,5,3,3,4,5,4,5,4,5,3,3,3,3,3,3,3,4,3,5,3,3,3,3,3,3,5,5,3,3,3,3,5];
const maxHistory = 10;
const version = 4;
//配置文件编辑器：
// https://kdxhub.github.io/random_name_picker/comfig-spawn.html
// 根目录下config-spawn.html
function DisableStart(Reazon){document.getElementById('main-loadedList').innerHTML=Reazon;document.getElementById('start').disabled=true;document.getElementById('startButtonTips').innerHTML="引擎故障…";document.getElementById('startGuidancePrompt').innerHTML="请联系管理员/电教委以获取支持"};console.log("name长度="+name.length);console.log("star长度="+star.length);document.getElementById('main-loadedList').innerHTML="共计"+name.length+"名幸运儿，抽取概率均等";if(star.length!=name.length){DisableStart("E04.部署错误。数组「name」与「star」长度不等。")};if(star.length<=10){DisableStart("E05.部署错误。待选项太少（"+star.length+"项）<br>至少需要11项。")};configLoaded();