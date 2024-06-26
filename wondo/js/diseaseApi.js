export default function diseaseApi(dissCd, znCd='') {
  const url = 'https://apis.data.go.kr/B550928/dissForecastInfoSvc/getDissForecastInfo'; /*URL*/
  let queryParams = '?' + encodeURIComponent('serviceKey') + '=' + "0osPSL6ycDPUaQPjoTOvZ%2BCHeLmN1jzoHKlx8v5Ty%2BQMQIa4g%2BC9pRJCnLp%2BQzVCu5NMlqVHw0qqN8RPTArZHA%3D%3D"; /*Service Key*/
  queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('17'); /*한 페이지 결과 수*/
  queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /*페이지 번호, 미입력 시 기본값 1*/
  queryParams += '&' + encodeURIComponent('type') + '=' + encodeURIComponent('json'); /*응답결과의 출력 방식(xml, json), 미입력시 기본값:xml*/
  queryParams += '&' + encodeURIComponent('dissCd') + '=' + encodeURIComponent(dissCd); /*질병코드 필수*/
  queryParams += '&' + encodeURIComponent('znCd') + '=' + encodeURIComponent(znCd); /*지역코드*/
  return url + queryParams
}