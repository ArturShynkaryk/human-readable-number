module.exports = function toReadable (number) {
    const numToWords = [
        'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
      ];
    
      const tensToWords = [
        '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
      ];
    
      if (number < 20) {
        return numToWords[number];
      } else if (number < 100) {
        const tens = Math.floor(number / 10);
        const units = number % 10;
        return tensToWords[tens] + (units !== 0 ? ' ' + numToWords[units] : '');
      } else if (number < 1000) {
        const hundreds = Math.floor(number / 100);
        const remainder = number % 100;
        return (
          numToWords[hundreds] + ' hundred' + (remainder !== 0 ? ' ' + toReadable(remainder) : '')
        );
      } else {
        return 'Number is out of range'; 
      }
    }
    

