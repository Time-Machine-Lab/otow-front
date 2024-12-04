import request from '@/util/request';

// 查询项目信息
export async function searchProject(page: number=1, limit: number=10,cmd: number=2,name?: string):Promise<any>{
    try {
        const response = await request({
            url: '/search',
            method: "post",
            params: {
                page:page,
                limit:limit,
                cmd: cmd, //查询类型:1、按时间排序 2、按下载量排序 3、搜索名称
                name: name
            }
        })
        return response;
    } catch (error) {
        console.error('查询项目请求失败：', error);
    }
}