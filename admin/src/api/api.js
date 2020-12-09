import {post,get} from './http'

// home轮播图
export const postGetrotation = p => post('/indexApi/getrotation', p);

// export const postGetrotation = p => post('index/get_seven_days_list.do', p);
