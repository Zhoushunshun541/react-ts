/*
 * @Author: 周顺顺
 */
import io from 'socket.io-client';
const socket = io.io('http://a.itying.com?roomid=a001');
export default socket;
console.log(123);
