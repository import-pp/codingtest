<?php

namespace codingtest\wonhyung;

class CountAndSay
{
    function countAndSay1($n) {
        $string = "1";
        for ($i = 1; $i < $n; ++$i) {
            $tempString = "";
            $previousString = $string[0];
            $count = 1;
            for ($j = 1; $j < strlen($string); ++$j) {
                if ($string[$j] == $previousString) {
                    ++$count;
                } else {
                    $tempString .= $count . $previousString;
                    $count = 1;
                    $previousString = $string[$j];
                }
            }
            $string = $tempString . $count . $previousString;
        }

        return $string;
    }

    public function countAndSay2($n){
        if($n == 1){
            return "1";
        } else {
            $string = $this->countAndSay2($n-1);
            $result = "";
            $previousString = $string[0];
            $count = 0;
            for($i = 0;$i < strlen($string);$i++){
                if($string[$i] !== $previousString){
                    $result .= $count . $previousString;
                    $previousString = $string[$i];
                    $count = 1;
                } else {
                    $count++;
                }
            }
            $result .= $count . $previousString;
            return $result;
        }
    }
}