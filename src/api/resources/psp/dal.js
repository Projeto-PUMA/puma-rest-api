import Psp from './Psp';

export async function getAll() {
  try {
    const psp = await Psp
      .query();
    if (psp === undefined) {
      throw new Error('Not Found');
    }
    return psp;
  } catch (error) {
    throw error;
  }
}

export async function create(body) {
  try {
    const psp = Psp.query().insertGraph(body);
    return psp;
  } catch (error) {
    throw error;
  }
}

export async function findById(id) {
  try {
    const psp = await Psp.query().findById(id);
    if (psp === undefined) {
      throw new Error('Not Found');
    }
    return psp;
  } catch (error) {
    throw error;
  }
}

export async function patch(id, body) {
  try {
    const options = {
      relate: true, noDelete: true,
    };
    const data = body;
    data.id = id;
    const psp = await Psp.query().upsertGraph(data, options).where('id', id);
    if (psp === undefined) {
      throw new Error('Not Found');
    }
    return psp;
  } catch (error) {
    throw error;
  }
}

export async function deleteById(id) {
  try {
    const psp = await Psp.query().deleteById(id);
    return psp;
  } catch (error) {
    throw error;
  }
}
