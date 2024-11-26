const express = require('express');
const router = express.Router();

// Mock database or integrate with a live grant search API
const grants = [
    {
        name: 'Education Grant 2024',
        description: 'Funding opportunities for educational institutions.',
        url: 'https://example.com/education-grant'
    },
    {
        name: 'Disaster Relief Grant',
        description: 'Support for communities affected by natural disasters.',
        url: 'https://example.com/disaster-relief-grant'
    }
];

router.post('/api/grants/search', (req, res) => {
    const { keywords, category } = req.body;

    // Simple filtering based on keywords and category
    const filteredGrants = grants.filter(grant =>
        grant.name.toLowerCase().includes(keywords.toLowerCase()) ||
        grant.description.toLowerCase().includes(category.toLowerCase())
    );

    res.json(filteredGrants);
});

module.exports = router;
