package com.company;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Main {

    public static void main(String[] args) {
        int[] array1 = {1,2,3,4,5};
        int[] array2 = {3,4,5,6,7};
        
        testSym(array1, array2);
        testSym(array2, array1);

    }

    private static int[] testSym(int[] List1, int[] List2) {
//        List<Integer> clonedList = Arrays.asList(List1);
        int[] cloneList1 = Arrays.copyOf(List1, List1.length);
        for (int i = 0; i < List1.length; i++) {
            for (int j = 0; j < List2.length; j++) {
                if (List1[i] == List2[j])
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


