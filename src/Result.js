import React from 'react'

function Result({secretnumber,term}) {
  let result;
  if(term){
        if(term>secretnumber){
            result='Higher';
        }else if(term<secretnumber){
            result='lower';
        }else if(term==secretnumber){
            result=`WOW you are right`
        }else{
            result="invalid input."
        }
  }
  return <h3>Your Guess:{result}</h3>
}

export default Result
