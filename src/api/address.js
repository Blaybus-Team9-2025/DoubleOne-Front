import { http } from './http';

// 시 입력 -> 구 조회
export const getDistrict = async (cityName) => {
  try {
    console.log('cityName', cityName);
    const res = await http.get(`/address/city/${cityName}`);
    return res;
  } catch (err) {
    console.log(err);
  }
};

// 구 입력 -> 동 조회
export const getNeighborhood = async (districtName) => {
  try {
    console.log('districtname', districtName);
    const res = await http.get(`/address/district/${districtName}`);
    return res;
  } catch (err) {
    console.log(err);
  }
};
