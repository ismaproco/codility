/*
Creation-Date: 07/13/2015
Author: Ismael Jimenez
Description: Basic Exercise to solve fibonacci
*/

var yourself = {
    arr:[],
    fibonacci : function(n) {
        if (n === 0) {
            return 0;
        }
        if (n === 1) {
            return 1;
        }
        
        if(arr[n]) {
            return this.arr[n];
        }
        else
        {
            this.arr[n-1] = this.fibonacci( n - 1 );
            return this.fibonacci( n - 1 ) +
            this.fibonacci( n - 2 );    
        }
    }
};
