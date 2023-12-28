// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract BlogContract {
    struct Blog {
        bytes16 id; // 32
        address owner; // 32
    }

    address private owner;

    // blogHash to blog
    mapping(bytes32 => Blog) private ownedBlog;

    // blogId to blogHash
    mapping(uint => bytes32) private ownedBlogHash;

    // Action is not authorized
    error UnAuthorized();

    constructor() {
        owner = msg.sender;
    }

    function addBlog(bytes16 blogId) external{
        bytes32 blogHash = keccak256(abi.encodePacked(blogId, msg.sender));

        if(hasBlogOwner(blogHash)){
            revert UnAuthorized();
        }

        ownedBlog[blogHash] = Blog({
            id: blogId,
            owner: msg.sender
        });
    }

    function hasBlogOwner(bytes32 blogHash) private view returns(bool) {
        return ownedBlog[blogHash].owner == msg.sender;
    }
}