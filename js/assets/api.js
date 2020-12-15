
// axiosPostRequst('http://cp.jekang.cn/api/indexApi/getrotation').then(result=>{
//             // console.log(result);
//             return result
//         });
var url_api = "http://cp.jekang.cn/api";
function getrotation(url,params){
  return axiosPostRequst(url_api+url,params)
}
function postGetmenu(url,params){
  return axiosPostRequst(url_api+url,params)
}
