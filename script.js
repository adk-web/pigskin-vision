// --- GLOBAL BRANDING ---
const PV_GREEN = '#1A3A1A';
const PV_GOLD = '#D4AF37';
const PV_BROWN = '#8B5A2B';
Chart.defaults.color = '#333';
Chart.defaults.font.family = "'Segoe UI', sans-serif";

// =====================================================
// PHASE 1: PROBLEM — TARGETS VS INTERCEPTIONS
// =====================================================

new Chart(document.getElementById('problemChart'), {
    type: 'scatter',
    data: {
        datasets: [
        {
            label: 'Cornerbacks',
            data: [
                // Elite (low targets, low INTs)
                {x: 40, y: 1}, {x: 45, y: 2}, {x: 50, y: 1},
                {x: 55, y: 2}, {x: 60, y: 1},

                // Good CBs
                {x: 65, y: 2}, {x: 70, y: 3}, {x: 75, y: 2},
                {x: 80, y: 3}, {x: 85, y: 2},

                // Average CBs
                {x: 90, y: 3}, {x: 95, y: 4}, {x: 100, y: 3},
                {x: 105, y: 4}, {x: 110, y: 3},

                // Risky / targeted CBs (more INTs but worse coverage)
                {x: 115, y: 5}, {x: 120, y: 4}, {x: 125, y: 6},
                {x: 130, y: 5}, {x: 135, y: 6},

                // High-volume CBs (lots of targets, inconsistent INTs)
                {x: 140, y: 3}, {x: 145, y: 4}, {x: 150, y: 5},
                {x: 155, y: 4}, {x: 160, y: 6},

                // Outliers
                {x: 100, y: 7},  // lucky INT spike
                {x: 150, y: 2},  // heavily targeted, low production
                {x: 60, y: 5},   // rare high-INT elite season
                {x: 130, y: 1},  // bad CB avoided late season
                {x: 75, y: 0}    // shutdown CB
            ],
            backgroundColor: PV_GREEN
        }
        ]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Traditional Stats Mislead: Targets vs Interceptions'
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Targets Faced'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Interceptions'
                }
            }
        }
    }
});

// =====================================================
// PHASE 2: DATA SOURCE — PFR VS NFLFASTR
// =====================================================
new Chart(document.getElementById('dataSourceChart'), {
    type: 'bar',
    data: {
        labels: ['nflfastR (Tagged Plays)', 'PFR (True Targets)'],
        datasets: [{
            label: 'Coverage Data Availability',
            data: [10.2, 100],
            backgroundColor: [PV_BROWN, PV_GREEN]
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Data Quality Comparison: nflfastR vs PFR'
            }
        }
    }
});

// =====================================================
// PHASE 3: FEATURES — ARCHETYPES
// =====================================================
new Chart(document.getElementById('featureChart'), {
    type: 'radar',
    data: {
        labels: ['Incomp Rate', 'INT Rate', 'Passer Rating', 'Target Rate', 'Yds/Tgt'],
        datasets: [
        {
            label: 'Lockdown CB',
            data: [90, 20, 95, 92, 94],
            borderColor: PV_GOLD
        },
        {
            label: 'Ball Hawk',
            data: [75, 100, 85, 65, 60],
            borderColor: PV_BROWN
        }
        ]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Different CB Archetypes Excel in Different Features'
            }
        }
    }
});

// =====================================================
// PHASE 4: FILTERS — FUNNEL
// =====================================================
new Chart(document.getElementById('filterChart'), {
    type: 'bar',
    indexAxis: 'y',
    data: {
        labels: ['All CBs', '600+ Snaps', '13+ Games', '40+ Targets'],
        datasets: [{
            label: 'Players Remaining',
            data: [195, 120, 85, 64],
            backgroundColor: PV_GOLD
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Qualification Funnel'
            }
        }
    }
});

// =====================================================
// PHASE 5: MODEL — PCA WEIGHTS
// =====================================================
new Chart(document.getElementById('pcaChart'), {
    type: 'line',
    data: {
        labels: ['2020','2021','2022','2023','2024'],
        datasets: [
            { label: 'Incomp Rate', data: [20.7,22.6,24.5,24.6,14.7], borderColor: PV_GREEN },
            { label: 'INT Rate', data: [17.2,17.2,8.0,12.5,18.4], borderColor: PV_GOLD },
            { label: 'Passer Rating', data: [29.9,31.7,28.8,32.1,28.9], borderColor: '#333' },
            { label: 'Target Rate', data: [7.5,2.2,12.8,5.3,13.7], borderColor: PV_BROWN },
            { label: 'Yds/Tgt', data: [24.6,26.2,25.9,25.3,24.3], borderColor: '#6B8E23' }
        ]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Adaptive PCA Weightages by Season'
            }
        }
    }
});

// =====================================================
// PHASE 6: RESULTS — TOP 10
// =====================================================
new Chart(document.getElementById('resultsChart'), {
    type: 'bar',
    indexAxis: 'y',
    data: {
        labels: [
            'Derek Stingley Jr.',
            'Patrick Surtain II',
            'Kamari Lassiter',
            'Marlon Humphrey',
            'Cobie Durant'
        ],
        datasets: [{
            label: 'PCA Score',
            data: [3.71, 3.14, 2.76, 2.31, 2.26],
            backgroundColor: PV_GREEN
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Final Rankings: 2024 Top Cornerbacks'
            }
        }
    }
});

// =====================================================
// PHASE 7: INSIGHT — INT VOLATILITY
// =====================================================
new Chart(document.getElementById('insightChart'), {
    type: 'line',
    data: {
        labels: ['2020','2021','2022','2023','2024'],
        datasets: [{
            label: 'INT Weight (%)',
            data: [17.2,17.2,8.0,12.5,18.4],
            borderColor: PV_GOLD
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'INT Rate Importance Fluctuates by Season'
            }
        }
    }
});