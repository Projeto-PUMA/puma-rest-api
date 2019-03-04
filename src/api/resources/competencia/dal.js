import Competencia from "./Competencia";

export async function getAll() {
  try {
    const competencia = await Competencia.query();
    console.log(competencia.length);
    if (!competencia || !competencia.length) {
      throw new Error("Not Found");
    }
    return competencia;
  } catch (error) {
    throw error;
  }
}

export async function create(body) {
  try {
    const competencia = Competencia.query().insert(body);
    return competencia;
  } catch (error) {
    throw error;
  }
}

export async function findById(id) {
  try {
    const competencia = await Competencia.query().findById(id);
    if (competencia === undefined) {
      throw new Error("Not Found");
    }
    return competencia;
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
    const competencia = await Competencia.query()
      .upsertGraph(data, options)
      .where("id", id);
    if (competencia === undefined) {
      throw new Error("Not Found");
    }
    return competencia;
  } catch (error) {
    throw error;
  }
}

export async function deleteById(id) {
  try {
    const competencia = await Competencia.query().deleteById(id);
    return competencia;
  } catch (error) {
    throw error;
  }
}
