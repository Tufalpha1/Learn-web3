// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;


contract MoodDiary {

    //local variable
    string mood;


    //setter function
    function setMood(string memory _mood) public {
        mood = _mood;
    }

    //getter function
    function getMood() public view returns (string memory) {
        return mood;
    }
}
