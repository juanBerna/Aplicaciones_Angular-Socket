import { Router, Request, Response } from 'express';

const router = Router();

router.get('/mensajes', (req:Request, res: Response) => {
    
    res.json({
        ok: true,
        mensaje: 'todo esta bien'
    });
});
router.post('/mensajes', (req:Request, res: Response) => {
    
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    res.json({
        ok: true,
        cuerpo,//ya que la constante que creamos tiene el mismo nombre que la variable que recibimos no es necesario igualarla ya que seria redundante
        de
    });
});

router.post('/mensajes/:id', (req:Request, res: Response) => {
    
    const cuerpo = req.body.cuerpo;
    const de     = req.body.de;
    const id     = req.params.id;

    res.json({
        ok: true,
        cuerpo,//ya que la constante que creamos tiene el mismo nombre que la variable que recibimos no es necesario igualarla ya que seria redundante
        de,
        id
    });
});

export default router;