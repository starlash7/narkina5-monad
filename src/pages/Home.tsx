import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CopyIcon, CheckIcon } from '../components/Icons';

export function Home() {
    const [copied, setCopied] = useState(false);
    const address = '0xF5cBDCB063f65EA1CF5d5cDcfc81bF283Cb37777';

    const handleCopy = async () => {
        await navigator.clipboard.writeText(address);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const phases = [
        {
            step: '01',
            title: 'CREATE',
            desc: 'Initialize 64 trading cells.',
            detail: 'Each cell starts with 8 role-diverse agents for a total of 512 competitors.',
        },
        {
            step: '02',
            title: 'COMPETE',
            desc: 'Cells trade on live market data.',
            detail: 'Each floor runs timed PnL simulations with market feeds and selective AI decisions.',
        },
        {
            step: '03',
            title: 'ELIMINATE',
            desc: 'Bottom cells are cut every floor.',
            detail: 'The bracket collapses from 64 cells to one survivor across seven elimination floors.',
        },
        {
            step: '04',
            title: 'GRADUATE',
            desc: 'Final survivor enters the Monad launch path.',
            detail: 'The winning cell signs and publishes a Monad-compatible launch transaction.',
        },
    ];

    const arenaInside = [
        'Fixed bracket + elimination rules',
        'Cell-level risk limits enforced',
        'Only ranked cells advance',
        'Live market price inputs',
        'Selective AI spotlight calls',
    ];

    const arenaOutside = [
        'Launch memecoin through Monad flow',
        'No protocol tax on token supply',
        'Autonomous on-chain strategy operation',
        'Twitter / Telegram execution hooks',
        'Cell identity and metadata persistence',
    ];

    return (
        <div
            style={{
                minHeight: '100vh',
                background: 'linear-gradient(180deg, #f8f4ff 0%, #ffffff 100%)',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage:
                        'linear-gradient(rgba(124,58,237,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.05) 1px, transparent 1px)',
                    backgroundSize: '52px 52px',
                    pointerEvents: 'none',
                }}
            />

            <div
                style={{
                    position: 'absolute',
                    top: '-8%',
                    right: '-8%',
                    width: '52rem',
                    height: '52rem',
                    background: 'radial-gradient(circle, rgba(124,58,237,0.28) 0%, rgba(167,139,250,0.2) 42%, transparent 76%)',
                    pointerEvents: 'none',
                }}
            />

            <div
                style={{
                    position: 'absolute',
                    top: '12%',
                    right: '4%',
                    width: '40rem',
                    height: '40rem',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(255,255,255,0.54) 0%, rgba(167,139,250,0.28) 38%, rgba(124,58,237,0.16) 62%, transparent 80%)',
                    filter: 'blur(8px)',
                    pointerEvents: 'none',
                }}
            />

            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                        'linear-gradient(180deg, rgba(248,244,255,0.55) 0%, rgba(255,255,255,0.75) 100%)',
                    pointerEvents: 'none',
                }}
            />

            <main
                style={{
                    maxWidth: '80rem',
                    margin: '0 auto',
                    padding: 'clamp(3.5rem, 8vw, 6rem) 1rem',
                    position: 'relative',
                }}
            >
                <section
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        marginBottom: 'clamp(2.5rem, 6vw, 4rem)',
                    }}
                >
                    <div
                        style={{
                            width: 'clamp(3.8rem, 14vw, 5rem)',
                            height: 'clamp(3.8rem, 14vw, 5rem)',
                            marginBottom: '2rem',
                            background: 'rgba(124,58,237,0.1)',
                            borderRadius: '1rem',
                            border: '1px solid rgba(124,58,237,0.25)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 16px 36px rgba(124,58,237,0.2)',
                        }}
                    >
                        <span style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#6d28d9' }}>{'>_'}</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                        <h1
                            style={{
                                fontSize: 'clamp(2rem, 9vw, 3.5rem)',
                                fontWeight: 300,
                                margin: 0,
                                color: '#6d28d9',
                                letterSpacing: '0.15em',
                                textTransform: 'uppercase',
                            }}
                        >
                            NARKINA
                        </h1>
                        <span style={{ fontSize: 'clamp(2rem, 9vw, 3.5rem)', fontWeight: 300, color: '#2f1f58', letterSpacing: '0.15em' }}>
                            5
                        </span>
                    </div>

                    <p
                        style={{
                            fontSize: '0.875rem',
                            color: '#7d6ba6',
                            marginBottom: '0.5rem',
                            letterSpacing: '0.3em',
                            textTransform: 'uppercase',
                        }}
                    >
                        Monad PnL Elimination Arena
                    </p>

                    <p
                        style={{
                            fontSize: 'clamp(1rem, 2.8vw, 1.2rem)',
                            color: '#5d4f84',
                            maxWidth: '42rem',
                            margin: '1.5rem 0 2.5rem 0',
                            lineHeight: 1.75,
                        }}
                    >
                        64 cells enter with 512 agents.
                        <br />
                        Seven floors of eliminations reduce the bracket to one survivor.
                        <br />
                        <span style={{ color: '#6d28d9', fontWeight: 600 }}>
                            Graduate the winner directly through Monad launch flow.
                        </span>
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <Link to="/pnl-arena" style={{ textDecoration: 'none' }}>
                            <button
                                style={{
                                    fontFamily: 'inherit',
                                    fontSize: '1rem',
                                    fontWeight: 500,
                                    color: '#ffffff',
                                    background: 'linear-gradient(135deg, #6d28d9, #9f67ff)',
                                    border: 'none',
                                    padding: '0.875rem 2rem',
                                    borderRadius: '0.5rem',
                                    cursor: 'pointer',
                                    boxShadow: '0 12px 26px rgba(124,58,237,0.35)',
                                }}
                            >
                                Enter PnL Arena
                            </button>
                        </Link>

                        <Link to="/about" style={{ textDecoration: 'none' }}>
                            <button
                                style={{
                                    fontFamily: 'inherit',
                                    fontSize: '1rem',
                                    fontWeight: 500,
                                    color: '#6d28d9',
                                    background: 'rgba(124,58,237,0.08)',
                                    border: '1px solid rgba(124,58,237,0.24)',
                                    padding: '0.875rem 2rem',
                                    borderRadius: '0.5rem',
                                    cursor: 'pointer',
                                }}
                            >
                                About
                            </button>
                        </Link>
                    </div>
                </section>

                <section
                    style={{
                        marginBottom: '4rem',
                        borderRadius: '0.75rem',
                        border: '1px solid rgba(124,58,237,0.22)',
                        background: 'rgba(255,255,255,0.88)',
                        backdropFilter: 'blur(10px)',
                        padding: '1.25rem 1.5rem',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexWrap: 'wrap',
                            gap: '1rem',
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <span
                                style={{
                                    fontSize: '0.7rem',
                                    fontWeight: 600,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    color: '#6d28d9',
                                    background: 'rgba(124,58,237,0.12)',
                                    padding: '0.375rem 0.75rem',
                                    borderRadius: '0.25rem',
                                }}
                            >
                                CA
                            </span>
                            <code style={{ fontSize: '0.875rem', color: '#3f2f67', letterSpacing: '0.02em', wordBreak: 'break-all', lineHeight: 1.4 }}>{address}</code>
                        </div>
                        <button
                            onClick={handleCopy}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.5rem 1rem',
                                borderRadius: '0.375rem',
                                background: copied ? 'rgba(124,58,237,0.14)' : 'rgba(124,58,237,0.08)',
                                border: `1px solid ${copied ? 'rgba(124,58,237,0.34)' : 'rgba(124,58,237,0.22)'}`,
                                color: '#6d28d9',
                                cursor: 'pointer',
                                fontSize: '0.875rem',
                                fontWeight: 500,
                            }}
                        >
                            {copied ? <CheckIcon /> : <CopyIcon />}
                            {copied ? 'Copied!' : 'Copy'}
                        </button>
                    </div>
                </section>

                <section style={{ marginBottom: '4rem' }}>
                    <h2
                        style={{
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            color: '#6d28d9',
                            letterSpacing: '0.3em',
                            textTransform: 'uppercase',
                            marginBottom: '2rem',
                            textAlign: 'center',
                        }}
                    >
                        Arena Flow
                    </h2>

                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                            gap: '1rem',
                        }}
                    >
                        {phases.map((phase) => (
                            <article
                                key={phase.step}
                                style={{
                                    padding: '1.6rem 1.3rem',
                                    borderRadius: '0.75rem',
                                    border: '1px solid rgba(124,58,237,0.2)',
                                    background: '#ffffff',
                                    boxShadow: '0 10px 24px rgba(124,58,237,0.12)',
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: '1.85rem',
                                        fontWeight: 200,
                                        color: 'rgba(124,58,237,0.45)',
                                        display: 'block',
                                        marginBottom: '0.8rem',
                                        fontVariantNumeric: 'tabular-nums',
                                    }}
                                >
                                    {phase.step}
                                </span>
                                <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#6d28d9', margin: '0 0 0.45rem 0', letterSpacing: '0.1em' }}>
                                    {phase.title}
                                </h3>
                                <p style={{ fontSize: '0.9rem', color: '#3f2f67', margin: '0 0 0.7rem 0', lineHeight: 1.5 }}>{phase.desc}</p>
                                <p style={{ fontSize: '0.8rem', color: '#7d6ba2', margin: 0, lineHeight: 1.5 }}>{phase.detail}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '1.5rem',
                    }}
                >
                    <article
                        style={{
                            padding: '1.6rem',
                            borderRadius: '0.75rem',
                            border: '1px solid rgba(124,58,237,0.2)',
                            background: '#ffffff',
                        }}
                    >
                        <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', color: '#7d6ba2', textTransform: 'uppercase' }}>
                            Inside the Arena
                        </span>
                        <ul style={{ listStyle: 'none', padding: 0, margin: '1rem 0 0 0', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                            {arenaInside.map((item, i) => (
                                <li key={i} style={{ fontSize: '0.875rem', color: '#5f4f85', paddingLeft: '0.9rem', borderLeft: '2px solid rgba(124,58,237,0.35)' }}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </article>

                    <article
                        style={{
                            padding: '1.6rem',
                            borderRadius: '0.75rem',
                            border: '1px solid rgba(124,58,237,0.2)',
                            background: '#ffffff',
                            boxShadow: '0 10px 24px rgba(124,58,237,0.08)',
                        }}
                    >
                        <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', color: '#6d28d9', textTransform: 'uppercase' }}>
                            After Graduation
                        </span>
                        <ul style={{ listStyle: 'none', padding: 0, margin: '1rem 0 0 0', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                            {arenaOutside.map((item, i) => (
                                <li key={i} style={{ fontSize: '0.875rem', color: '#3f2f67', paddingLeft: '0.9rem', borderLeft: '2px solid rgba(124,58,237,0.35)' }}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </article>
                </section>
            </main>
        </div>
    );
}
