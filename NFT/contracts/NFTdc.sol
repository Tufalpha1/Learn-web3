// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

// Import the openzepplin contracts
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

// NFTdc is  ERC721 signifies that the contract we are creating imports ERC721 and follows ERC721 contract from openzeppelin
contract NFTdc is ERC721 {
    constructor() ERC721("NFTdc", "ITM") {
        // mint an NFT to yourself
        _mint(msg.sender, 1);
    }
}