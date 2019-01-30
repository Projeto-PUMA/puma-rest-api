import Permissao from './Permissao';

export default async function findRolesList(roles) {
  try {
    const permissoes = await Permissao
      .query()
      .select('papel.nome as role', 'acao.nome as action', 'recurso.nome as resource')
      .joinRelation('[acao,  papel, recurso]')
      .whereInComposite('papel.nome', roles);
    await console.log(permissoes);
    return permissoes;
  } catch (error) {
    throw error;
  }
}
