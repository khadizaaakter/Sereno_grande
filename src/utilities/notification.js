import { notification } from "ant-design-vue";

export const showNotification = (type, message) => {
  notification[type]({
    message: message,
    duration: 1.5,
  });
};

// export const getToken = () => {
//     return {
//         headers: {
//             Authorization: `Bearer ${Cookies.get("token")}`,
//         },
//     };
// };