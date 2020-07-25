package com.company;

import java.lang.Math;

public class RectangleRotation {

	public static int recRot(int a, int b) {
	    double length = (a / Math.sqrt(2));
	    double width = (b / Math.sqrt(2));
	    
	    int count = 0;
	    
	    if((int) width % 2 == 0){
	    
		for(int i = 1; i < length; i++){
		    if(i % 2 == 0){
		        count += ((int) width + 1);
		    }else{
		        count += ((int) width);
		    }
		}
		
		count = count * 2;
		
		count += ((int) width + 1);
		
	    }else{
		
		 for(int i = 1; i < length; i++){
		    if(i % 2 == 0){
		        count += ((int) width);
		    }else{
		        count += ((int) width + 1);
		    }
		}
		
		count = count * 2;
		
		count += ((int) width);
		
	    }
	    
	    return count;
	    
	}

}

