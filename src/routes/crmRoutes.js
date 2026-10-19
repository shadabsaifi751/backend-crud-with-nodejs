import { addNewContact, deleteContact, getContact, getContactWithId, updateContact } from "../controllers/crmController"


const routes = (app) => {
    app.route("/contact")
        // get all contact
        .get((req, res, next) => {
            //middleware
            console.log(`Request from ${req.originalUrl}`)
            console.log(`Request type ${req.method}`)
            next()
        }, getContact)

        //post a new contact
        .post(addNewContact)



    app.route("/contact/:contactId")
        // get specific contact
        .get(getContactWithId)
        //update contact
        .put(updateContact)

        .delete(deleteContact)
}

export default routes