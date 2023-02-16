import request from '@/utils/request'

/**
 * @param {Integer} limit - 品牌数
 * 获取品牌
 */
export const findBrand = (limit) => {
  return request('/home/brand', 'get', { limit })
}
