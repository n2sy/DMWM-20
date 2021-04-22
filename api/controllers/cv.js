

exports.getAllPersons = (req, res) => {
    res.status(200).json({
        persons : [
            {
                nom : 'jelassi',
                prenom : 'nidhal'
            },
            {
                nom : 'Khorchani',
                prenom : 'walid'
            }
        ]
    })
}

exports.createPerson = (req, res) => {
    const prenom = req.body.prenom;
    const nom = req.body.nom;

    res.status(201).json({
        id : new Date().toISOString(),
        surname : prenom,
        name : nom
    })

}