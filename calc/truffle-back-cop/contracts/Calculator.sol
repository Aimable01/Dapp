// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Calculator{

    uint public result;
    
    function add(uint num1, uint num2) public returns(uint){
        result = num1 + num2;
        return result;
    }

    function sub(uint num1, uint num2) public returns(uint){
        result = num1 - num2;
        return result;
    }

    function mul(uint num1, uint num2) public returns(uint){
        result = num1 * num2;
        return result;
    }

    function div(uint num1, uint num2) public returns(uint){
        result = num1 / num2;
        return result;
    }
}