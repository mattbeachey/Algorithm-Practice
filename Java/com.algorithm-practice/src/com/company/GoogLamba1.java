package com.company;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class GoogLamba1 {

    public static int solution(int[] x, int[] y) {
        return x.length > y.length ? checker(x,y) : checker(y,x);
    }

    public static int checker(int[] longer, int[]shorter){
        List<Integer> shortList = Arrays
                .stream(shorter)
                .boxed()
                .collect(Collectors.toList());

        for (int i = 0; i < longer.length; i++){
            if (shortList.contains(longer[i]))
                continue;
            return longer[i];
        }
        return 0;
    }



}
