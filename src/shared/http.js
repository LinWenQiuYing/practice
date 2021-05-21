import axios from 'axios'

// export function request(config) {
//   const http = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })

//   return http(config)
// }

const http = axios.create({
  baseURL: 'http://123.207.32.32:8000',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
  timeout: 5000,
});

http.interceptors.request.use((config) => { // 拦截器 请求拦截
  // 1.可以对congif中的信息进行处理
  // 2.可以在请求前添加加载图标，表示正在请求，可以在 响应拦截 里关闭图标
  return config; 
}, err => { // 请求失败
  console.log(err)
});

http.interceptors.response.use((response) => { // 拦截器 响应拦截
  if(response && response.data){
    return {
      data: response.data,
      header: response.headers,
    };
  }
  return response;
}, err => { // 响应失败
  return Promise.reject(err);
});

export { http }

// axios({
//   url: 'http://123.207.32.32:8000/home/multidata'
// }).then(res => {
//   console.log(res)
// })