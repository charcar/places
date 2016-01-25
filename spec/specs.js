describe('Place', function(){
  it("creates an object with the given properties of: locations, landmark, time of year, and notes", function(){
    var testPlace = new Place("Washington", "monument", "Winter", "had a great time");
    expect(testPlace.local).to.equal("Washington");
    expect(testPlace.landmark).to.equal("monument");
    expect(testPlace.season).to.equal("Winter");
    expect(testPlace.notes).to.equal("had a great time");
  });
  it("adds the local with the landmark", function(){
      var testPlace = new Place("Washington", "monument");
      expect(testPlace.fullLand()).to.equal("Washington monument");
    })
});

// describe('Contact', function(){
//   it("creates a new contact with the given properties", function(){
//     var testContact = new Contact("Rita","Moreno");
//     expect(testContact.firstName).to.equal("Rita");
//     expect(testContact.lastName).to.equal("Moreno");
//     expect(testContact.addresses).to.eql([]);
//   });
//   it("adds the fullName method to all contacts", function(){
//     var testContact = new Contact("Sherlock", "Holmes");
//     expect(testContact.fullName()).to.equal("Sherlock Holmes");
//   })
// });
//
// describe('Address', function() {
//   it("creates a new address with the given specifications", function() {
//     var testAddress = new Address("432 Main St", "Test City", "Test State");
//     expect(testAddress.street).to.equal("432 Main St");
//     expect(testAddress.city).to.equal("Test City");
//     expect(testAddress.state).to.equal("Test State");
//   });
//   it("adds the fullAddress method to all addresses", function() {
//     var testAddress = new Address("123 Main St", "Test City","Test State");
//     expect(testAddress.fullAddress()).to.equal("123 Main St, Test City, Test State");
//   });
//
// });
