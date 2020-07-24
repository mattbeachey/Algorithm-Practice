package com.company;

public class MinDistTriplet {

    public static int finder(int[] a, int[] b, int[] c) {

        int globalSmallest = Integer.MAX_VALUE;
        StringBuilder sb = new StringBuilder("!");

        for (int i = 0; i < a.length; i ++){
            sb.append("-");
            System.out.println(sb.toString());
            for (int j = 0; j < b.length; j++){
                sb.append("_");
                System.out.println(sb.toString());
                for (int k = 0; k < c.length; k++){
                    sb.append("*");
                    System.out.println(sb.toString());
                    int smallestXandY = Integer.MAX_VALUE;
                    int smallestYandZ = Integer.MAX_VALUE;
                    int smallestZandX = Integer.MAX_VALUE;

                    smallestXandY = returnSmallest(smallestXandY, Math.abs(a[i] - b[j]));
                    // if (Math.abs(a[i] - b[j]) < smallestXandY){
                    //     smallestXandY = Math.abs(a[i] - b[j]);
                    // } else {
                    //     continue;
                    // }

                    smallestYandZ = returnSmallest(smallestYandZ, Math.abs(b[j] - c[k]));
                    // if (Math.abs(b[j] - c[k])< smallestYandZ){
                    //     smallestYandZ = Math.abs(b[j] - c[k]);
                    // }  else {
                    //     continue;
                    // }

                    smallestZandX = returnSmallest(smallestZandX, Math.abs(c[k] - a[i]));
                    // if (Math.abs(c[k] - a[i]) < smallestZandX){
                    //     smallestZandX = Math.abs(c[k] - a[i]);
                    // } else {
                    //     continue;
                    // }

                    // globalSmallest = returnSmallest(globalSmallest, (smallestZandX + smallestXandY + smallestYandZ));
                    if (smallestZandX + smallestXandY + smallestYandZ < globalSmallest){
                        globalSmallest = smallestZandX + smallestXandY + smallestYandZ;
                    }
                }
            }
        }
        return globalSmallest;
    }

    private static int returnSmallest(int orig, int newOne){
        int mod = newOne % orig;
        return mod % orig;
    }
//See you, space cowboy

}
