// import SockJS from 'sockjs-client';
// import { Client } from '@stomp/stompjs';
// import { http } from './http';

// export const fetchChatRooms = async () => {
//   try {
//     const res = await http.get('/chatRooms');
//     return res;
//   } catch (err) {
//     console.error(err);
//   }
// };

// export const createChatRoom = async (title, memberId) => {
//   try {
//     const res = await http.post('/chatRooms', {
//       title: title,
//       memberId: memberId,
//     });
//     return res;
//   } catch (err) {
//     console.error(err);
//   }
// };

// // WebSocket URL
// const SOCKET_URL = import.meta.env.VITE_REACT_APP_API_URL + '/ws';

// let stompClient = null;

// // ✅ WebSocket 연결 함수 (accessToken 추가)
// export const connectWebSocket = (chatRoomId, onMessageReceived) => {
//   const socket = new SockJS(SOCKET_URL);
//   stompClient = Client.over(socket);

//   // ✅ 로컬스토리지에서 accessToken 가져오기
//   const accessToken = localStorage.getItem('accessToken');

//   stompClient.connect(
//     { Authorization: `Bearer ${accessToken}` }, // ✅ 헤더에 accessToken 추가
//     () => {
//       console.log('✅ WebSocket 연결 성공!');

//       // ✅ 메시지 구독
//       stompClient.subscribe(`/chat/${chatRoomId}`, (message) => {
//         console.log('📩 받은 메시지:', JSON.parse(message.body));
//         if (onMessageReceived) {
//           onMessageReceived(JSON.parse(message.body));
//         }
//       });
//     },
//     (error) => {
//       console.error('❌ WebSocket 연결 실패:', error);
//     }
//   );

//   stompClient.debug = () => {}; // 콘솔 로그 제거 (선택 사항)
// };

// // ✅ 메시지 전송 함수 (accessToken 포함)
// export const sendMessage = (message) => {
//   if (stompClient && stompClient.connected) {
//     const accessToken = localStorage.getItem('accessToken'); // ✅ 다시 accessToken 가져오기
//     stompClient.send(
//       '/app/chat',
//       { Authorization: `Bearer ${accessToken}` },
//       JSON.stringify(message)
//     );
//     console.log('📤 메시지 전송:', message);
//   } else {
//     console.error('❌ WebSocket이 연결되지 않았습니다!');
//   }
// };
