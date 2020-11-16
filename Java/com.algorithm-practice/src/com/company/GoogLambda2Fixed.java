
package com.company;

        import java.math.BigInteger;
        import java.util.ArrayList;
        import java.util.Arrays;
        import java.util.List;
        import java.util.stream.Collectors;

public class GoogLambda2Fixed {
    //Overworld
    public static String solution(int[] xs){
        List<Integer> xsList = Arrays.stream(xs).boxed().collect(Collectors.toList());
        int negCount = countNegative(xsList);

        //Trim all 0s. If resulting list has no length, return 0.
        //If resulting list has length of 1, return the 0th index if it is positive,
        //or return 0 if it is negative.
        xsList = trim0s(xsList);
        if (xs.length == 1)
            return xs[0] + "";
        if (xsList.size() < 1)
            return "0";
        if (xsList.size() == 1)
            return xsList.get(0) > 0 ? xsList.get(0) + "" : "0";

        //if odd number of negatives
        if (negCount % 2 != 0){
            xsList = removeOneNegative(xsList);
        }

        //return total product of subset of xsList
        return listProduct(xsList) + "";
    }

    //Helper Methods
    public static BigInteger listProduct(List<Integer> xsList){
        BigInteger product = new BigInteger("1");
        for(Integer i : xsList){
            product = product.multiply(new BigInteger(i + ""));
        }
        return product;
    }

    public static List<Integer> removeOneNegative(List<Integer> xsList){
        int hN = Integer.MIN_VALUE;
        for (Integer num : xsList){
            if (num < 0)
                hN = num > hN ? num : hN;
        }
        xsList.remove(xsList.indexOf(hN));
        return xsList;
    }

    public static List<Integer> trim0s(List<Integer> xsList){
        List<Integer> newList = new ArrayList<>();
        for(Integer num : xsList){
            if (num != 0){
                newList.add(num);
            }
        }
        return newList;
    }

    public static int countNegative(List<Integer> xsList){
        int counter = 0;
        for (Integer i : xsList){
            counter = i < 0 ? counter + 1 : counter;
        }
        return counter;
    }
}