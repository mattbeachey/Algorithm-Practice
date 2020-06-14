package com.company;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class DigitalProduct {

    //global variables
    static List<Integer> list = new ArrayList<>();
    static int prodOriginal;

    public static int digitsProduct(int product) {
        StringBuilder dummy = new StringBuilder(""); //blank param to start
        prodOriginal = product; //will be used later to check because product gets mutated
        divideAndCont(product, dummy, 0); //main recursive method

        Collections.sort(list); //list sorted to put smallest at front
        //inputs 0 and 9 can be found just by adding 10
        //(except for the provided result for 1 - which I disagree with)
        if(prodOriginal >= 0 && prodOriginal < 10 && prodOriginal != 1){
            return prodOriginal + 10;
        }
        if(prodOriginal == 1){
            return 1;
        }

        //if the list didn't get populated, return -1
        if (list.size() > 0){
            return list.get(0);
        } else return -1;
    }

    static void divideAndCont(int prod, StringBuilder sb, int lastNum){

        //every time divideAndCont recurs, the last digit found is added to the SB
        if(lastNum > 0){ //lastNum is 0 the first time method called, never on recur
            sb.append(Integer.toString(lastNum));
        }

        //numbers 2-9 are considered as candidate final digits
        for (int i = 2; i < 10; i++){

            //if a digit is a multiple, it is divided from the original product and
            //the process is repeated with the "next" value
            if (prod % i == 0){
                int next = prod/(i);
                System.out.println("      ------      ");
                System.out.println("Candidate first number: " + Integer.toString(i));

                if (next > 9){ //if "next" < 9, there's no need to continue - just add to final
                    System.out.println("recursion on i = " + i);
                    divideAndCont(next, new StringBuilder(sb), i);
                } else {

                    System.out.println("Candidate final number: " + Integer.toString(next));
                    sb.append(Integer.toString(i));
                    sb.append(Integer.toString(next));
                    System.out.println("What are we working with: " + prod);
                    System.out.println("SB: " + sb);
                    System.out.println("Iteration " + i);

                    //below removes the previous iteration's SB from this iteration's SB
                    if( list.size() > 0 &&
                            sb.toString().startsWith(Integer.toString(list.get(list.size() - 1)))){
                        System.out.println("this one should be chopped");
                        System.out.println("cut this: " + list.get(0));
                        System.out.println("from this: " + sb);
                        sb.delete(0, Integer.toString((list.get(list.size() - 1))).length());
                    }
                    //check to make sure they're factors of the orig using helper method
                    //there are still some false positives that have made it to this point
                    if (prodOriginal == digitMultiplier(sb.toString())){
                        list.add(Integer.parseInt(sb.toString()));
                    }
                }
            }
        }
    }

    // helper method - multiplier to verify that all digits products of original
    static int digitMultiplier (String item){
        int multiplier = 1;
        for (int i = 0; i < item.length(); i++){
            multiplier = multiplier * Character.getNumericValue(item.charAt(i));
        }
        return multiplier;
    }





}
