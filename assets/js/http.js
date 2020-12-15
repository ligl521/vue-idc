
function axiosPostRequst(url,data) {
  let result = axios({
      method: 'post',
      url: url,
      data: data,
      transformRequest:[function(data){
          let ret = data;
          return ret;
      }]
  }).then(resp=> {
      return resp.data;
  }).catch(error=>{
      return "exception="+error;
  });
  return result;
}

//get请求
function axiosGetRequst(url) {
  var result = axios({
      method: 'get',
      url: url
  }).then(function (resp) {
      return resp.data;
  }).catch(function (error) {
      return "exception=" + error;
  });
  return result;
}