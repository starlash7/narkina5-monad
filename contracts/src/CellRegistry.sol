// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract CellRegistry {
    event ChampionRecorded(bytes32 indexed seasonId, bytes32 indexed cellId, int256 pnl);

    function recordChampion(bytes32 seasonId, bytes32 cellId, int256 pnl) external {
        emit ChampionRecorded(seasonId, cellId, pnl);
    }
}
