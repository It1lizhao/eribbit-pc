import request from '@/utils/request'

/**
 * @param {Integer} limit - 品牌数
 * 获取品牌
 */
export const findBrand = (limit) => {
  return request('/home/brand', 'get', { limit })
}

/**
 * 获取广告图
 * @returns Promise
 */
export const findBanner = () => {
  return request('/home/banner', 'get')
}

/**
 * 获取新鲜好物数据
 * @returns Promise
 */
export const findNew = () => {
  return request('home/new', 'get')
}
/**
 * 获取人气推荐
 * @returns Promise
 */
export const findHot = () => {
  return request('home/hot', 'get')
}

/**
 * 获取商品区块数据
 * @returns Promise
 */
export const findGoods = () => {
  return request('home/goods', 'get')
}

/**
 * 获取最新专题
 * @returns Promise
 */
export const findSpecial = () => {
  return request('home/special', 'get')
}
