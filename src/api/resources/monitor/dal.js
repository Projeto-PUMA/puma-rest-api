import Monitor from "./Monitor";

export async function getAll(limit) {
  try {
    const monitores = await Monitor.query()
      .skipUndefined()
      .eager("[usuario(selectNomeAndId).telefone, disciplina]", {
        selectNomeAndId: builder => {
          builder.select("nome", "email", "id");
        }
      })
      .orderBy("created_at", "desc")
      .limit(limit)
      .throwIfNotFound();
    return monitores;
  } catch (error) {
    throw error;
  }
}

export async function create(body) {
  try {
    const monitor = await Monitor.query()
      .insert(body)
      .returning("*");
    return monitor;
  } catch (error) {
    throw error;
  }
}

export async function findById(id) {
  try {
    const monitor = await Monitor.query()
      .findById(id)
      .eager("[usuario(selectNomeAndId).telefone, disciplina]", {
        selectNomeAndId: builder => {
          builder.select("nome", "email", "id");
        }
      })
      .throwIfNotFound();
    return monitor;
  } catch (error) {
    throw error;
  }
}

export async function patch(id, body) {
  try {
    const options = {
      relate: true,
      noDelete: true
    };
    const data = body;
    data.id = id;
    await Monitor.query()
      .upsertGraph(body, options)
      .where("id", id)
      .returning("*");
    const monitor = await this.findById(id);
    return monitor;
  } catch (error) {
    throw error;
  }
}

export async function deleteById(id) {
  try {
    const monitor = await Monitor.query()
      .deleteById(id)
      .throwIfNotFound();
    return monitor;
  } catch (error) {
    throw error;
  }
}
