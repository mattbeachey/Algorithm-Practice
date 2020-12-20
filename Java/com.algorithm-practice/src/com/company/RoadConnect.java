//https://app.codesignal.com/challenge/abTaiJGdQLkdS96Q9

package com.company;

public class RoadConnect {
    
    public static boolean[][][] financialCrisis(boolean[][] roadRegister) {
    
    boolean[][][]finalArray = new boolean[roadRegister.length][roadRegister.length - 1][roadRegister.length -1];  
        
    for (int k = 0; k < finalArray.length ; k++){
        int[] currPlace = {0,0};
        for (int i = 0; i < roadRegister.length; i++){
            for (int j = 0; j < roadRegister[i].length; j++){
                if (i == k || j == k) continue;
                finalArray[k][currPlace[0]][currPlace[1]] = roadRegister[i][j];
                
                if(currPlace[1] < (roadRegister[i].length - 2)){
                    currPlace[1] += 1;
                } else if (currPlace[1] == (roadRegister[i].length - 2)){
                    currPlace[0] += 1;
                    currPlace[1] = 0;
                }
            }           
        }
    }
    
    return finalArray;
}
}