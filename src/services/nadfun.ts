// Narkina5 nad.fun launch utilities (Monad-focused, no Solana dependency)

export interface AgentGraduationData {
    name: string;
    symbol: string;
    description: string;
    specialization: string;
    trustScore: number;
}

export function generateTokenDescription(agent: AgentGraduationData): string {
    return `${agent.description}\n\nBuilt for Monad + nad.fun | Trust Score: ${agent.trustScore}/100 | Specialization: ${agent.specialization}`;
}

export function getNadfunLaunchUrl(): string {
    return 'https://www.nad.fun';
}

const STORAGE_KEY = 'narkina5_graduated_cells';

export interface GraduatedCell {
    name: string;
    symbol: string;
    specialization: string;
    launchId: string;
    nadfunUrl: string;
    graduatedAt: number;
    trustScore: number;
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
