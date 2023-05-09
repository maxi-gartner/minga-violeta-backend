let name = 'chapters'

let read = (req,res,next) => res.status(200).render('index',//nombre de la vista
{//parametros
    title: '/' +name.toUpperCase(),
    subtitle: 'endpoints of '+ name
} )
export default read