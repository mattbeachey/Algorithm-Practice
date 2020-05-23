package com.company;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Main {

    public static void main(String[] args) {
        int[] array1 = {1,2,3,4,5};
        int[] array2 = {3,4,5,6,7};


        System.out.println(testSym(array1, array2)[0]);
        System.out.println(testSym(array2, array1)[0]);

    }

    private static int[] testSym(int[] array1, int[] array2) {
//        List<Integer> clonedList = Arrays.asList(List1);
        int[] cloneList1 = Arrays.copyOf(array1, array1.length);
        for (int i = 0; i < array1.length; i++) {
            for (int j = 0; j < array2.length; j++) {
                if (array1[i] == array2[j])
                    cloneList1[i] = -1;
            }
        }
        List<Integer> newList = new ArrayList<Integer>();
        for (int i = 0; i < cloneList1.length; i++) {
            if (cloneList1[i] != -1)
                newList.add(cloneList1[i]);
        }
        int[] finalArray = newList.stream().mapToInt(i -> i).toArray();
        return finalArray;
    }
}


