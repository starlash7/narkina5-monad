// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract GraduationGate {
    uint256 public minPnl = 10 ether;

    function isEligible(int256 pnl) external view returns (bool) {
        return pnl >= int256(minPnl);
    }
}
