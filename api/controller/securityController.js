const SecurityService = require('../services/securityService');
const securityService = new SecurityService();

class SecurityController {
    static async registerAcl(req, res) {
        const { roles, permissions } = req.body;

        const { userId } = req;
        
        // console.log(userId);

        try {
            const acl = await securityService.registerAcl({
                roles,
                permissions,
                userId
            });

            res.status(201).send(acl);

        } catch (error) {
            res.status(400).send({
                message: error.message
            });
        }
    }
}

module.exports = SecurityController;