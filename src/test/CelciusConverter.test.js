import {convertToCelcius} from './../helpers/celciusConverter';

describe('convertToCelcius', () => {
   
  it('should convert fahrenheit to celsius', () => {
      let celciusValue = convertToCelcius(320)
      expect(celciusValue).toEqual(46.85000000000002)
  })
  
})