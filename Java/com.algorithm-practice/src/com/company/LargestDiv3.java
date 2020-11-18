package com.company;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class LargestDiv3 {
    //Overworld
    public static int solution(int[] digits){
        List<Integer> digitsList = Arrays.stream(digits).boxed().collect(Collectors.toList());
        Collections.sort(digitsList);


        digitsList = removeOneCheck(digitsList);
        StringBuilder sb = new StringBuilder();
        Collections.sort(digitsList, Collections.reverseOrder());
        digitsList.forEach(sb::append);
        return sb.toString().length() > 0 ? Integer.parseInt(sb.toString()) : -1;
    }


    //helper methods
    public static List<Integer> removeOneCheck (List<Integer> digitsList){
        if (!isDiv3(digitsList)){
            Integer toRemove = -1;
            for (Integer num : digitsList){
                if ((num - digitSum(digitsList) % 3) % 3 == 0){
                    toRemove = num;
                    break;
                }
            }
            if(toRemove != -1){
                System.out.println("gonna remove " + toRemove);
                digitsList.remove(toRemove);
                return removeOneCheck(digitsList);
            }
            return removeTwoCheck(digitsList);

        }
        return digitsList;
    }

    public static List<Integer> removeTwoCheck(List<Integer> digitsList){
        System.out.println("need to remove two or all");
        List<Integer> sans3Prods = digitsList.stream().filter(x -> x % 3 != 0).collect(Collectors.toList());
        List<Integer> with3Prods = digitsList.stream().filter(x -> x % 3 == 0).collect(Collectors.toList());
        Collections.sort(sans3Prods);

        while(!isDiv3(sans3Prods)){
            sans3Prods.remove(0);
        }
        with3Prods.addAll(sans3Prods);
        return with3Prods;
    }

    public static boolean isDiv3(List<Integer> digits){
        return digitSum(digits) % 3 == 0;
    }

    public static int digitSum (List<Integer> digitsList){
        return Arrays.stream(digitsList
                .stream()
                .mapToInt(Integer::intValue)
                .toArray())
                .sum();
    }

}
