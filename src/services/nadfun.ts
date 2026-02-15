// Narkina5 nad.fun launch + Monad onchain registry utilities
import { encodeFunctionData, isAddress, keccak256, toHex } from 'viem';

export interface AgentGraduationData {
    name: string;
    symbol: string;
    description: string;
    specialization: string;
    trustScore: number;
}

export interface GraduatedCell {
    name: string;
    symbol: string;
    specialization: string;
    launchId: string;
    nadfunUrl: string;
    graduatedAt: number;
    trustScore: number;
    seasonId?: string;
    onchainTxHash?: string;
}

export interface RecordChampionOnchainInput {
    seasonId: string;
    cellName: string;
    totalPnlSol: number;
}

export interface RecordChampionOnchainResult {
    txHash: string;
    seasonIdHash: string;
    cellIdHash: string;
    registryAddress: string;
}

interface EthereumProvider {
    request(args: { method: string; params?: unknown[] }): Promise<unknown>;
}

const STORAGE_KEY = 'narkina5_graduated_cells';
const CELL_REGISTRY_ABI = [
    {
        type: 'function',
        name: 'recordChampion',
        stateMutability: 'nonpayable',
        inputs: [
            { name: 'seasonId', type: 'bytes32' },
            { name: 'cellId', type: 'bytes32' },
            { name: 'pnl', type: 'int256' },
        ],
        outputs: [
            { name: 'recordId', type: 'uint256' },
        ],
    },
] as const;

function getProvider(): EthereumProvider {
    const provider = (window as unknown as { ethereum?: EthereumProvider }).ethereum;
    if (!provider) {
        throw new Error('No EVM wallet provider found. Connect an injected Monad-compatible wallet.');
    }
    return provider;
}

function getRegistryAddress(): string {
    const fromEnv = import.meta.env.VITE_MONAD_CELL_REGISTRY_ADDRESS as string | undefined;
    if (!fromEnv) {
        throw new Error('VITE_MONAD_CELL_REGISTRY_ADDRESS is not set.');
    }
    if (!isAddress(fromEnv)) {
        throw new Error('VITE_MONAD_CELL_REGISTRY_ADDRESS is invalid.');
    }
    return fromEnv;
}

async function waitForReceipt(provider: EthereumProvider, txHash: string): Promise<void> {
    const maxTries = 50;
    const delayMs = 1200;
    for (let i = 0; i < maxTries; i += 1) {
        const receipt = await provider.request({
            method: 'eth_getTransactionReceipt',
            params: [txHash],
        }) as { status?: string } | null;

        if (receipt) {
            if (receipt.status === '0x0') {
                throw new Error('Monad transaction reverted.');
            }
            return;
        }

        await new Promise((resolve) => setTimeout(resolve, delayMs));
    }

    throw new Error('Timed out waiting for Monad confirmation.');
}

export function generateTokenDescription(agent: AgentGraduationData): string {
    return `${agent.description}\n\nBuilt for Monad + nad.fun | Trust Score: ${agent.trustScore}/100 | Specialization: ${agent.specialization}`;
}

export function getNadfunLaunchUrl(): string {
    return 'https://www.nad.fun';
}

export async function recordChampionOnchain(input: RecordChampionOnchainInput): Promise<RecordChampionOnchainResult> {
    const provider = getProvider();
    const registryAddress = getRegistryAddress();
    const seasonIdHash = keccak256(toHex(input.seasonId));
    const cellIdHash = keccak256(toHex(input.cellName.trim().toUpperCase()));
    const pnlBps = BigInt(Math.round(input.totalPnlSol * 10_000));
    const data = encodeFunctionData({
        abi: CELL_REGISTRY_ABI,
        functionName: 'recordChampion',
        args: [seasonIdHash, cellIdHash, pnlBps],
    });

    const accounts = await provider.request({ method: 'eth_requestAccounts' }) as string[];
    const from = accounts?.[0];
    if (!from) {
        throw new Error('No wallet account available for signing.');
    }

    const txHash = await provider.request({
        method: 'eth_sendTransaction',
        params: [{ from, to: registryAddress, data }],
    }) as string;

    if (!txHash || !txHash.startsWith('0x')) {
        throw new Error('Failed to submit Monad graduation transaction.');
    }

    await waitForReceipt(provider, txHash);

    return {
        txHash,
        seasonIdHash,
        cellIdHash,
        registryAddress,
    };
}

export function getGraduatedAgents(): GraduatedCell[] {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    } catch {
        return [];
    }
}

export function saveGraduatedAgent(cell: GraduatedCell): void {
    const current = getGraduatedAgents();
    current.unshift(cell);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
}
