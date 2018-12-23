//函数防抖
//定义：多次触发事件后，事件处理函数只执行一次，并且是在触发操作结束时执行。
//原理：对处理函数进行延时操作，若设定的延时到来之前，再次触发事件，则清除上一次的延时操作定时器，重新定时。
/**
 * 防抖函数
 * @param method 事件触发的操作
 * @param delay 多少毫秒内连续触发事件，不会执行
 * @returns {Function}
 */
export const debounce = (method, delay)=> {
	let timer = null;
	let self = this;
	return function() {
		let args = arguments;
		timer && clearTimeout(timer);
		timer = setTimeout(function() {
			method.apply(self, args);
		}, delay)
	}
}