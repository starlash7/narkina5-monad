// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract CellRegistry {
    struct ChampionRecord {
        bytes32 seasonId;
        bytes32 cellId;
        int256 pnl;
        uint64 timestamp;
        address operator;
    }

    ChampionRecord[] private records;
    mapping(bytes32 => uint256[]) private seasonRecordIds;

    event ChampionRecorded(
        uint256 indexed recordId,
        bytes32 indexed seasonId,
        bytes32 indexed cellId,
        int256 pnl,
        address operator,
        uint256 timestamp
    );

    function recordChampion(bytes32 seasonId, bytes32 cellId, int256 pnl) external returns (uint256 recordId) {
        recordId = records.length;
        records.push(
            ChampionRecord({
                seasonId: seasonId,
                cellId: cellId,
                pnl: pnl,
                timestamp: uint64(block.timestamp),
                operator: msg.sender
            })
        );
        seasonRecordIds[seasonId].push(recordId);

        emit ChampionRecorded(recordId, seasonId, cellId, pnl, msg.sender, block.timestamp);
    }

    function totalRecords() external view returns (uint256) {
        return records.length;
    }

    function getRecord(uint256 recordId) external view returns (ChampionRecord memory) {
        require(recordId < records.length, "record not found");
        return records[recordId];
    }

    function getSeasonRecordIds(bytes32 seasonId) external view returns (uint256[] memory) {
        return seasonRecordIds[seasonId];
    }
}
