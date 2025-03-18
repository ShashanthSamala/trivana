import express from 'express';
import Issue from '../models/Issue.js';

const router = express.Router();

// Get all issues
router.get('/', async (req, res) => {
  try {
    const issues = await Issue.find().sort({ createdAt: -1 });
    res.json(issues);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single issue
router.get('/:id', async (req, res) => {
  try {
    const issue = await Issue.findById(req.params.id);
    if (!issue) {
      return res.status(404).json({ message: 'Issue not found' });
    }
    res.json(issue);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new issue
router.post('/', async (req, res) => {
  const issue = new Issue({
    title: req.body.title,
    description: req.body.description,
    priority: req.body.priority,
    submittedBy: req.body.submittedBy
  });

  try {
    const newIssue = await issue.save();
    res.status(201).json(newIssue);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update an issue
router.patch('/:id', async (req, res) => {
  try {
    const issue = await Issue.findById(req.params.id);
    if (!issue) {
      return res.status(404).json({ message: 'Issue not found' });
    }

    if (req.body.title) issue.title = req.body.title;
    if (req.body.description) issue.description = req.body.description;
    if (req.body.status) issue.status = req.body.status;
    if (req.body.priority) issue.priority = req.body.priority;
    if (req.body.assignedTo) issue.assignedTo = req.body.assignedTo;
    issue.updatedAt = Date.now();

    const updatedIssue = await issue.save();
    res.json(updatedIssue);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete an issue
router.delete('/:id', async (req, res) => {
  try {
    const issue = await Issue.findById(req.params.id);
    if (!issue) {
      return res.status(404).json({ message: 'Issue not found' });
    }
    await issue.deleteOne();
    res.json({ message: 'Issue deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;