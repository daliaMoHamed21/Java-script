function mergeAndRemoveDuplicates() {
    const input1 = document.getElementById('array1').value;
    const input2 = document.getElementById('array2').value;
  
    const array1 = input1.split(',').map(item => parseInt(item.trim()));
    const array2 = input2.split(',').map(item => parseInt(item.trim()));
  
    const merged = array1.concat(array2);
    const uniqueArray = [];
    const hash = {};
  
    merged.forEach(item => {
      if (!hash[item]) {
        hash[item] = true;
        uniqueArray.push(item);
      }
    });
  
    const resultElement = document.getElementById('result');
    resultElement.textContent = "Merged Array without Duplicates: [" + uniqueArray.join(', ') + "]";
  }
  