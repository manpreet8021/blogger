// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract BlogContract {
    struct Blog {
        bytes16 id; // 32
        address owner; // 32
    }

    // blogHash to blog
    mapping(bytes32 => Blog) private ownedBlog;

    // blogId to blogHash
    mapping(uint => bytes32) private ownedBlogHash;

    function addBlog(bytes16 blogId) external{
        bytes32 blogHash = keccak256(abi.encodePacked(blogId, msg.sender));

        ownedBlog[blogHash] = Blog({
            id: blogId,
            owner: msg.sender
        });
        
    }
}