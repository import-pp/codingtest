function longestPalindrome(s) {
  let start = 0,
    length = 0;
  for (let i = 0; i < s.length; i++) {
    // 전체 문자열 검사
    let left = i,
      right = i; // 홀수 길이 회문 조사
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (length < right - left + 1) {
        start = left;
        length = right - left + 1;
      }
      left--;
      right++;
    }
    left = i;
    right = i + 1; // 짝수 길이 회문 조사
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (length < right - left + 1) {
        start = left;
        length = right - left + 1;
      }
      left--;
      right++;
    }
  }
  return s.slice(start, start + length);
}

// 다른 풀이
/**
 * manacher's algorithm을 이용한 시간복잡도 O(n) 풀이
 */

/**
 const longestPalindrome = (s) => {
 if (s.length === 1) return s
    let str = [ '@', ...s.split('').join('@').split(''), '@'].join('')
    let r = -1, p = -1
    let result = {
        index: 0,
        radius: 0
    }
    let res = []
    
    for(let i = 0; i < str.length; i++) {
        if (r < i) {
            p = r = i
            while(r < str.length && r <= p*2 && str[r] === str[2*p-r]) r++
            r--
            res[i] = r-p
            if(result.radius < r-p) {
                result.index = i
                result.radius = r-p
            }
        } else {
            let j = 2 * p - i
            if(res[j] < r-i) {
                res[i] = res[j]
            } else if(res[j] > r-i) {
                res[i] = r-i
            } else {
                p = i
                while(r < str.length && r <= p*2 && str[r] === str[2*p-r]) r++
                r--
                res[i] = r-p
                if(result.radius < r-p) {
                    result.index = i
                    result.radius = r-p
                }

            }
        }
    }
    let {index, radius} = result
    return str.slice(index-radius, index+radius+1).replaceAll('@','')
}; 
 */
