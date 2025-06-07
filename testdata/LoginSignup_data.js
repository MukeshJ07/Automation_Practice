const base = require('@playwright/test');

exports.customtest = base.test.extend(
    {
        Datacreation:
        {
            //Login Sign up data
            Name: "Mukesh J",
            email: "trump@gmail.com",
            password: "Testautomation7@2000",
            Date: 7,
            Month: "February",
            Year: 2000,
            First_name: "Mukesh",
            Last_name: "J",
            Company: "Testing",
            Address: "130/2 New Adresss Tester",
            Address2: "No Address",
            Country: "United States",
            State: "Tamilnadu",
            City: "Chennai",
            Zipcode: 600021,
            Mobile_Number: 4785426995
        }
    }
);