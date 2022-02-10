/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function(s) {

    let length = s.length;
    let maxLength = 0;
    let result;

    if(length ===1){
        return s;
    }

    //주어진 길이만큼 수행하는 반복문.
    for(let startIndex = 0 ; startIndex < length ; startIndex++){
        //endIndex를 똑같이 설정한 이유는 1개만 자를수도 있어서.
        for(let endIndex = startIndex ; endIndex < length ; endIndex++){

            //회문여부를 true로 해놓고 비교하면서 false로 설정하기 위함
            let isResult = true;

            //자른 문자열의 길이
            let cutLength = endIndex-startIndex+1;

            //반복문의 변수를 그대로 쓰면서 증감을 시켜줄수없어서 임시 변수 사용
            let tempStart = startIndex;
            let tempEnd = endIndex;

            //계속 앞뒤를 + - 해주다가 둘이 같아지거나(홀수) 역전되면(짝수) 종료
            while(tempStart < tempEnd) {

                //자른 문자열중에 비교대상이 같지 않으면 해당 자른 문자열은 회문이 아니기때문에 바로 break
                //다음 내부 for문으로 이동함.
                if(s[tempStart] !== s[tempEnd]){
                    isResult = false;
                    break;
                }

                //같으면 시작인덱스는 한개+ 마지막인덱스는 한개-
                tempStart++;
                tempEnd--;
            }

            //반복을 다 했음에도 틀린게 없다면 회문이 맞다.
            if(isResult && (maxLength < cutLength)){
                //최대 길이를 갖는 문자열을 구해야하기에 자른 문자열을 일단 저장 해주고
                maxLength = cutLength;
                //해당 스트링이 리턴값이기 때문에 해당 문자열도 저장을 해놓음.
                result = s.substring(startIndex,endIndex+1);
            }
        }

    }

    return result;
};