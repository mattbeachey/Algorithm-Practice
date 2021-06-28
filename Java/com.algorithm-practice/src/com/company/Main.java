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
//        int[] a = {2, 0, 2, 2, 0}; //expected: 8
//        int[] b = {-2, -3, 4, -5}; //expected: 60
//        int[] c = {-3, -2, 100, 101, 102}; //expected: 1030200 (6181200 with proper subset rule)
//        int[] d = {-3, -2, -5, 100, 101, 102}; //expected: 15453000
//        int[] e = {0}; //expected: 0?
//        int[] f = {1}; //expected: 1?
//        int[] g = {-6, 0}; //expected: 0
//        int[] h = {0, 0, 0}; //expected: 0
//        int[] i = {2, 2, 2, 0, 0}; //expected: 8
//        int[] j = {-3, -4, 0}; //expected: 12
//        int[] k = {0, 0, -1}; //expected: 0
//        int[] l = {1, 0, -1}; // expected: 1
//        int[] m = {-1}; //expected: -1
//        int[] var = f;
//        System.out.println(GoogLambda2Fixed.solution(var));

        //LargestDiv3
        int[] a = {1, 5, 8, 9}; //remove 5 - lowest that fits modulus rule: 981
        int[] b = {1, 2, 5, 8, 9}; //remove 1: 9852
        int[] c = {24, 2, 2}; //remove both 2s: 24
        int[] d = {1, 3, 4, 27}; //remove 1 and 4 - tricky because of 3 between them: 273
        int[] e = {9, 1, 3, 4}; //same as above: 93
        int[] f = {9, 3, 4, 7}; //remove 4 and 7 - tricky because lowest num 3 needs to stay: 93
        int[] g = {7, 5, 3}; // remove none: 753
        int[] h = {8, 7, 5, 4, 2}; //remove 2: 8754
        int[] i = {8, 7, 5, 5, 4, 2}; // remove 4: 87552
        int[] j = {8, 7, 5, 5, 7, 7, 4, 2, 1}; // remove 1: 87775542
        int[] k = {9, 8, 8}; //remove both 8s: 9
        int[] l = {7, 7}; //remove all: 0
        int[] m = {7, 0};
        int[] n = {7, 7, 0}; //remove both 7s: 0

        System.out.println(LargestDiv3.solution(k));
        //assumptions:
        //can always assume a 3, 6, or 9 will stay
        //when seeing what to remove, find smaller group mutliples of 3

    }

}





