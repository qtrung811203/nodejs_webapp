const Toy = require('../models/Toys');
const { mongooseToObject } = require('../../util/mongoose')

class ToysController {

    //[GET] /toys/:slug
    show(req, res, next) {
        Toy.findOne({slug: req.params.slug})
            .then(toy=> {
                res.render('toys/show', { toy : mongooseToObject(toy) });
            })
            .catch(next);
    }
    
    //[GET] /toys/create
    create(req, res, next) {
        res.render('toys/create')
    }

    //[POST] /toys/store
    store(req, res, next) {
        const toy = new Toy(req.body);
        toy.save()
            .then(() => res.redirect(`/`))
                .catch(error => {
                    
                })
    }

    //[GET] /toys/:id/edit
    edit(req, res, next) {
        Toy.findById(req.params.id)
            .then(toy => res.render('toys/edit', {
                toy: mongooseToObject(toy)
            }))
            .catch(next) 
    }

    //[PUT] /toys/:id
    update(req, res, next) {
        Toy.updateOne({_id: req.params.id}, req.body)
        .then(() => res.redirect('/me/stored/toys'))
        .catch(next)
    }
    
    //[DELETE] /toys/:id
    delete(req, res, next) {
        Toy.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }

}

module.exports = new ToysController();
