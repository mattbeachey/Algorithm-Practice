package com.company;

public class PercentOfWhat {

    public static int[] percentOfWhat(double percent){

        double bigger = 1;
        double adjustedPerc = percent/100;

        while ( (bigger*adjustedPerc) - Double.valueOf((int)(bigger*adjustedPerc)) != 0){
            bigger++;
        }

        int[] result = {(int)(bigger*adjustedPerc), (int)bigger};
        return result;
    }

}
