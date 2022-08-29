1. Calculator


const Calculator = (A, B, C) => 
{
	switch(A)
	{
	  case '+':
	    {
	      return B+C;
	    }
	  
	  case '-':
	    {
	      return B-C;
	    }
	  
	  case '*':
	    {
	      return B*C;
	    }
	    
	    case '/':
	    {
	      return B/C;
	    }
	}
	
};




2. Check whether the condition is fulfilled or not?

const Check_divisibility = (N) => {
 
 
  if((N%6==0) && (N%9==0))
  {
   return "Divisible by both"
  }

 else
 {
   return "Not Divisible by both"
 }
   
};

3. Eligible Voter

const isEligible = (a) => {
    
    let v1="Eligible for Voting"
    let v2="Not Eligible for Voting"
      if(a>18 || a==18)
      return v1
      else if(a<18)
      return v2
  };

  4. Find Relation

  const findRelation = (x,y) => {
    if(x<y)
    {
      return x+" is smaller than "+y
    }
    
     else if(x>y)
    {
      return x+" is greater than "+y
    }
    
     else if(x==y)
    {
      return x+" is equal to "+y
    }
    
  };


  5. Find Grades

  const findGrades = (a) => {
   
   
    switch(true)
    {
      case (a<=10):
        {
          return "E";
          break;
        }
        
      case (a>=11 && a<=20 ):
        {
         return "D";
          break;
        }
      case (a>=21 && a<=30 ):
        {
         return "C";
          break;
        }
        case (a>=31 && a<=40 ):
        {
          return "B";
          break;
        }
        case (a>=41 && a<=50 ):
        {
          return "A";
          break;
        }
      
     }
    
    
     
 };


  6. Get Value

  const getValue = (a) => {

    if(a=="P" || a=="p")
    {
      return "PrepBytes"
    }
      
    else if(a=="Z" || a=="z")
    {
      return "Zenith"
    }
    
    else if(a=="E" || a=="e")
    {
      return "Expert Coder"
    }
    
    
    else if(a=="D" || a=="d")
    {
      return "Data Structure"
    }
    
    };


  
  7. Find the maximum out of three numbers.

  const Max_out_of_three = (A,B,C) => {
    
    if((A==B) || (B==C) || (A==C))
    {
    return -1;
    }
     else if((A>B) && (A>C))
     
     {
       return A;
     }
     else if((A<B) && (B>C))
     {
    return B
     }
   
 else if((C>A) && (C>B))
 {
 return C
 }
 };

 8. Second Smallest

 
const findSndSmallest = (x,y,z) => {
    
    
  if(x>y && x>z)
  {
    if(y>z)
    {
      return y;
    }
    else
    {
      return z;
    }
    
  }
  else if(y>x && y>z)
  {
    if(x>z)
    {
      return x;
    }else
    {
      return z;
    }
    
  }
  
  else
  {
    if(x>y)
    {
      return x;
    }
    else
    {
      return y;
    }
  }
  
};



 9. Check whether the triangle is Acute or Obtuse
 
 const Triangle_Check = (A,B,C) => {
    
  let sum1= B*B + C*C
  let sum2= A*A + C*C
  let sum3= A*A + B*B
      
      if((A*A)>sum1 || (B*B)>sum2 || (C*C)>sum3 )
      {
        return "obtuse"
      }
      else
      {
        return "acute"
      }
  };
  