import request from '@/utils/request'
// 定义获取商品详情API函数
/**
 * 获取商品详情
 * @param {String} id - 商品ID
 */
export const findGoods = (id) => {
  return request('/goods', 'get', { id })
}
