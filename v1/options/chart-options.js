const data = require('../test/chart-text')
data['subtitle'] = {
    text: '副标题'
}
data.series.push({
    'name': 'Gakki',
    'data': [2, 3, 5]
})

module.exports = data