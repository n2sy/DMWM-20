const Personne = require("../models/personne");
const _ = require("lodash");

exports.getAllPersons = async (req, res) => {

    /* avec async await */
    try {
        const filter = req.query.filter
        const result = await Personne.find({
            "prenom": new RegExp(filter)
        });
        res.status(200).json({
            allPersons: result
        });
    }
    catch (err) {
        console.log(err);
    }


    /* Avec les promesses */
    //   Personne.find()
    //     .then(result => {
    //         res.status(200).json({
    //             allPersons: result
    //         })
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })


    // Retour statique
    // res.status(200).json({
    //     persons: [
    //         {
    //             nom: 'jelassi',
    //             prenom: 'nidhal'
    //         },
    //         {
    //             nom: 'Khorchani',
    //             prenom: 'walid'
    //         }
    //     ]
    // })
}

exports.createPerson = (req, res) => {
    // const prenom = req.body.prenom;
    // const nom = req.body.nom;
    // const age = req.body.age;
    // const profession = req.body.profession;
    // const avatar = req.body.avatar;

    // const newPerson = new Personne({
    //     prenom: prenom,
    //     nom: nom,
    //     age: age,
    //     profession: profession,
    //     avatar: avatar
    // });

    const newP = _.pick(req.body, ['prenom', 'nom', 'age', 'profession', 'avatar']);
    const newPerson = new Personne(newP);

    newPerson.save()
        .then(result => {
            res.status(201).json({
                message: 'New Person successfully created',
                prenom: result.prenom,
                nom: result.nom,
                id: result['_id']  //result._id 
            })
        })
        .catch(err => console.log(err))

    // res.status(201).json({
    //     id: new Date().toISOString(),
    //     surname: prenom,
    //     name: nom
    // })

}

exports.getPerson = (req, res) => {
    const pId = req.params['myid'];
    Personne.findById(pId)
        .then(p => {
            if (!p) {
                const error = new Error("Couldn't find this person");
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json(p);
        })
        .catch(err => {
            console.log(err);
        })
}

exports.updatePerson = (req, res) => {
    const pId = req.params['id'];

    Personne.findById(pId)
        .then(p => {
            if (!p) {
                const error = new Error("Couldn't find this person");
                error.statusCode = 404;
                throw error;
            }
            // p.prenom = req.body.prenom;
            // p.nom = req.body.nom;
            // p.age = req.body.age;
            // p.profession = req.body.profession;
            // p.avatar = req.body.avatar;

            p = _.merge(p, req.body)

            return p.save();
        })
        .then(result => {
            res.status(200).json({
                message: "Person succesfully updated",
                person: result
            })
        })
        .catch(err => console.log(err))
}

exports.deletePerson = (req, res) => {
    const pId = req.params['id'];

    Personne.findByIdAndRemove(pId)
        .then(p => {
            if (!p) {
                const error = new Error("Couldn't find this person");
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({
                message: "Person succesfully deleted",
                person: p
            })
        })
        .catch(err => console.log(err))
    // bla bla bla
    // bla bla bla
    // bla bla bla
    // bla bla bla

}