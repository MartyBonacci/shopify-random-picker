import * as data from './data.js'
// console.log(data);

randomize()

function randomize() {
    let tickets = []
    data.data.forEach((transaction) => {
            for (let i = 1; i <= transaction["Lineitem quantity"]; i++) {
                tickets.push({
                    email: transaction.Email,
                    name: transaction["Billing Name"],
                    address1: transaction["Billing Address1"],
                    address2: transaction["Billing Address2"],
                    city: transaction["Billing City"],
                    zip: transaction["Billing Zip"],
                    state: transaction["Billing Province"],
                    phone: transaction["Billing Phone"],

                })
            }
        }
    )

    // console.log(tickets);
    let randomNumber = Math.floor(Math.random() * tickets.length)
    console.log(randomNumber);
    let winner = tickets[randomNumber]
    // console.log(winner);
    let winnerDiv = document.getElementById("winner")
    winnerDiv.innerHTML = `
    <h2>Winner</h2>
    <p><strong>Name:</strong> ${winner.name}</p>
    <p><strong>Email:</strong> ${winner.email}</p>
    <p><strong>Address:</strong> ${winner.address1} ${winner.address2}</p>
    <p><strong>City:</strong> ${winner.city}</p>
    <p><strong>State:</strong> ${winner.state}</p>
    <p><strong>Zip:</strong> ${winner.zip}</p>
    <p><strong>Phone:</strong> ${winner.phone}</p>
`
}

window.randomize = randomize