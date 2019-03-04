import Disciplina from "./Disciplina";

export async function getAll() {
  try {
    const disciplina = await Disciplina.query();
    if (!disciplina || !disciplina.length) {
      throw new Error("Not Found");
    }
    return disciplina;
  } catch (error) {
    throw error;
  }
}

export async function create(body) {
  try {
    const disciplina = Disciplina.query().insert(body);
    return disciplina;
  } catch (error) {
    throw error;
  }
}

export async function findById(id) {
  try {
    const disciplina = await Disciplina.query().findById(id);
    if (!disciplina || !disciplina.length) {
      throw new Error("Not Found");
    }
    return disciplina;
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
    const disciplina = await Disciplina.query()
      .upsertGraph(data, options)
      .where("id", id);
    if (disciplina === undefined) {
      throw new Error("Not Found");
    }
    return disciplina;
  } catch (error) {
    throw error;
  }
}

export async function deleteById(id) {
  try {
    const disciplina = await Disciplina.query().deleteById(id);
    return disciplina;
  } catch (error) {
    throw error;
  }
}
