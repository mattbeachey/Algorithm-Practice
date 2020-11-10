package com.company;

public class Main {

    public static void main(String[] args) {
//        //Symmetric Difference
//        SymmDiff.runTest();
//
//        //Digital Product
//        System.out.println(DigitalProduct.digitsProduct(4));
//
//        //Percent of What
//        int[] answer = PercentOfWhat.percentOfWhat(53.5);
//        System.out.println(answer[0]);
//        System.out.println("out of");
//        System.out.println(answer[1]);
//
//        //Rectangle Rotation (https://app.codesignal.com/arcade/code-arcade/labyrinth-of-nested-loops/tuKA5f3zpzkKKejJx)
//        System.out.println(RectangleRotation.recRot(6, 4));

        //Minimum Distribution Triplet (https://app.codesignal.com/challenge/LPAySw9MQXCi7934W)
//        int[] a = {4, 30};
//        int[] b = {6, 12, 20, 13};
//        int[] c = {10, 37, 11};
//        System.out.println(MinDistTriplet.finder(a ,b, c));

        //GoogLambda1
//        int[] a = {4, 7, 6, 9, 11};
//        int[] b = {4, 7, 6, 9, 11, 55};
//        System.out.println(GoogLambda1.solution(a, b));

        //GoogLambda2
        int[] a = {2, 0, 2, 2, 0}; //expected: 8
        int[] b = {-2, -3, 4, -5}; //expected: 60
        int[] c = {-3, -2, 100, 101, 102}; //expected: 1030200
        int[] d = {-3, -2, -5, 100, 101, 102}; //expected: 15453000
        int[] e = {0}; //expected: 0?
        int[] f = {1}; //expected: 0?
        int[] g = {-1, 0}; //expected: 0
        int[] h = {0, 0, 0}; //expected: 0
        int[] i = {2, 2, 2, 0, 0}; //expected: 8
        System.out.println(GoogLambda2.solution(g));

        //Test
        int n = g.length;
        System.out.println(Test.maxProductSubset(g, n));

    }

}





