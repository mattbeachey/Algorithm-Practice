package com.company;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class LargestDiv3 {
    //Overworld
    public static int solution(int[] digits){
        List<Integer> digitsList = Arrays.stream(digits).boxed().collect(Collectors.toList());

        digitsList = removeOneCheck(digitsList);
        Collections.sort(digitsList, Collections.reverseOrder());

        StringBuilder sb = new StringBuilder();
        digitsList.forEach(sb::append);

        return sb.toString().length() > 0 ? Integer.parseInt(sb.toString()) : 0;
    }

    //helper methods
    public static List<Integer> removeOneCheck (List<Integer> digitsList){
        Collections.sort(digitsList);
        if (!isDiv3(digitsList)){
            Integer toRemove = -1;
            //finding the lowest number which--minus the remainder
            //of the orig sum divided by 3--is itself divisible by 3
            for (Integer num : digitsList){
                if ((num - digitSum(digitsList) % 3) % 3 == 0){
                    toRemove = num;
                    break;
                }
            }
            //if a num fit the above criteria, remove it
            if(toRemove != -1){
                System.out.println("gonna remove " + toRemove);
                digitsList.remove(toRemove);
                return digitsList;
            }
            //otherwise, remove more than one num
            return removeMore(digitsList);

        }
        return digitsList;
    }

    public static List<Integer> removeMore(List<Integer> digitsList){
        System.out.println("need to remove two or all");
        //make two new lists: one of just digitsList nums divisible by 3, one of remaining nums
        List<Integer> sans3Prods = digitsList.stream().filter(x -> x % 3 != 0).collect(Collectors.toList());
        List<Integer> with3Prods = digitsList.stream().filter(x -> x % 3 == 0).collect(Collectors.toList());
        Collections.sort(sans3Prods);
        //remove nums starting with lowest until sans3Prodss sum is divisible by 3
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
