package com.company;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class GoogLambda2 {

    static Boolean isSubset = false;

    //region OVERWORLD METHOD
    public static String solution(int[] xs) {
        List<Integer> xsList = Arrays.stream(xs).boxed().collect(Collectors.toList());

        //if there are no numbers greater than 0, don't trim 0s
        Collections.sort(xsList, Collections.reverseOrder());
        xsList = xsList.get(0) == 0 ? xsList : trim0s(xsList);

        int negCount = countNegative(xsList);

        //if odd number of negatives
        if (negCount % 2 != 0){
            xsList = removeOneNegative(xsList);
        }

        //if no index has been removed yet
//        if (!isSubset){
//            xsList = groupHighestNeg(xsList, negCount);
//            xsList = removeLowestUnit(xsList);
//        }

        //return total product of subset of xsList
        return Integer.toString(listProduct(xsList));

    }
    //endregion

    //region HELPER METHODS
    public static int listProduct(List<Integer> xsList){
        int product = 1;
        for(Integer i : xsList){
            product *= i;
        }
        return product;
    }

    public static List<Integer> removeLowestUnit(List<Integer> xsList){
        Collections.sort(xsList);
        xsList.remove(0);
        return xsList;
    }

    public static List<Integer> groupHighestNeg(List<Integer> xsList, int negCount){
        if (negCount == 0)
            return xsList;
        int hN1 = Integer.MIN_VALUE;
        int hN2 = Integer.MIN_VALUE;
        Collections.sort(xsList, Collections.reverseOrder());
        for(Integer num : xsList){
            if (num >= 0)
                continue;
            if (hN1 < -1000){
                hN1 = num;
                continue;
            }
            if (hN2 < -1000){
                hN2 = num;
                break;
            }
        }
        xsList.remove(xsList.indexOf(hN1));
        xsList.remove(xsList.indexOf(hN2));
        xsList.add(hN1*hN2);
        return xsList;
    }

    public static List<Integer> removeOneNegative(List<Integer> xsList){
        int hN = Integer.MIN_VALUE;
        for (Integer num : xsList){
            if (num < 0)
                hN = num > hN ? num : hN;
        }
        xsList.remove(xsList.indexOf(hN));
        isSubset = true;
        return xsList;
    }

    public static int countNegative(List<Integer> xsList){
        int counter = 0;
        for (Integer i : xsList){
            counter = i < 0 ? counter + 1 : counter;
        }
        return counter;
    }

    public static List<Integer> trim0s(List<Integer> xsList){
            List<Integer> newList = new ArrayList<>();
            for(Integer num : xsList){
                if (num != 0){
                    newList.add(num);
                    isSubset = true;
                }
            }
        return newList;
    }
    //endregion
}

// -Remove any 0s and 1s
// -count up total of negative numbers:
// 	    -if even, leave them all in place
// 	    -if odd, remove the negative number closest to 0
// -if no index has been removed yet after those steps, follow negative-removing prodecure:
//      -if odd number of negatives, remove negative number closest to 0
//      -if even number of negatives, consider two closest-to-zero as a pair against
//      -the lowest positive number
// -multiply all remaining values



//{-3, -2, 100, 101, 102}
//{6, 100, 101, 102}