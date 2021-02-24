// import Vue from 'vue'
// import VConsole from 'vconsole'
// const vConsole = new VConsole()
// Vue.use(vConsole)

// new VConsole();

// import moment from 'moment'

console.log('hello world')

console.log('window.plus', window.plus)

function plusReady() {
	// 在这里调用plus api

	// console.log("所有plus api都应该在此事件发生后调用，否则会出现plus is undefined。")
	console.log('window.plus 22222222222', window.plus)


	var nw = plus.webview.create('http://www.baidu.com');
	// var nw = plus.webview.create('https://uniswap.token.im/');
	// var nw = plus.webview.create('http://122.228.226.124:3000/');


	// // nw.appendJsFile('./preload.js');
	nw.show();

	// console.log('window.web3', window.web3)

	// plus.navigator.setStatusBarBackground('#ffffff');
	// plus.navigator.setStatusBarStyle('dark');
	// plus.webview.currentWebview().setStyle({
	// statusbar: {
	// background: '#ffffff'
	// },
	// top: 0,
	// bottom: 0
	// });
}
if (window.plus) {
	plusReady();
} else {
	console.log('addEventListener')
	document.addEventListener('plusready', plusReady, false);
}
