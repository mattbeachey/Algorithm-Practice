package com.company;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Main {

    public static void main(String[] args) {
        //Symmetric Difference
        SymmDiff.runTest();

        //Digital Product
        System.out.println(DigitalProduct.digitsProduct(4));

        //Percent of What
        int[] answer = PercentOfWhat.percentOfWhat(53.5);
        System.out.println(answer[0]);
        System.out.println("out of");
        System.out.println(answer[1]);

        //Rectangle Rotation (https://app.codesignal.com/arcade/code-arcade/labyrinth-of-nested-loops/tuKA5f3zpzkKKejJx)
        System.out.println(RectangleRotation.recRot(6, 4));

    }

}





