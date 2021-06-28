package com.company;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class GoogLambda2Final {
    //Global Variables
    static int negCount = 0;
    static BigInteger totalProduct = new BigInteger("1");
    static int hN = Integer.MIN_VALUE;

    //Overworld
    public static String solution(int[] xs){

        List <Integer> xsList = countTrimProd(xs);
        //Trim all 0s. If resulting list has no length, return 0.
        //If resulting list has length of 1, return the 0th index if it is positive,
        //or return 0 if it is negative.
        if (xs.length == 1)
            return xs[0] + "";
        if (xsList.size() < 1)
            return "0";
        if (xsList.size() == 1)
            return xsList.get(0) > 0 ? xsList.get(0) + "" : "0";

        //if odd number of negatives, divide highest value negative from product
        totalProduct = negCount % 2 != 0 ? totalProduct.divide(new BigInteger(hN + "")) : totalProduct;

        //return total product of subset of xsList
        return totalProduct + "";
    }

    //Helper Method
    //count all negatives, multiply all non-zeros, find highest-value negative
    public static List<Integer> countTrimProd(int[] xsList){
        List<Integer> newList = new ArrayList<>();
        for (int num : xsList){
            if (num != 0){
                newList.add(num);
                totalProduct = totalProduct.multiply(new BigInteger(num + ""));
            }
            if (num < 0) {
                hN = num > hN ? num : hN;
            }
            negCount = num < 0 ? negCount + 1 : negCount;
        }
        return newList;
    }
}