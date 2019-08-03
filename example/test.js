const response = pm.response.json()
pm.test('test', () => {
  pm.expect(response.ok).to.be.true
})

pm.response.status.to.be.eql(200)
