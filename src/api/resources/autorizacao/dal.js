import Permissao from '../autorizacao/Permissao'

export async function findRolesList(roles) {
    try {
        const permissoes = await Permissao
            .query()
            .select('acao.nome as action', 'papel.nome as role', 'recurso.nome as resource')
            .joinRelation('[acao,  papel, recurso]')
            .whereInComposite('papel.nome', roles)
        return permissoes;
    } catch (error) {
        throw error;
    }
}
