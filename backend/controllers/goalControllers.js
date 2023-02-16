const asyncHandler = require('express-async-handler')
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get Goals' })
})
const setGoals = asyncHandler(async (req, res) => {
    console.log(req.body)
    if (!req.body.text) {
        // .json({ message: 'Please add a text field!' })
        res.status(400)
        throw new Error('Please add a text field!')
    }
    res.status(201).json({ message: 'Set Goal' })
})
const updateGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update Goal ${req.params.id}` })
})
const deleteGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete Goal ${req.params.id}` })
})

module.exports = { getGoals, setGoals, updateGoals, deleteGoals }