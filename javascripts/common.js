/*
*  @author cinbit.com
*  @date   2015-01-25
*  @email  btcinvestor@sina.com
*/

function startIntro(){
	var intro = introJs();
	intro.setOptions({
	showBullets: false,
	skipLabel: "跳过",
	nextLabel: "下一个",
	prevLabel: "上一个",
	doneLabel: '完成',
	steps: [
	  {
		element: '#step1',
		intro: "亲，欢迎来到誉通天下，下面我将为你导航哦！",
		position: 'bottom'
	  },
	  {
		element: '#step3',
		intro: '能找到这儿我猜你肯定对数字货币很感兴趣哦，但是假如你还是个菜鸟，那么注册一个比特币钱包是必须滴，只要有电子邮箱和手机就可以啦，不会英语的童鞋有<a href="tutorial.html?t=0&h=1" target="_blank">教程</a>指导啦，钱包那么多为什么要用它呀？因为小额全网线上转币不收手续费只此一家啦，一般人我不告诉他，哈哈！',
		position: 'bottom'
	  },
	  {
		element: '#step4',
		intro: '这也是一个比特币钱包，这个是中文滴，同样需要使用电子邮箱和手机注册，它的特点是存在这里的币每天给利息哦，多少都能存的也是仅此一家，不过我要提醒你不要把全部家当都存这里哦，一定要把安全放在第一位哦！',
		position: 'bottom'
	  },
	  {
		element: '#step5',
		intro: '最新的消息都会在这里公布，多留意，还会有抢红包的信息发布哦！',
		position: 'bottom'
	  },
	  {
		element: '#btcprice',
		intro: '这里显示的是比特币的最新价格，仔细看，价格是实时刷新的哦，方便吧？',
		position: 'bottom'
	  },
	  {
		element: '#view1',
		intro: "这里全部都是能免费得到比特币或者其它数字货币的站点，再也不用为抢不到红包而捉急啦，分分钟都能进账，点到不想点的赶脚有木有？",
		position: 'top'
	  },
	  {
		element: '#p0tt',
		intro: '点击这里打开网站，同时倒计时开始。',
//		position: 'top'
	  },
	  {
		element: '#p0tm',
		intro: '站点太多点了几个过了多久记不过来呀，有了倒计时再也不用瞎费功夫啦，到零就又可以点啦。',
//		position: 'top'
	  },
	  {
		element: '#p0up',
		intro: '这个站点我喜欢，可以把排名提前点，个性化定制哦！'
	  },
	  {
		element: '#p0dw',
		intro: '这个站点往后站，老子忙起来就没工夫搭理你了，就是这么任性！'
	  },
	  {
		element: '#p0hp',
		intro: '这个站点怎么玩啊？都是鸟语！点点帮助看看。'
	  },
	  {
		element: '#p0rs',
		intro: '哎呀，网速不给力，操作完计时不准了怎么办？可以重新倒计时哦。',
//		position: 'top'
	  },
	  {
		element: '#step6',
		intro: '点累了，去别的站溜达溜达，嘿嘿。友情链接请呼我！',
		position: 'top'
	  },
	  {
		element: '#step7',
		intro: '土豪，给这个地址打点比特币吧，点一下可以拷贝地址，你看我想的周到不？',
		position: 'top'
	  }
	]
  });

//  intro.start().oncomplete(function(){jumpurl()});;
  intro.start();
}